/**
 * Created by dejan on 13/1/17.
 */
'use strict';

import Login from '../views/Login';
import Profile from '../views/Profile';
import MyTracks from '../views/MyTracks';
import SelectEvent from '../views/SelectEvent';
import RHokTime from '../views/RHoKTime';
import Feedback from '../views/Feedback';
import Share from '../views/Share';

class Router {
    static ROUTES = {
        login: {
            title: 'RHoK In',
            component: Login
        },
        Profile: {
            title: 'My Profile',
            component: Profile,
        },
        MyTracks: {
            title: 'My Tracks',
            component: MyTracks,
        },
        SelectEvent: {
            title: 'Select Event',
            component: SelectEvent,
        },
        RHokTime: {
            title: 'RHoK Time',
            component: RHokTime
        },
        Feedback: {
            title: 'Feedback',
            component: Feedback
        },
        Share: {
            title: 'Share',
            component: Share,
        }
    };

    static addProps(route, props) {
        return Object.assign(route, {passProps: props});
    }
}

export default Router;
