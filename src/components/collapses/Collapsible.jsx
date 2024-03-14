import React, { useState } from "react";


const Collapsible = ({title,content}) => {

  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };



return (
  <div>
    <button onClick={toggle}>{title}</button> 
    {open ? <div>{content}</div> : null}
  </div>
);

};

export default Collapsible;
