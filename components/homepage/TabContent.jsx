import React, { useEffect, useState } from "react";
import Introduction from "./tabs/Introduction";
import TabContainer from "./tabs/TabContainer";
import FlowChart from "./tabs/flowChart";
import Reword from "./tabs/Reword";
import Teacher from "./tabs/Teacher";
import News from "./tabs/News";
import QA from "./tabs/QA";

import { Tabs } from "antd";

const { TabPane } = Tabs;

function TabContent() {
  return (
    <div className="bg">
      <Tabs
        defaultActiveKey="1"
        onChange={() => {}}
        type="card"
        tabBarGutter={1}
        size="large"
        tabBarStyle={{
          margin: 0
        }}
      >
        <TabPane tab="社团介绍" key="1">
          <TabContainer>
            <Introduction />
          </TabContainer>
        </TabPane>
        <TabPane tab="活动流程" key="2">
          <TabContainer>
            <FlowChart />
          </TabContainer>
        </TabPane>
        <TabPane tab="获得奖励" key="3">
        <TabContainer>
            <Reword />
          </TabContainer>
        </TabPane>
        <TabPane tab="讲师风采" key="4">
        <TabContainer>
            <Teacher />
          </TabContainer>
        </TabPane>
        <TabPane tab="新闻速递" key="5">
        <TabContainer>
            <News />
          </TabContainer>
        </TabPane>
        <TabPane tab="Q & A" key="6">
        <TabContainer>
            <QA />
          </TabContainer>
        </TabPane>
      </Tabs>
      <style jsx>{`
        .bg {
          padding: 20px;
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
}

export default TabContent;
