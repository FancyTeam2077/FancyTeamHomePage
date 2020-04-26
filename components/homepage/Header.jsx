import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  BulbOutlined,
  RiseOutlined,
  CommentOutlined 
} from "@ant-design/icons";
import Link from "next/link";
import css from "./Header.less"

let Style = {
  menuItem: {
    lineHeight: "85px",
    fontSize: "16px",
  },
};

function Header() {
  const [state, changeState] = useState({
    current: "mail",
  });
  let handleClick = (e) => {
    console.log("click ", e);
    changeState({
      current: e.key,
    });
  };

  return (
    <>
      <div className="headerContent">
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
        <Menu
          onClick={handleClick}
          selectedKeys={[state.current]}
          mode="horizontal"
          style={{
            borderBottom: "0px solid rgb(0,0,0)",
          }}
        >
          <Menu.Item key="mail" style={Style.menuItem}>
            <Link href="/">
              <div style={Style.menuItem}>
                <HomeOutlined style={Style.menuItem}/>
                首页
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="app" style={Style.menuItem}>        
            <Link href="/about">
              <div style={Style.menuItem}>
                <BulbOutlined style={Style.menuItem}/>
                课程介绍
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="app2" style={Style.menuItem}>
            <RiseOutlined  style={Style.menuItem}/>
            学习课程
          </Menu.Item>
          <Menu.Item key="app3" style={Style.menuItem}>
            <CommentOutlined  style={Style.menuItem}/>
            交流讨论
          </Menu.Item>
          <Menu.Item key="app4" style={Style.menuItem}>
            <AppstoreOutlined style={Style.menuItem}/>
            更多期待
          </Menu.Item>
        </Menu>
        <div className={css.example}>
          sssssssssss
        </div>
      </div>
      <style jsx>{`
        .headerContent {
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #B2B2B2
        }
        .ant-menu-item-selected {
          color: #1890ff;
           {
            /* border-bottom: 2px solid #1890ff; */
          }
        }
      `}</style>
    </>
  );
}

export default Header;
