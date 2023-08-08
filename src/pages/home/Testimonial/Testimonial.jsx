import TestImg from '../../../assets/testimonial.png'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/reviews/reviews (1).jpg'
import img2 from '../../../assets/reviews/reviews (2).jpg'
import img3 from '../../../assets/reviews/reviews (4).jpg'
import img4 from '../../../assets/reviews/reviews (4).jpg'
import img5 from '../../../assets/reviews/reviews (5).jpg'
import img6 from '../../../assets/reviews/reviews (5).jpg'

import star from '../../../assets/star/star.svg'

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";



const Testimonial = () => {
    const review = [
      {
        img: `${img1}`,
        name: "Khalisur Bappy",
        heading: "There is hope after addiction!",
        text: "I just want to thank the staff at Ocean Breeze Recovery for working together with me, in my journey through recovery. I was struggling with addiction, my life spiraled out of control and it was time to face it and deal with my problem. Ocean Breeze Recovery taught me important life skills that have helped me in my sobriety, even after my stay there. The center is beautiful and well kept, the serenity also helped a lot.",
      },
      {
        img: `${img2}`,
        name: "Khalisur Bappy",
        heading: "There is hope after addiction!",
        text: "I just want to thank the staff at Ocean Breeze Recovery for working together with me, in my journey through recovery. I was struggling with addiction, my life spiraled out of control and it was time to face it and deal with my problem. Ocean Breeze Recovery taught me important life skills that have helped me in my sobriety, even after my stay there. The center is beautiful and well kept, the serenity also helped a lot.",
      },
      {
        img: `${img3}`,
        name: "Khalisur Bappy",
        heading: "There is hope after addiction!",
        text: "I just want to thank the staff at Ocean Breeze Recovery for working together with me, in my journey through recovery. I was struggling with addiction, my life spiraled out of control and it was time to face it and deal with my problem. Ocean Breeze Recovery taught me important life skills that have helped me in my sobriety, even after my stay there. The center is beautiful and well kept, the serenity also helped a lot.",
      },
      {
        img: `${img4}`,
        name: "Numan ali",
        heading: "There is hope after addiction!",
        text: "I just want to thank the staff at Ocean Breeze Recovery for working together with me, in my journey through recovery. I was struggling with addiction, my life spiraled out of control and it was time to face it and deal with my problem. Ocean Breeze Recovery taught me important life skills that have helped me in my sobriety, even after my stay there. The center is beautiful and well kept, the serenity also helped a lot.",
      },
      {
        img: `${img5}`,
        name: "Sadmin nitun",
        heading: "There is hope after addiction!",
        text: "loving and caring owners and staff Ocean Breeze Recovery help me save my life and change my life"},
      {
        img: `${img6}`,
        name: "Rakiba islam",
        heading: "Gave me hope",
        text: "First rehab center and am very impressed. Staff took very good care in letting us do activities like going to the beach but also always having us in their best interest at all times. They are saving lives here."},
      {
        img: `${img6}`,
        name: "Jon Dwe",
        heading: "Tomorrow is not promise!",
        text: "This is coming from someone Who WAS struggling with addiction for a very long time! Ocean Breeze Recovery was beyond phenomenal! the guidance and the positive outlook throughout my process was exactly what I needed! I'm no longer lingering in the dark  mentality! Now each and every new day gives me the courage to ! Now I'm living life as if tomorrow is not promised! Each new day gives me more and more control of ME!"
      },
    ];
    return (
      <div className="mb-36 hidden sm:block md:block lg:block">
        <div className="mx-auto flex w-[90%] items-center justify-between">
          <div>
            <p className="font-a text-xl font-bold text-bg ">Testimonials</p>
            <h1 className="mt-2 font-b text-4xl font-bold text-text">
              What Our Patients Says
            </h1>
          </div>
          <dir>
            <img src={TestImg} alt="" />
          </dir>
        </div>
        <div className="mx-auto w-[80%]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#00ADB5",
              "--swiper-pagination-color": "#00ADB5",
            }}
            // breakPoints={{
            //   960: {
            //     slidesPerView: 4,
            //     spaceBetween: 8,
            //   },
            //   720: {
            //     slidesPerView: 3,
            //     spaceBetween: 6,
            //   },
            //   540: {
            //     slidesPerView: 2,
            //     spaceBetween: 4,
            //   },
            //   320: {
            //     slidesPerView: 1,
            //     spaceBetween: 2,
            //   },
            // }}
            spaceBetween={60}
            initialSlide={3}
            slidesPerView={3}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {review.map((r,i) => (
              <SwiperSlide key={i}>
                <div className=" mt-8 h-[600px] w-[100%] bg-text p-12">
                  <div className="flex justify-center">
                    <div className="h-[80px] w-[80px] overflow-hidden rounded-full ring ring-bg">
                      <img className="" src={r.img} alt="" />
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xl">{r.name}</p>
                  <div className="mb-4 mt-4">
                    <img src={star} alt="" />
                  </div>
                  <p className=" mb-2 mt-2 text-2xl">{r.heading}</p>
                  <p className="text-justify">{r.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
};

export default Testimonial;