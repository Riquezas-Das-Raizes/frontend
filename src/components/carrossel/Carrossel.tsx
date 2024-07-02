import "./Carrossel.css"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

 function Carrossel (){

    return (
        <>
        <div className="fundoPc"> 
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <Link to="/categorias/14">
                <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/z5xvlplbb/New%20Folder/Conectando.png" 
                        alt="Carrossel - Slide 01 Conectando Tradição e  Modernidade em Cada Compra" 
                    />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/artesaos">
                    <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/natashadev/Riqueza%20das%20Ra%C3%ADzes/Confira%20quem%20s%C3%A3o%20os%20artes%C3%A3os%20respons%C3%A1veis%20por%20cada%20pe%C3%A7a/Confira%20quem%20s%C3%A3o%20os%20artes%C3%A3os%20respons%C3%A1veis%20por%20cada%20pe%C3%A7a%20(2).svg?updatedAt=1719866061966" 
                        alt="Carrossel - Slide 02 Todos os produtos apresentados nesse trabalho são de artesãos reais e você pode conferir o trabalho deles na nossa página artesãos!" 
                    />
                    </Link>
                </SwiperSlide>

                
                <SwiperSlide>
                    <Link to="/categorias/14">
                <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/natashadev/Riqueza%20das%20Ra%C3%ADzes/Confira%20quem%20s%C3%A3o%20os%20artes%C3%A3os%20respons%C3%A1veis%20por%20cada%20pe%C3%A7a/Confira%20quem%20s%C3%A3o%20os%20artes%C3%A3os%20respons%C3%A1veis%20por%20cada%20pe%C3%A7a%20(3).svg?updatedAt=1719867216450" 
                        alt="Carrossel - Slide 03 Aqui você encontra artesanato indígena autêntico e colabora com o desenvolvimento sustentável de comunidades tradicionais!" 
                    />
                    </Link>
                </SwiperSlide> 

            </Swiper>
            </div>
            <div className="fundoMobile"></div>  
        </>
    )


 }

 export default Carrossel;