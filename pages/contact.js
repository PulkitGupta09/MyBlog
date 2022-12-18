import React,{useState} from "react";
import styles from "../styles/Contact.module.css";

const contact = () => {
  const [Name, setName] = useState(' ')
  const [Email, setEmail] = useState(' ')
  const [Phone, setPhone] = useState(' ')
  const [Desc, setDesc] = useState(' ')

  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(Name,Email,Phone,Desc);
    var data = {Name,Email,Phone,Desc}
    fetch('http://localhost:3000/api/postcontact', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
 }
 const handleChange = (e)=>{
   //  console.log(e,"change");
   if(e.target.name == 'name'){
     setName(e.target.value);
   }
   else if(e.target.name == 'email'){
     setEmail(e.target.value);
   }
   else if(e.target.name == 'phone'){
     setPhone(e.target.value);
   }
   else if(e.target.name == 'desc'){
     setDesc(e.target.value);
   }
   
 }
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={Name}
            onChange={handleChange}
            aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>Email address</label>
            <input type="email" className="form-control" value={Email} onChange={handleChange} name="email" id="email" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Password
          </label>
          <input
            type="phone"
            value={Phone}
            className="form-control"
            name="phone"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="floatingTextarea2">Elaborate your concern</label>
          <textarea className="form-control" name="desc" value={Desc} onChange={handleChange} placeholder="Write your concern here" id="desc"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
