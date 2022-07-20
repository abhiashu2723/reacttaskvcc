import React ,{useState}from "react";

export default function Input() {
  const[data,setData]=useState("")
  function change(e){
    e.preventDefault();
    console.log(data);
    setData(" ");

  }
  
  
  // const handleSubmit =(e)=>{
  //   e.preventDefault();
  //   const first = e.target.fname.value;
  //   console.log("Email Address: " + first);
  // }
  return (
    <div className="container">
      <div className="input-container responsive-input">
        <div>
          <img src="./images/envelope.png" alt="" />
        </div>
        <div className="input-content">
          <p>Get industry update with our daily newsletter </p>
          <h4>Subscribe Now !</h4>
        </div>
       
        <div className="input-text-field responsive-email">
          <input  type="text" name="fname"placeholder="Email Address" onChange={(e)=>setData(e.target.value)} value={data}/>
        </div>
        <div className="input-button">
          <button onClick={change}>Sign Up</button>
        </div>
        
      </div>
    </div>
  );
}
