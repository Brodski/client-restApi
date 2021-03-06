/*
* The App begins by loading googles API from a CDN and soon initializes itself (client, Api-key).
* It then checks if the user is logged in. If so it get user data from backend. If not it loads a demo profile
* The app uses Google's OAuth to verify the user; first it sends a token to my backend server then the server verifies the user using Google's Api + that token.
*/
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import * as Common from './BusinessLogic/Common';
import * as GApiAuth from './HttpRequests/GApiAuth'
import {
  IsInitFinishedContext,
  IsLoggedContext,
  UserContext,
  UserSettingsContext
} from './Contexts/UserContext'
import About from './Components/About.jsx';
import Delete from './Components/Delete.jsx';
import Nav from './Components/Nav.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx'
import SettingsNEW from './Settings/SettingsMain.jsx';
import Terms from './Components/Terms.jsx'
import Youtube from './Youtube/YoutubeMain.jsx';

function App() {

  const [user, setUser] = useState(Common.getMockUser())
  const [userSettings, setUserSettings] = useState(Common.getMockUser())
  const [isLogged, setIsLogged] = useState(false)
  const [isInitFinished, setIsInitFinished] = useState(false)

  async function initGApi() {

    const GoogleAuth = await GApiAuth.initGoogleAPI()
    if (GApiAuth.isHeSignedIn()) {
      await Common.betterLogin(setUser, setUserSettings)
    }
    
    setIsInitFinished(true)
    setIsLogged(GApiAuth.isHeSignedIn())

    // solution(?) to the 2% crash chance where i get random thread bug saying GoogleAuth is null. I think the interpreter does not fully await for initGoogleAPI()???
    while (GoogleAuth == null) {
      await Common.sleep(500)
      initGApi()
      return;
    }

    // Sign-in listeners: https://developers.google.com/identity/sign-in/web/listeners
    GoogleAuth.isSignedIn.listen(function (val) {
      setIsLogged(GApiAuth.isHeSignedIn())
      window.location.reload(true);
    });
  }

  useEffect(() => {
    // adblock will block the googleapi script/link/cdn if its in the HTML
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://apis.google.com/js/client.js";
    script.async = true
    document.body.appendChild(script)
    script.onload = () => {
      initGApi()
    }

    moment.updateLocale('en', {
      relativeTime: { m: "1 minute", h: "1 hour", d: "1 day", M: "1 month", y: "1 year",}
    });
  }, [])

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <UserSettingsContext.Provider value={{ userSettings, setUserSettings }}>
            <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>
              <IsInitFinishedContext.Provider value={{ isInitFinished, setIsInitFinished }}>
                <Nav key="Nav" />
                <Route path="/" exact component={Youtube} />
                <Route path="/about" component={About} />
                <Route path="/organize" component={SettingsNEW} />
                <Route path="/privacy" component={PrivacyPolicy} />
                <Route path="/terms" component={Terms} />
                <Route path="/delete" component={Delete} />
              </IsInitFinishedContext.Provider>
            </IsLoggedContext.Provider>
          </UserSettingsContext.Provider>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;