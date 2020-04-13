import React, { useEffect, useState } from "react";

function News(params) {
  return (
    <div>
      <div className="subTitle">新闻速递</div>
      <div className="contentBox">
        <p>
            xxxxxxxxxxxxxxxxx
        </p>
        <p>
            xxxxxxxxxxxxxxxxx
        </p>
        <p>
            xxxxxxxxxxxxxxxxx
        </p>
        <p>
            xxxxxxxxxxxxxxxxx
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

export default News;
