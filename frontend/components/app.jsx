import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SessionForm from './session_form/session_form'
import LogInFormContainer from './session_form/login_form_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import welcome from './welcome/welcome';
//search bar
// import PictureIndex from './pictures/pictures_index_container';
import UploadPicture from './pictures/upload_picture';
import ShowPicture from './pictures/pictures_show';
import HomePage from './home/home';
import home_container from './home/home_container';
import PicturesShowContainer from './pictures/pictures_show_container';
import UploadPictureContainer from './pictures/upload_picture_container';

const App = () => (
    <div>
        <header className="header-container">
            <div className="links"> 
                <div id="nav-bar-things">
                <Link to="/" id="logo"><h1>InAFlash</h1></Link>
                    <a href="https://github.com/VPilipenko334" id="git">Github      </a>
                    <a href="https://linkedin.com/in/veronikapilipenko" id="linkedin">LinkedIn</a>
                    <br/>
                    </div>
                <input type="text" placeholder="Search" />
                <GreetingContainer />
                {/* <PictureIndexContainer /> */}
            </div>
            </header>


            <div className="login-links">
                <Switch>
                        <Route exact path="/" component={welcome} />
                        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                        <AuthRoute exact path="/login" component={LogInFormContainer} />


                        <ProtectedRoute exact path="/userId" component={HomePage} />
                        <ProtectedRoute exact path="#/upload" component={UploadPictureContainer} />
                        {/* <ProtectedRoute exact path="#/pictures/:pictureId" component={PicturesShowContainer} /> */}

                </Switch>
            </div>
        </div>
    
);

export default App;