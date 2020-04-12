import React, { useEffect, useState } from "react";

function QA(params) {
  return (
    <div>
      <div className="subTitle">获得奖励</div>
      <div className="contentBox">
        <p>
            <strong className="heavy"> 
                Q1.什么是XXXXXXXX？
            </strong > 
        </p>
        <p>
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        
        <p>
            <strong className="heavy"> 
                Q2.什么是XXXXXXXX？
            </strong > 
        </p>
        <p>
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        
        <p>
            <strong className="heavy"> 
                Q3.什么是XXXXXXXX？
            </strong > 
        </p>
        <p>
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        
      </div>
      <style jsx>{`
        .subTitle {
          background-color: #008fd3;
          color: #fff;
          font-size: 16px;
          border-left: 5px solid #0cf;
          padding: 5px 0 5px 10px;
        }
        .contentBox {
          padding: 20px 0 20px 0;
        }
        .heavy{
          color:#008fd3;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default QA;
