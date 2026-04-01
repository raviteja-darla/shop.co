import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThumbNailCard from '../../components/thumbnail/ThumbNailCard';
import { fetchMobileProducts } from '../../redux/features/mobileProducts/mobileProductSlice';

const Mobiles = () => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector((state) => state.mobileProducts)

    useEffect(() => {
        dispatch(fetchMobileProducts())
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div className='mobiles-page'>
            <div className="container-wrapper">
                <h2 className="second-heading text-center my-10">All Brand Mobiles</h2>
                <div className="thumbnailCards-container flex justify-center items-center gap-3 flex-wrap flex-col md:flex-row">
                    {
                        products?.map((item) =>{
                            return (
                                <ThumbNailCard key={item.id} item={ item } className="w-[290px]"/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Mobiles
