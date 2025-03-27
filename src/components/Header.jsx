import React from 'react'
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';
const Header = () => {
 const dispatch =   useDispatch()
  return (
    <div className='flex items-center justify-between bg-indigo-600 text-white px-4 py-3'>
       <div className='text-3xl'>REACT UYGULAMA</div> 
       {/* EKRAN SAĞI */}
       <div className='flex items-center gap-5'>
        <div className='text-black'>
        <select name="" id="" className='h-10 rounded-lg'>
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
        </select>
        </div>
        {/* SEARCH */}
        
<input type="text" placeholder='Arama Yapınız...' className='h-10 rounded-lg px-4 text-black'/>
        
        <div onClick={()=> dispatch(modalFunc())} className='bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-400'>
        <MdPostAdd size={24}/>    
        </div>
       </div>
    </div>
  )
}

export default Header
