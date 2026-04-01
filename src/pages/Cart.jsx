import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchMobileProducts } from './../redux/features/mobileProducts/mobileProductSlice';

const Cart = () => {

    const dispatch = useDispatch();

    const { products, loading, error } = useSelector((state) => state.mobileProducts)

    console.log(products)

    useEffect(() => {
        dispatch(fetchMobileProducts())
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div>
            <h1>Mobile Products</h1>
            {
                products.map((items) => {
                    return (
                        <div key={items.id}>
                            <h3>{items.title}</h3>
                            <p>{items.price}</p>
                            <img src={items.thumbnail} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
