import React, { useState } from 'react';


import { initializeApp } from "@firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import  './registration.css';
import mgr from '../images/Picture1.jpg'
import jayalalitha from '../images/Picture2.png'

import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBYG5GT_XQ1tmDXRAQdz0jhNB3WCVOspcY",
 authDomain: "registration-7a969.firebaseapp.com",
 databaseURL: "https://registration-7a969-default-rtdb.firebaseio.com",
 projectId: "registration-7a969",
 storageBucket: "registration-7a969.appspot.com",
 messagingSenderId: "374839140738",
 appId: "1:374839140738:web:3d4fc8969b865d5e1e6f9b",
 measurementId: "G-XCGPC00VM7"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Registration = () => {
  const [email, setEmail] = useState('');
  const [aadhar,setAadhar] = useState('');
  const [address,SetAddress] = useState('');
  const [phone,setPhone] = useState('');
  const [age,setAge] = useState('');
  const [PartyDis,setPartyDis] = useState('');
  const [qualification,setQualification] = useState('');
  const [caste,setCaste] = useState('');
  const [yoj,setYoj] = useState('');
  const [partypost2017,setPartypost2017] = useState('');
  const [othergrp,setOthergrp] = useState('');
  const [currentPost,setCurrentPost] = useState('');
  const [Name,setName] = useState('');
  const [Union,setUnion] = useState('');
  const [error,setError] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Basic form validation
  //   if (!email || !password || !confirmPassword) {
  //     setError('Please fill in all fields');
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   // If validation passes, you can proceed with registration logic
  //   // For simplicity, we'll just log the data to console
  //   console.log('Email:', email);
  //   console.log('Password:', password);

  //   // Reset form fields and error message
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');
  //   setError('');
  // };

  const handleSubmit = (event) => {
   event.preventDefault();
   // Handle form submission, e.g., submit data to server
   console.log("Email:", email);
     try {
       set(ref(db, `/users/${phone}`), {
         email: email,
         address:address,
         phone : phone,
         PartyDis:PartyDis,
         qualification:qualification,
         caste:caste,
         yoj:yoj,
         partypost2017:partypost2017,
         othergrp:othergrp,
         currentPost:currentPost,
         age:age,
         Name : Name,
         Union:Union

       });
       alert(`Added ${email}'s message to database!`);
       setName('');
       setAadhar('');
       setAge('')
       setCaste('');
       setCurrentPost('');
       setEmail('');
       setOthergrp('');
       setPartyDis('');
       setPartypost2017('');
       setPhone('');
       setQualification('')
       setYoj('');
       setUnion('');
     } catch (error) {
       console.log(error);
     }
 };
  return (
    <div className='screen'>
      <div className="form-header">
        <div style={{display:'flex',alignItems:'center',marginLeft:'200px'}}>
        <div  style={{alignItems:'center'}} >
        <img src={mgr} />
        <p>“உழைக்கும் மக்களே ஒன்று சேருங்கள்”    </p>
        <p>- புரட்சித்தலைவர் எம்.ஜி.ஆர்</p>
        </div>
        <div style={{alignItems:'center'}}>
        <img src={jayalalitha} />
         <p style={{alignItems:'center'}}>  “மக்களால் நான் மக்களுக்காகவே நான்” </p>
        <p>-புரட்சித்தலைவி ஜெ ஜெயலலிதா</p>
        </div>
        </div>

      </div>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit} className='form-container' >
       <div className='form-row'>
        <label className='form-label'>பெயர் :</label>
       <input
          type="text"
          placeholder=""
          value={Name}
          onChange={(e) => setName(e.target.value)}
          className='form-input'
          required
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>முகவரி : </label>
        <input
          type="text"
          placeholder=''
          value={address}
          onChange={(e) => SetAddress(e.target.value)}
          className='form-input'
          required
        /></div>
        <div className='form-row'>
        <label className='form-label'>தொலைபேசி எண்: </label>
        <input
          type='number'
          placeholder=''
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='form-input'
          required
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>மின்னஞ்சல் முகவரி : </label>
        <input
          type="email"
          placeholder=''
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-input'
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>ஆதார் எண் :</label>
       <input
          type="text"
          placeholder=""
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          className='form-input'
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>கழக அமைப்பு மாவட்டம் : </label>
        <input
          type="text"
          placeholder=""
          value={PartyDis}
          onChange={(e) => setPartyDis(e.target.value)}
          className='form-input'
          required
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>தாங்கள் சார்ந்திருக்கும் ஒன்றியம் : </label>
        <input
          type="text"
          placeholder=""
          value={Union}
          onChange={(e) => setUnion(e.target.value)}
          className='form-input'
          required
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>கல்வித்தகுதி : </label>
        <input
          type="text"
          placeholder=""
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className='form-input'
          required
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>வயது : </label>
        <input
          type="text"
          placeholder=""
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className='form-input'
          required
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>வகுப்பு : </label>
        <input
          type="text"
          placeholder=""
          value={caste}
          onChange={(e) => setCaste(e.target.value)}
          className='form-input'
          required
        />
        </div>
         <div className='form-row'>
        <label className='form-label'>கழகத்தில் இணைந்த ஆண்டு : </label>
        <input
          type="text"
          placeholder=""
          value={yoj}
          onChange={(e) => setYoj(e.target.value)}
          className='form-input'
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>01-01-2017 அன்று கழகத்தில் வகித்த பொறுப்பு : </label>
        <input
          type="text"
          placeholder=""
          value={partypost2017}
          onChange={(e) => setPartypost2017(e.target.value)}
          className='form-input'
        />
        </div>
        <div className='form-row'>
        <label className='form-label'>தற்போது இதர அமைப்பில் செயல்படுபவராக இருந்தால் அந்த அமைப்பின் பெயர் : </label>
        <input
          type="text"
          placeholder=""
          value={othergrp}
          onChange={(e) => setOthergrp(e.target.value)}
          className='form-input'
        /></div>
        <div className='form-row'>
        <label className='form-label'>இதர அமைப்பில் தாங்கள் தற்போது வகிக்கும் பொறுப்பு : </label>
        <input
          type="text"
          placeholder=""
          value={currentPost}
          onChange={(e) => setCurrentPost(e.target.value)}
          className='form-input'
        />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
