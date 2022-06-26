import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from "../containers/Layout";
import RecoveryPass from "../containers/RecoveryPass";
import Login from "../containers/Login";
import '../styles/global.css'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/recovery-pass" component={RecoveryPass} />
                    <Route component={NotFound} />
                </Layout>
            </Switch>
        </BrowserRouter>
        
    );
}

export default App;