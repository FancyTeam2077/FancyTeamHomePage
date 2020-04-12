import React, { useEffect, useState } from "react";
import TabContent from './TabContent'

function Content() {
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
      <div className="ContentBG">
        <div className="Content">
          <div className="wrapper">
            <div className="bg">
              <div className="button1 buttonStyle">立即加入</div>
              <div className="button2 buttonStyle">获取公开课PPT</div>
            </div>
          </div>
        <TabContent />
      </div>

      </div>
      <style jsx>{`
        .ContentBG{
          background-color:#EEEEEE
        }
        .Content {
          max-width: 60.25rem;
          margin: 0 auto;
        }
        .wrapper{
          position: relative;
          width: 100%;
          padding-top: 38%;
          margin: 0px auto;
        }
        .bg{
          background: url(/img/meetandcode_blue.jpg) center center no-repeat;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border: 1px solid #ececec;
          width: 100%;
          height: 100%;
          background-size: cover;
        }
        .buttonStyle{
          font-size:16px;
          color:#fff;
          padding:0 20px;
          height:40px;
          border-radius:5px;
          justify-content:center;
          align-items:center;
          display:inline-flex;
          cursor:pointer
        }

        .button1{
          background-color:#fb9d08;
          position:relative;
          margin-left: -117px;
          top:300px;
          left:50%;
        }
        .button2{
          background-color:#adadad;
          position:relative;
          margin-left:20px;
          top:300px;
          left:50%;
        }
      `}</style>
    </>
  );
}

export default Content;
