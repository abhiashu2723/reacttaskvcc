import React from "react";

export default function Editior(props) {
  return (<>
    <div className="container">
      <div className="editor-section">
        <div className="section">
          <h2>{props.title}</h2>
          <img src={props.img} alt="images" />
          <h5>{props.name}</h5>
          <p>{props.para}</p>
          <p className="editior-author">
            <span>{props.author}</span>
            <span>{props.description}</span>
          </p>
        </div>

        {/* finance  section */}
        <div className="middle-section">
          <div className="finance-section">
            <div className="section1">
              <img src={props.img1} alt="images" />
            </div>
            <div className="finance-section1">
              <h4>{props.finasec}</h4>
              <p>{props.finadesc}</p>
              <p className="finance-para">
                <span>{props.author1}</span>
                <span>{props.description1}</span>
              </p>
            </div>
          </div>
          {/* tmt section */}
          <div>
            <div className="tmt-section">
              <div>
                <img src={props.imgtmt} alt="images" />
              </div>
              <div className="finance-section1">
                <h4>{props.tmtsec}</h4>
                <p>{props.tmtdesc}</p>
                <p className="tmt-para">
                  <span>{props.authortmt}</span>
                  <span>{props.descriptiontmt}</span>
                </p>
              </div>
            </div>
          </div>

          {/* consumersection */}
          <div>
            <div className="consumer">
              <div>
                <img src={props.imgconsumer} alt="images" />
              </div>
              <div className="finance-section1">
                <h4>{props.consumersec}</h4>
                <p>{props.consumerdesc}</p>
                <p className="consumer-para">
                  <span>{props.authorconsumer}</span>
                  <span>{props.descriptionconsumer}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>

        <div className="left-section">
            <h5>{props.aajtak}</h5>
            <img src={props.imgaajtak} alt="" />
        </div>
      </div>
    </div>
    <div className="container">
    <hr style={props.line}/>
    </div>
    
    </>);
}
