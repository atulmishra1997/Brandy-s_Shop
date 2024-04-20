import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './main-carousel/MainCarouselData';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonials/Testimonial';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';


function Home(){
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart)

    console.log(cartItem);

    const addCart = () => {
        dispatch(addToCart("Shirt"))
    }

    const deleteCart = () => {
        dispatch(deleteFromCart("Shirt"));
    }

    const items = MainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=''/>)
    return (
    
    
    <Layout>
        {/* <div className='flex gap-5 justify-center'>
            <button className='bg-teal-500 p-5' onClick={() => addCart()}>add</button>
            <button className='bg-teal-500 p-5' onClick={() => deleteCart()}>del</button>
        </div> */}
        <AliceCarousel
        autoPlay
        // autoPlayControls
        // autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        // disableDotsControls
        disableButtonsControls
        items={items}
    />
    <Filter/>
    <ProductCard/>
    <div className='flex justify-center mt-10 mb-4'>
        <Link to={'/allproducts'}>
            <button className=' bg-gray-500 px-5 py-2 rounded-xl'>See More</button>
        </Link>
    </div>
    <Track/>
    <Testimonial/>
    </Layout>
    )
}

export default Home