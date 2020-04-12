import React, { useEffect, useState } from "react";

function FlowChart(params) {
  return (
    <div>
      <div className="subTitle">活动流程</div>
      <div className="contentBox">
        <p>P.S.:流程图代替</p>
        <img src="/img/7-Tips-To-Write-Clean-And-Better-Code-in-2020.png" alt="" className="chart"/>
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
        .chart{
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default FlowChart;
