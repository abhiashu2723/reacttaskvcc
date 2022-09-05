import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Premium from "./premium";

export default function Cardapi(props) {
  return (
    <div className={props.cardcomp}>
      <div className={props.crdflx}>
        <div className={props.storiesapi}>
          <div className={props.imgdiv }>
            <Link to={props?.imgslug || " "}>
              <img
                src={props.img}
                alt=""
                width={props.width}
                className={props.bdrradius}
              />
              {props.premium ==="1"? <Premium precard="premium-card "/>:null}
            </Link>

          </div>
          <div className={props.contentapi}>
            
              {/* <h2>{props.heading}</h2> */}
              <h3 className={props.headerfinance}>
              <Link className={props.header}to={props?.headingslug || " "}>{props.heading}</Link>
              </h3>
            
            <Link
              className={props.contentnameslug}
              to={props?.valuenameslug || " "}
            >
              <h4 className={props.headerfinance}>{props.name}</h4>
            </Link>
            <p className={props.contentapi}>
            <Link
              className={props.contentslug}
              to={props?.valuetitleslug || "/ "}
            >
              {props.title}
            </Link>
              </p>
            <Link
              className={props.contentauthorslug}
              to={props?.valueauthorslug || " "}
            >
              <ul className={props.dotted}>
              <li className={props.publishapi}>
                {moment(props.publish).format("Do MMM YYYY")}
              </li>
              <li className={props.authorapi}>{props.author}
                {/* <button className={props.action}></button> */}
              </li>
              <li className={props.buttonhover1}>{props.onebutton}</li>
              <li  className={props.buttonhover}>{props.authorextra}</li>
              </ul>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
