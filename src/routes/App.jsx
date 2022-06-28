import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "../containers/Layout";
import RecoveryPass from "../pages/RecoveryPass";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SendMail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";


import '../styles/global.css'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery-pass" element={<RecoveryPass />} />
                    <Route path="/send-email" element={<SendMail />} />
                    <Route path="/new-password" component={<NewPassword />} />
					<Route path="/account" component={<MyAccount />} />
					<Route path="/signup" component={<CreateAccount />} />
					<Route path="/checkout" component={<Checkout />} />
					<Route path="/orders" component={<Orders />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
        
    );
}

export default App;