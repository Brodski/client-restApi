import React, { useState, useContext, useEffect } from 'react';
import {SettingsShelf} from '../Components/SettingsShelf';
import * as stLogic from '../BusinessLogic/SettingsLogic';
import { CustomShelf } from '../Classes/User'
import { rename } from 'fs';
import { RenameDialog } from './RenameDialog';
import nextId  from "react-id-generator";

export const AllShelfs = (props) => {
  
  const unSName = "Subscriptions";
  let  [,setState]=useState();
  function updateForce() {
     setState({});
  }
  console.log("AllShelfs props")
  console.log(props)


  const saveUi2Settings = () => {
    console.log("SAVED!")
    props.setUserSettings(prevUserSetting => {
      let newS = { ...prevUserSetting }
      let preq = stLogic.queryShelfs(props.userSettings, true)
      newS.customShelfs = preq
      return newS
    })
    
  }
  function addShelf() {
    //This is preserve changes the user made to the drag n drop
    //saveUi2Settings()
    props.setUserSettings(prevUserSetting => {
      let newS = { ...prevUserSetting }
      let preq = stLogic.queryShelfs(props.userSettings, true)
      newS.customShelfs = preq
      // Afterwards, Add shelf  
      let cs = new CustomShelf()
      cs.title = "Shelf " + (newS.customShelfs.length + 1)
      cs.isSorted = true;
      newS.customShelfs.push(cs)

      return newS
    })
  }
  const UltraShelfs = () => {
  
    let sortedSh    = props.userSettings.customShelfs.filter( sh => { return sh.isSorted } )
    let unSortedSh  = props.userSettings.customShelfs.filter( sh => { return !sh.isSorted } )
    if (!unSortedSh[0]) { unSortedSh.push(new CustomShelf()) }
  
    const sortedShelfz = sortedSh.map( sh => {
      let id = nextId('shelfid-')
      return (<SettingsShelf  key={ id } bindToId={id} shelf={sh} saveUi2Settings={saveUi2Settings}
        userSettings={props.userSettings} setUserSettings={props.setUserSettings} />)
    })

    const unSortedshelfz = unSortedSh.map( sh => {
      let id = nextId('unsortShelf-')
      return (<SettingsShelf key={id} bindToId={id} shelf={sh} saveUi2Settings={saveUi2Settings}
        userSettings={props.userSettings} setUserSettings={props.setUserSettings} />)
    })
    return(
        <div className="flex-subshelf-container">
          {unSortedshelfz}
        <div> some stuff </div>
        <div>
          {sortedShelfz}
        </div>
      </div>
    )

  }
 
  
    
  const allShelfs = props.userSettings.customShelfs.map((sh, idx) => {
    let id = nextId('shelfidlol-')
    return (
      <SettingsShelf key={id} bindToId={id} shelf={sh} userSettings={props.userSettings} setUserSettings={props.setUserSettings} />    
    )
  }
)


  
  return (
    <div id="allbloodyshelfs">
      <button onClick={() => stLogic.logAllShelfs() }> log all Shelf </button>  
      <button onClick={() => stLogic.logIds() }> log IDs Shelf </button>  
      
        <UltraShelfs/>
      <button className="shelfEditBtn" onClick={updateForce } >updateThis </button>
      <button className="shelfEditBtn" onClick={saveUi2Settings } >save! Ui2Settings! </button>
      <button onClick={addShelf} > Add shelf </button>
    </div>
    )
  }