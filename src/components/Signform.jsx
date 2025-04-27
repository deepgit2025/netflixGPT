import React, { useRef, useState } from 'react'
import { checkEmailPassword } from '../utils/formValidation';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../utils/slices/userSlice';

const Signform = () => {
  const [isSigninPage, setSignin] = useState(true);
  const [formError, setFormError] = useState('');
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = (e)=>{
      e.preventDefault();
      //validation for email and passowrd
      const formerror = checkEmailPassword(email.current.value, password.current.value);
      setFormError((prev)=>{
        return (formerror) ? formerror : '';
      });
      if(formerror) return;
      //singup now
      if(isSigninPage){
        signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFormError(errorMessage)
          });
      }
      else{
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError(errorMessage)
          // ..
        });
      }
    
  }
  return (
    <div className='z-10 bg-black/50 relative h-fit max-w-[400px] w-full border-black border-[1px] p-[32px] rounded-xl'>
        <form onSubmit={(e)=>handleSubmit(e)} className='h-full w-full flex flex-col gap-[12px] items-center justify-center'>
            {(!isSigninPage) && <div className="name text-white w-full">
              <label htmlFor="name" className='text-white text-[16px] bg-transaprent mb-[8px]'>Name</label>
              <input type='text' id='name' ref={name} placeholder='type your name' className='p-[10px] w-full text-white text-[16px] outline-0 border-b-[1px] border-white'></input>
            </div>
            }
            <div className="email text-white w-full">
              <label htmlFor="email" className='text-white text-[16px] bg-transaprent mb-[8px]'>Email</label>
              <input type='email' id='email' ref={email} placeholder='type your email' className='p-[10px] w-full text-white text-[16px] outline-0 border-b-[1px] border-white'></input>
            </div>
            <div className="password text-white w-full">
              <label htmlFor="password" className='text-white text-[16px] bg-transaprent mb-[8px]'>Password</label>
              <input type='password' ref={password} id='password' placeholder='type your name' className='p-[10px] w-full text-white text-[16px] outline-0 border-b-[1px] border-white'></input>
            </div>
            <div className='text-red-600 text-[16px] mt-[10px]'>{formError}</div>
            <button className='cursor-pointer px-[16px] py-[12px] text-white bg-black rounded-[10px]'>{isSigninPage ? 'Sign in' : 'Sign Up'}</button>
            <div className='cursor-pointer text-white text-[16px] mt-[10px]' onClick={e=>setSignin(!isSigninPage)}>{isSigninPage ? 'Not Registered yet? Signup now.' : 'Already Resgistered? Signin now.'}</div>
        </form>
    </div>
  )
}

export default Signform
