import React, { useEffect, useState } from "react";

function Introduction() {
  return (
    <div>
      <div className="subTitle">XXXXX简介</div>
      <div className="contentBox">
        <p>---有的人自学JS、HTML、CSS，小有成就但心里总觉得空虚；</p>
        <p>---有的人上某XX前端培训班，基础平平但心里总觉得寂寞；</p>
        <p>---有的人混迹在各大前端论坛，寻寻觅觅；</p>

        <p>但心里总觉得没有方向感。</p>

        <p>你需要一个引路人，需要一个心灵的导师。别慌！这里是XXXX。</p>

        <p>
          XXXXX由Fancy社团和字节跳动合办，面向在校大学生，为培养最优秀最有潜力的前端人才举办的前端技术系列课程。
        </p>
      </div>

      <div className="subTitle">目标群体</div>
      <div className="contentBox">
        <p>2020年及以后毕业的所有高校全日制在校大学生</p>
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
      `}</style>
    </div>
  );
}

export default Introduction;
