import React from 'react'

export default function Advertisement(props) {
  return (
    <div className="adv-height">
        <div className="container">
    <div className="adv_color">
        <h3>Advertisment</h3>
        <div className="advcontainer">
            <img className="width-responsive" src ={props.image} alt="images" width={props.width}/>
        </div>
        
      
    </div>
    </div>
    </div>
  )
}
