import React, {useEffect} from 'react'
import { logo_img } from '../utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { removeData ,addData} from '../utils/slices/userSlice';

const Header = () => {
  const userValue = useSelector((state)=>
    state.user.userData
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = ()=>{
    signOut(auth).then(()=>{
      navigate('/');
    }).catch(()=>{
      navigate('/error')
    })
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user)=>{
      if(!user){
        dispatch(removeData());
        navigate('/');
      }else{
         const userInfo = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(addData(userInfo));
        navigate('/browse');
      }
    })
    return (()=>unSubscribe()); //remove previous
    //  listenters
  },[])
  return (
    <div className='flex z-10 absolute start-0 top-0 flex justify-between py-[32px] px-[48px] w-full items-center'>
        <div className="image w-[80px]">
          <img src={logo_img} alt="logo-image" className='h-full w-full object-fill'/>
        </div>
        {(userValue) && <div className="logout cursor-pointer text-white text-[16px] bg-black px-[20px] py-[8px] rounded hover:opacity-75" onClick={handleLogout}>Logout</div>}
    </div>
  )
}

export default Header
