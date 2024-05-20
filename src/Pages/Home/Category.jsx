// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='my-12'>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='lg:h-[440px] h-60' src="https://i.ibb.co/fX6NJFw/salad-580x845.jpg" alt="" />
                    <h1 className='text-center text-2xl font-bold text-white -mt-12'>SALADS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[440px] h-60' src="https://i.ibb.co/bK81Wg2/mahyar-motebassem-bn-Ih4i-Rat-DA-unsplash.jpg" alt="" />
                    <h1 className='text-center text-2xl font-bold text-white -mt-12'>PIZZA</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[440px] h-60' src="https://i.ibb.co/V3T2CP3/monika-grabkowska-y6-A9bh-ILk-M-unsplash.jpg" alt="" />
                    <h1 className='text-center text-2xl font-bold text-white -mt-12'>SOUP</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[440px] h-60' src="https://i.ibb.co/LvwrffG/aneta-voborilova-1p-Jgja8u0-S8-unsplash.jpg" alt="" />
                    <h1 className='text-center text-2xl font-bold text-white -mt-12'>CAKE</h1>
                </SwiperSlide>
                <SwiperSlide><img className='lg:h-[440px] h-60' src="https://i.ibb.co/kGNNgyX/mae-mu-I7-A-p-HLc-QK8-unsplash.jpg" alt="" />
                    <h1 className='text-center text-2xl font-bold text-white -mt-12'>BURGER</h1></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;