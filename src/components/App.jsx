import React from "react";
import Layout from "../containers/Layout";
import RecoveryPass from "../containers/RecoveryPass";
import Login from "../containers/Login";
import '../styles/global.css'

const App = () => {
    return (
        <Layout>
            <Login></Login>
            <RecoveryPass></RecoveryPass>
        </Layout>
    );
}

export default App;