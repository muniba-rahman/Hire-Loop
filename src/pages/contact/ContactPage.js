import React, { useState } from "react";
import './ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    comment:""
  })

  const validation = (data) => {
    for(var key in data){
      if(!data[key].trim().length>0){
        return false;
      }
    }
    return true;
  }

  const handleSubmit = (e)=>{
    console.log("form ===>", formData)
    e.preventDefault()
    if(validation(formData)){
      console.log("valid")
    }else{
      window.prompt("In Valid form")
    }
  }

  return (
    <div className="contactPage">
      <section className="banner">
        <div className="overlay" style={{ alignItems: "center", justifyContent: "center" }}>
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="sec-1">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <fieldset>
                <label>First Name</label>
                <input onChange={(e)=>setFormData({...formData, firstName:e.target.value})}/>
              </fieldset>
              <fieldset>
                <label>Last Name</label>
                <input onChange={(e)=>setFormData({...formData, lastName:e.target.value})}/>
              </fieldset>
            </div>
            <fieldset>
              <label>Email</label>
              <input type="email" onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
            </fieldset>
            <fieldset>
              <label>Feedback or Suggestions</label>
              <textarea onChange={(e)=>setFormData({...formData, comment:e.target.value})}/>
            </fieldset>
            <button>Submit</button>
          </form>
        </div>
        <div className="right">
          <h2 style={{fontWeight:"bolder"}}>Give Us Your Thoughts!</h2>
          <h4>Don't hesitate to contact us for any kind of Information or Feedback about AIC</h4><br/>
          <h6>You can call us at: <a href={"tel:+9203152624276"}>{"(92) 03152624276"}</a></h6>
        </div>
      </section>
      <section className="sec-2">
        <h5>Come Visit Us On Campus!</h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7235.969794228944!2d67.10902877239765!3d24.932584415063182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338bf22becb0f%3A0xd5e50842c5c4867b!2sNED%20University%20Of%20Engineering%20%26%20Technology%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1653247239241!5m2!1sen!2s" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
}
