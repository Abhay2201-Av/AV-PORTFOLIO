import React, { useState } from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  const [name,setname] =useState()
  const [email,setemail] =useState()
  const [contact,setcontact] =useState()
  const [coment,setcoment] =useState()
  const onsubmit=()=>{
    if(name==""&& email==""){
      alert("please enter your name and email")
    }

  else{
    alert("submitted")
  }}
  return (
    <center>
    <div className="contact1">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact">
      
        <div className="image">
        <p className="para">Want to get in touch?</p>
        <section className="contact-section spad" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
              </div>
              <div className="col-lg-3">
                <div className="leave-comment">
                  <form action="https://formspree.io/f/xdoqeero" method="POST" className="form" >
                    <labeL id="label1"
                    >Your name:
                     <input type="text" value={name} placeholder="Name" name="name" className="contact" 
                     onChange={(e)=>{
                      setname(e.target.value);
                     }}
                     required/></labeL><br/>
                    <labeL id="label2"
                    >Your Email:<input type="email" name="email" value={email} 
                    placeholder="Email" className="contact"
                    onChange={(e)=>{
                      setemail(e.target.value);
                     }}  required /></labeL><br/>
                    <labeL id="label3"
                    >Number: <input type="number" name="number" value={contact}
                    onChange={(e)=>{
                      setcontact(e.target.value);
                     }}
                    placeholder="Contact" className="contact" required />
                    </labeL><br/> <labeL id="label4"
                    >Comment: <textarea placeholder="Comment" name="message"
                    onChange={(e)=>{
                      setcoment(e.target.value);
                     }}
                    value={coment} rows="3" cols="25" className="contact" />
                    </labeL><br/>
                    <button type="submit" className="button"
                     onClick={onsubmit}>Submit</button>
                    <br/>
                  </form><br/>
                   <p style={{color:"darkred",fontSize:'20px'}}>Contact me on any of the platform</p>
        <SocialContact />
                 </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
      </div>
    </div>
    <Separator/>
    </center>
  );
}

export default Contact;