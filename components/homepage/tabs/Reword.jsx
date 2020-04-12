import React, { useEffect, useState } from "react";

function Reword(params) {
  return (
    <div>
      <div className="subTitle">获得奖励</div>
      <div className="contentBox">
        <p>
            <strong className="heavy">
            1、前端专家亲自指导
            </strong>
            进入“前端训练营”的同学与前端专家一对一交流，得到专家的亲自指导
        </p>
        <p>
            <strong className="heavy">
            2、毕业证书
            </strong>
            进入“前端训练营”的同学都将获得由XXX颁发的毕业证书
        </p>
        <p>
            <strong className="heavy">
            3、前端工程师实习offer
            </strong>
            在“前端训练营”中表现优异的同学将获得xx公司前端实习offer，实习期间表现优异的同学，有机会直接获得XX公司校招offer
        </p>
        <p>
            <strong className="heavy">
            4、最新智能硬件产品
            </strong>
            在“前端训练营“表现优异的同学还可以获得XX最新研发的智能硬件等产品
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

export default Reword;
