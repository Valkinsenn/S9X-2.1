import React, { Component } from 'react';
import Navbar from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Team from './TeamComponent';
import History from './HistoryComponent';
import Join from  './JoinComponent';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    render() {

        return(
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/team" component={Team} />
                    <Route exact path="/history" component={History} />
                    <Route exact path="/wiki" component="Wiki" />
                    <Route exact path="/join" component={Join} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;