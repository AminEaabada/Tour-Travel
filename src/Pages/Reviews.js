import { React, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from './Header';
import axios from 'axios';

function Reviews() {

    const [Reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('  http://localhost:5000/Reviews')
                setReviews(data.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    const settings = {
        showArrows: false,
        showStatus: false,
        showIndicators: true,
        infiniteLoop: true,
        autoPlay: true,
        interval: 2000,
        transitionTime: 500,
        stopOnHover: true,
        swipeable: false,
        dynamicHeight: false,
        emulateTouch: false,
        selectedItem: 0,
        axis: 'horizontal',
        useKeyboardArrows: true,
        centerMode: false,
        centerSlidePercentage: 80,
        swipeScrollTolerance: 5,
    };

    const styles = {
        height: '13rem',
        width: '13rem',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '1rem'
    };

    const slide = {
        marginBottom: '30px',
    };

    return (
        <>
            <Header />
            <section className="review" id="review">
                <h1 className="heading">
                    <span>r</span>
                    <span>e</span>
                    <span>v</span>
                    <span>i</span>
                    <span>e</span>
                    <span>w</span>
                </h1>

                <div className="review-slider">
                    <Carousel {...settings}>

                        {Reviews.map((review , index) => (
                            <div className="swiper-slide" style={slide}  key={index} >
                                <div className="box">
                                    <div className='imgBx'>
                                        <img src={review.image} alt={review.full_name} style={styles} />
                                    </div>
                                    <div className='content'>
                                        <h3>{review.full_name}</h3>
                                        <p>{review.review}</p>
                                        <div className="stars">
                                            <i className={review.starts}></i>
                                            <i className={review.starts}></i>
                                            <i className={review.starts}></i>
                                            <i className={review.starts}></i>
                                            <i className={review.starts}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </>
    );
}

export default Reviews;