import React from "react";
import {
    Layout,
    Row,
    Col,
} from "antd";
import Header from '../components/header'
import Footer from '../components/footer'
import { useSelector } from "react-redux";
import { user } from "../store/reducers/users";

import WalletSection from '../components/wallets/walletSection'
import UserSection from '../components/users/userSection'

const WorkPage = () =>{

    const userUser = useSelector(user);

    return (
        <Layout>
            <Header />
            <Layout.Content className="main-wrapper">
                <Row justify="left">
                    <Col xs={24}>
                        <div className="main-title">
                            Welcome, {userUser.firstName} !                        
                        </div>
                    </Col>
                </Row>

                <Row justify="left">
                    <UserSection />
                </Row>
                
                <Row justify="left">
                    <WalletSection />
                </Row>
            </Layout.Content>
            <Layout.Footer>
                <Footer />
            </Layout.Footer>
        </Layout>
    );

}


export default WorkPage;