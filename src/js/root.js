import React from 'react';
import ReactDOM from 'react-dom';
import { Route,HashRouter,Switch} from 'react-router-dom';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';

import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" component={PCIndex} />
                            <Route path="/details/:uniquekey" component={PCNewsDetails} />
                            <Route path="/usercenter" component={PCUserCenter} />
                        </Switch>
                    </HashRouter>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" component={MobileIndex} />
                            <Route path="/details/:uniquekey" component={MobileNewsDetails} />
                            <Route path="/usercenter" component={MobileUserCenter} />
                        </Switch>
                    </HashRouter>
                </MediaQuery>
            </div>
        );
    };
}
ReactDOM.render(
   <Root/>, document.getElementById('mainContainer'));
