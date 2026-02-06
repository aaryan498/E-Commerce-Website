import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

    const {productId}=useParams();
    const {products, currency, addToCart} = useContext(ShopContext);
    const [productData, setproductData] = useState(false)
    const [image, setimage] = useState('')

    const [size, setsize] = useState('')

    const fetchProductData = async()=>{
      products.map((item)=>{
        if(item._id === productId){
          setproductData(item);
          // console.log(item);
          
          setimage(item.image[0])
          return null;
        }
      })
    }

    useEffect(()=>{
      fetchProductData();
    },[productId, products])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setimage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%] '>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Product Info  */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.stardull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash On Delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border-gray-500 px-5 py-3 text-sm'>Description</b>
          <p className='border-gray-500 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis. Quo porro quas, provident repellendus explicabo veritatis, eum fuga velit placeat dolore fugiat! At saepe molestiae, numquam soluta inventore voluptates ducimus obcaecati nulla odit? Sed quos consequatur amet! Laboriosam cum error odio dolorem esse nisi optio, nobis inventore eaque libero.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum recusandae reprehenderit sit enim error hic neque. Exercitationem doloribus veritatis eligendi blanditiis, quaerat sapiente quod mollitia excepturi, omnis, odit unde. Culpa necessitatibus exercitationem nihil excepturi ratione, sed a earum aliquam!</p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product