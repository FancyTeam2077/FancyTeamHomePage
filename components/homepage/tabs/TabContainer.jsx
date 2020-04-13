import React, { useEffect, useState } from "react";

function TabContainer(props) {
    return (
        <div className="TabContainer">
          {props.children}
          <style jsx>{`
            .TabContainer{
              padding: 30px;
              background-color: #FFFFFF;
            }
          `}</style>
        </div>
    )
}

export default TabContainer