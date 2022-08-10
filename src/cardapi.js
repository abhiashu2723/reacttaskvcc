import React from "react";
import moment from "moment";
import{Link}from 'react-router-dom'

export default function Cardapi(props) {
  return (
    <div className={props.cardcomp}>
      <div className={props.crdflx}>
        <div className={props.storiesapi}>
        <div className={props.imgdiv}>
          <Link to={props?.valueimgslug || " "}>
           <img src={props.img} alt="" width={props.width} className={props.bdrradius} />
           </Link>
        </div>
        <div className={props.contentapi}>
        <Link to={props?.valueheadingslug || " " }>
        <h2>{props.heading}</h2>
          <h3>{props.heading}</h3>
          </Link>
          <Link className={props.contentnameslug}to={props?.valuenameslug || " "}>
        <h4>{props.name}</h4>
        </Link>
        <Link className={props.contentslug}to={props?.valuetitleslug || " "}>
        <p className={props.contentapi}>{props.title}</p>
        </Link>
        <Link className={props.contentauthorslug}to={props?.valueauthorslug || " "}>
        <span className={props.publishapi}>{moment(props.publish).format("Do MMM YYYY")}</span>
        <span className={props.authorapi}>{props.author}</span>
        </Link>
        </div>
        
        </div>    
        
        </div>
      </div>
  );
}
