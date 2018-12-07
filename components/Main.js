import Header from './layouts/Header'
import Footer from './layouts/Footer'
import NavPath from './layouts/NavPath'
import Sidebar from './layouts/Sidebar'
import {Layout} from 'antd';
import navpath from './../constants/menu';
const { Content } = Layout;
import React from 'react';

export default ({ children }) => (
    <React.Fragment>
        <Layout className="ant-layout-has-sider">
            <Sidebar />
            <Layout>
                <Header />
                <Content style={{ margin: '0 16px' }}>
                    <NavPath data={navpath} />
                    <div style={{ minHeight: 360 }}>
                        { children }
                    </div>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    </React.Fragment>
)
