import React, { useEffect, useState } from "react";

function Teacher(params) {
  return (
    <div>
      <div className="subTitle">讲师风采</div>
      <div className="contentBox">
        <div className="card-box hover">
          <img src="/img/QBnOOoLaAfKPirc.png" alt="" className="people"/>
          <div className="intro">
            XXXXXXXXXXXXXXXX
          </div>
          <div className="intro">
            XXXXXXXXXXXXXXXX
          </div>
        </div>
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
        .people{
          width: 200px;
        }
        .intro{
          padding: 10px;
        }
        .card-box{
          border: 1px solid #f0f0f0;
          cursor: pointer;
          display: inline-block;
        }
        .hover:hover {

          transform: translateY(-1px);
          -webkit-box-shadow: 0 0 6px #999;
          box-shadow: 0 0 6px #999;
          -webkit-transition: all .5s ease-out;
          transition: all .5s ease-out;
        }

      `}</style>
    </div>
  );
}

export default Teacher;
