import React from "react";
// import Cardapi from "./cardapi";

export default function Editior(props) {
  return (<>
    <div className="container" key={props.value.stories_list[0].feid}>
      
      <div className="editor-section">

      






         <div className="section">
          <h2>{props.value.section_name}</h2>
          <img  className= "editiorapi"src={props.value.stories_list[0].file_url} alt="" /> 
          <h4>
            {props.name}
            {props.value.stories_list[0].industry_details[0].name}
            </h4>
          <p>
            {props.para}
            {props.value.stories_list[0].title}
            </p>
          <p className="editior-author">
            <span>{props.value.stories_list[0].author_details[0].name}</span>
            <span>{props.description}</span>
          </p>
        </div>

        {/* finance  section */}
        <div className="middle-section">
        {/* {props.value.stories_list.map((value ,index)=>{
            if(index===0)return null;
            return(
              <Cardapi 
              cardcomp="finance-section1"

              img={value.file_url}
              width="100%"
              crdflx="finance-section"
              imgdiv="section1"
             
              title={value.title}
              name={value.industry_details[0].name}
              style={props.line}
              
              />
              
            ) */}
            
            
          
          <div className="finance-section">
            <div className="section1">
              {/* <img src={props.img1} alt="images" /> */}
              <img className="swiggy"src={props.value.stories_list[1].file_url} alt="" />
            </div>
            <div className="finance-section1">
              <h4>
                {props.finasec}
                {props.value.stories_list[1].industry_details[0].name}
                </h4>
              <p>
                {props.finadesc}
                {props.value.stories_list[1].title}
                </p>
              <p className="finance-para">
                <span>{props.value.stories_list[1].author_details[0].name}</span>
                <span>{props.description1}</span>
              </p>
            </div>

          </div>
          <hr style={props.line}/>
          {/* tmt section */}
          <div>
            <div className="tmt-section">
              <div className="section1">
                {/* <img src={props.imgtmt} alt="images" /> */}
                <img className="swiggy"src={props.value.stories_list[2].file_url} alt="" />
              </div>
              <div className="finance-section1">
                <h4>{props.tmtsec}
                {props.value.stories_list[2].industry_details[0].name}</h4>
                <p>{props.tmtdesc}{props.value.stories_list[2].title}</p>
                <p className="tmt-para">
                  <span>{props.value.stories_list[2].author_details[0].name}</span>
                  <span>{props.descriptiontmt}</span>
                </p>
              </div>
            </div>
          </div>
          <hr style={props.line}/>

          {/* consumersection */}
          <div>
            <div className="consumer">
              <div className="section1">
                {/* <img src={props.imgconsumer} alt="images" /> */}
                <img className="swiggy"src={props.value.stories_list[3].file_url} alt="" />
              </div>
              <div className="finance-section1">
                <h4>{props.consumersec}{props.value.stories_list[3].industry_details[0].name}</h4>
                <p>{props.consumerdesc}{props.value.stories_list[3].title}</p>
                <p className="consumer-para">
                  <span>{props.value.stories_list[3].author_details[0].name}</span>
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
    {/* <hr style={props.line}/> */}
    </div>
    
    </>);
}
