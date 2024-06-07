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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <Link to="/categorias/14">
                <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/natashadev/Riqueza%20das%20Ra%C3%ADzes/Green%20Minimalist%20Nature%20Quotes%20Desktop%20Wallpaper%20(1).png?updatedAt=1717678702730" 
                        alt="Carrossel - Slide 01 Conectando Tradição e  Modernidade em Cada Compra
                        " 
                    />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/artesaos">
                    <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/natashadev/Riqueza%20das%20Ra%C3%ADzes/Green%20Minimalist%20Nature%20Quotes%20Desktop%20Wallpaper%20(3).png?updatedAt=1717678702590" 
                        alt="Carrossel - Slide 02 Todos os produtos apresentados nesse trabalho são de artesãos reais e você pode conferir o trabalho deles na nossa página artesãos!" 
                    />
                    </Link>
                </SwiperSlide>

            </Swiper>
            </div>
            <div className="fundoMobile">

            </div>
             
        </>
    )


 }

 export default Carrossel;