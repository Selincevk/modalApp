import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal';
import { createDataFunc } from '../redux/dataSlice';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { modalFunc } from '../redux/modalSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateDataFunc } from '../redux/dataSlice';

const Product = () => {
    const modal = useSelector(state => state.modal.modal);
    const {data, keyword} = useSelector(state => state.data);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState({name: "", price: "", url: ""});


useEffect(() => {
  if (modal) {
    setProductInfo({ name: "", price: "", url: ""});
  }
}, [modal]);



    const onChangeFunc = (e, type) => {
        if (type == "url") {
    setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
        } else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }
    console.log(productInfo,"productInfo");

    let loc=location?.search.split('=')[1];

    useEffect(() => {
if (loc) {
  setProductInfo(data.find(dt=>dt.id==parseInt(loc)))
}
    }, [loc]);

    const buttonFunc = () => {
dispatch(createDataFunc({...productInfo, id:data.length + 1}));
dispatch(modalFunc());
    }

    const buttonUpdateFunc = () => {
      dispatch(updateDataFunc({...productInfo, id: loc}));
      dispatch(modalFunc());
      navigate("/")
    }

    const contentModal = (
<>
<Input value={productInfo.name} type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
<Input value={productInfo.price} type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
<Input type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
     <Button btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc}/>
</>
    )

    const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword));


  return (
    <div>
<div className='flex items-center flex-wrap'>
  {
    filteredItems?.map((dt, i) => (
      <ProductCard key={i} dt={dt} />
    ))
  }
</div>


      
      {modal && <Modal content={contentModal} title={loc ? "Ürün Güncelle" : "Ürün Oluştur"} />}
    </div>
  )
}

export default Product