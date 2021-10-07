import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
import {appRoutes} from './index';


const AppRoutes = () =>{
    return (
        <Router>
        <div>
          <ul type='none' style={{display:"flex",padding:"10px"}}>
              {
                  appRoutes && appRoutes.length > 0 && appRoutes.map((r,i)=>{
                        return (
                        <li key={i} style={{padding:"10px"}}>
                            <Link to={r.path}> {r.name} </Link>
                          </li>
                        )
                  })
              }
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
              {
                    appRoutes && appRoutes.length > 0 && appRoutes.map((r,i)=>{
                        return (
                            <Route key={i} exact path={r.path} component={r.component} exact={r.fullMatch} />
                        )
                  })
              }
          </Switch>
        </div>
      </Router>
  
    )
}
export default AppRoutes