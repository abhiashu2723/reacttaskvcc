import React from "react";
import moment from "moment";

export default function Cardapi(props) {
  return (
    <div className={props.cardcomp}>
      <div className={props.crdflx}>
        <div className={props.storiesapi}>
        <div className={props.imgdiv}>
           <img src={props.img} alt="" width={props.width} className={props.bdrradius} />
        </div>
        <div className={props.contentapi}>
        <h2>{props.heading}</h2>
          <h3>{props.heading}</h3>
        <h4>{props.name}</h4>
        <p className={props.contentapi}>{props.title}</p>
        <span className={props.publishapi}>{moment(props.publish).format("Do MMM YYYY")}</span>
        <span className={props.authorapi}>{props.author}</span>
        </div>
        
        </div>    
        
        </div>
      </div>
  );
}
