import React from "react";
import "./block.css"

const Block = (props) => {
  return (
      <div {...props} className="block__container">
          <div className="block__header">
              {props.header}
          </div>
          <div className="block__content">
              {props.children}
          </div>
      </div>
  )
};

export default Block;