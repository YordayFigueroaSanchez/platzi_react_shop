import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "../containers/Layout";
import RecoveryPass from "../containers/RecoveryPass";
import Login from "../containers/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import '../styles/global.css'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery-pass" element={<RecoveryPass />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
        
    );
}

export default App;