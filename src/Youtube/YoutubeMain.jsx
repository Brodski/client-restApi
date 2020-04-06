/*
* The Youtube page starts by using the user's profile data (his subscriptions) then fetches data from youtube
* If the user is not logged in then we use a demo profile. 
*/
import React, { useContext, useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import nextId from "react-id-generator";

import * as Common from '../BusinessLogic/Common';
import * as GApiAuth from '../HttpRequests/GApiAuth';
import * as ytLogic from '../BusinessLogic/YtLogic';
import {
  IsInitFinishedContext,
  NumVidsContext,
  UserContext,
  UserSettingsContext
} from '../Contexts/UserContext.js';
import FinalShelfs from '../Classes/FinalShelfs'
import GreetingsMsg from '../Common/GreetingsMsg.jsx'
import LoadingMain from '../Common/LoadingMain.jsx';
import ShelfsMany from './ShelfsMany.jsx';
import VidCounter from '../Classes/VidCounter'
import VideoResponse from '../Classes/VideoResponse'

function Youtube() {

  const spamLimit = 40;
  const pageGrowth = 4;
  const initialPageLength = 3;
  // Arbitrary number (max 50) (see youtube's Video api)
  const fetchThisManyVideosPerShelf = 50;
  let isSubscribed = true

  const { user, setUser } = useContext(UserContext);
  const { userSetings, setUserSettings } = useContext(UserSettingsContext);
  const { isInitFinished2, setIsInitFinished2 } = useContext(IsInitFinishedContext);

  const [finalShelfs, setFinalShelfs] = useState(new FinalShelfs())
  const [pageLength, setPageLength] = useState(initialPageLength);
  const [prevPage2, setPrevPage2] = useState(0);
  const [numVids, setNumVids] = useState([new VidCounter()]) 
  const [isFirst, setIsFirst] = useState(true)
  const [isMoreShelfs, setIsMoreShelfs] = useState(false);
  let spamCount = 0;

  function isEndReached() {
    let isEnd = false;
    if (isFirst) {
      return false
    }
    if (spamCount > spamLimit
      || pageLength > user.customShelfs.length
      || prevPage2 >= user.customShelfs.length) {
      isEnd = true
    }
    return isEnd
  }

  function putUnsortedShelfAtBottom() {
    const newUser = user;
    let sort = user.customShelfs.filter(sh => sh.isSorted)
    const unSort = user.customShelfs.filter(sh => !sh.isSorted)
    sort = sort.concat(unSort)
    newUser.customShelfs = sort
    setUser(newUser)
  }

  async function hackHelper() {
    let count = 1
    let isReady = !GApiAuth.checkAll();
    while (isReady) {
      await Common.sleep(100 * count)
      count = count + 1
      if (count > 40) {
        count = count * 2
      }
      isReady = !GApiAuth.checkAll()
    }
  }
  const preFetchMoreSubs = async () => {
    if (isFirst) {
      putUnsortedShelfAtBottom()
    }
    // halt any possible room for multi fetches
    setIsMoreShelfs(false)
    await hackHelper()
  }

  function calcShelfSlice() {
    let sliceVal;
    if (user.customShelfs.length <= pageLength) {
      sliceVal = user.customShelfs.length
    } else {
      sliceVal = pageLength
    }
    return sliceVal
  }


  function isNothingLoadedYet() {
    return (finalShelfs.shelfs[0].videos[0].id == null)
  }

  function setFinalShelfAux(iData) {
    setFinalShelfs(prevShs => {
      const newS = { ...prevShs }
      if (isNothingLoadedYet()) {
        newS.shelfs[0] = iData.shelfs.shift()
      }
      iData.shelfs.forEach(sh => {
        newS.shelfs.push(sh)
      });
      return newS;
    })
    setPrevPage2(pageLength)

    if (pageLength + pageGrowth > user.customShelfs.length) {
      setPageLength(user.customShelfs.length)
    } else {
      setPageLength(pageLength + pageGrowth)
    }

    spamCount = spamCount + pageGrowth;
    setIsMoreShelfs(true)
  }

  function injectData(shelfstuff) {

    const injectShelfTitle = user.customShelfs.slice(prevPage2, calcShelfSlice()).map((sh, idx) => {
      return { "videos": shelfstuff[idx], "title": sh.title, "filters": sh.fewSubs.map(sub => sub.filter) }
    })
    if (!injectShelfTitle[0].videos[0]) {
      injectShelfTitle[0].videos[0] = new VideoResponse()
      injectShelfTitle[0].videos[0].id = ''
    }
    return { shelfs: injectShelfTitle }
  }
  
  async function _fetchActivities() {
    
    
    let shelfsActs = await ytLogic.getActivitiesShelfs(user.customShelfs.slice(prevPage2, calcShelfSlice()))
    
    shelfsActs = ytLogic.removeNonVideos(shelfsActs)
    shelfsActs = shelfsActs.map(shelf => ytLogic.flattenShelf(shelf))
    shelfsActs = shelfsActs.map(shelf => ytLogic.sortByDate(shelf))
    // console.log("shelfActs as only vids and sorted and 'flattened'")
    // console.log(shelfsActs)
    return shelfsActs
  }

  async function _fetchVideos(shelfsActs) {
    let shActs = shelfsActs
    shActs = shActs.map(sh => sh.slice(0, fetchThisManyVideosPerShelf))
    const shelfsVidIds = await shActs.map(sh => ytLogic.extractIds(sh))
    
    let shelfVids = await ytLogic.fetchVideos(shelfsVidIds)

    // console.log("ShelfVids")
    // console.log(shelfVids)
    shelfVids = shelfVids.filter(sh => sh.status > 199 || sh.status < 300).map(sh => sh.result.items)
    shelfVids = shelfVids.map(shelf => ytLogic.sortByDate(shelf))
    
    return shelfVids
  }

  const fetchMoreSubs = async () => {

    let shelfsActs;
    let shelfVids;
    let iData;
    if (isEndReached()) {
      return
    }

    // TODO: could be better
    if (isSubscribed) {
      await preFetchMoreSubs()  
    }
    if (isSubscribed) {
      shelfsActs = await _fetchActivities()
    }
    if (isSubscribed) {
      shelfVids = await _fetchVideos(shelfsActs)
    }
    if (isSubscribed) {
      iData = injectData(shelfVids)
      ytLogic.beginFilter2(iData.shelfs)
    }

    if (isSubscribed) {
      // console.log("SETTING FINAL SHELF")
      // console.log("iData")
      // console.log(iData)
      setFinalShelfAux(iData)
    }
  }

  async function initPage() {
    
    await Common.betterLogin(setUser, setUserSettings, user.isDemo)
    setIsFirst(false) // Initial render will be 'true'. Afterward render it will be set to 'false'

    setNumVids(user.customShelfs.map(() => new VidCounter()))
    await fetchMoreSubs()
  }

  // https://juliangaramendy.dev/use-promise-subscription/ solution to 'mem-leak'
  useEffect(() => {
    initPage()
    return () => {
      isSubscribed = false
    }
  }, [])


  const Shelfs = () => {
    return (
      <InfiniteScroll
        key={nextId('infScroll-')}
        loadMore={() => fetchMoreSubs()}
        hasMore={isMoreShelfs}
        loader={(<div key={nextId('loader-')}> </div>)}
        threshold={1000}
      >
        <NumVidsContext.Provider value={{ numVids, setNumVids }}>
          <ShelfsMany
            key={nextId('manyShelfsid-')}
            shelfs={finalShelfs.shelfs.slice(0, pageLength)}
            hasMore={isMoreShelfs}
          />
        </NumVidsContext.Provider>
      </InfiniteScroll>
    )
  }

  return (
    <div>
      {isInitFinished2 ? <GreetingsMsg /> : null}
      {isNothingLoadedYet() ? <LoadingMain /> : <Shelfs />}
    </div>
  );
}
export default Youtube;