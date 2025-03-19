"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Reviews (){

    const testimonials = [
        {
          name: "Robin A.",
          text: "My 17-year-old son signed up with YSSR EDUCATION recently and was given 7 lessons of behind-the-wheel instructions from a very knowledgeable instructor. My son had no experience in driving before and after completing the lessons, there was a huge improvement in his driving. I am very grateful for their help and would highly recommend their school to anyone.",
        },
        {
          name: "Sarah M.",
          text: "YSSR EDUCATION provided excellent driving lessons for my daughter. The instructor was patient, professional, and thorough. I highly recommend them!",
        },
        {
          name: "James D.",
          text: "The best driving school! The lessons were well-structured, and my confidence behind the wheel improved significantly. 5 stars!",
        },
      ];

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };


return <div>


<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-center"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2022/01/testimonials-2400-scaled.jpg')" }}
>
  {/* Dark Overlay as a full-width div */}
  <div className="w-full h-full bg-black/70 flex justify-center items-center px-4">
    <h1 className="font-semibold md:font-bold mt-28 text-2xl md:text-4xl lg:text-6xl text-white">
      TESTIMONIALS & REVIEWS
    </h1>
  </div>
</div>

<div className="flex justify-center px-4">
  <div className="mt-10 text-center">
    <h1 className="font-bold text-3xl sm:text-4xl text-[#9c261f] mb-3">
    Read What YSSR
    </h1>
    <h1 className="font-bold text-3xl sm:text-4xl text-[#9c261f] mb-3">
    Driving Academy Customers
    </h1>
    <h1 className="font-bold text-3xl sm:text-4xl text-[#002243]">
    Are Saying About Us
    </h1>
  </div>
</div>

<div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 p-5 lg:ml-28 overflow-hidden">

  {/* Left Section */}
  <div className="mt-8 md:mt-16 max-w-full sm:max-w-[400px] md:max-w-[500px] text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e518f]">
      Check Out Our Social Media Pages and Read Our Reviews!
    </h1>
    <p className="mt-4 text-base sm:text-lg">Leave a review on our Google Pages</p>
    <a
  href="https://www.google.com/maps/place/1043+Sterling+Rd+%23101,+Herndon,+VA+20170,+USA/@38.9707041,-77.4028711,15z/data=!4m6!3m5!1s0x89b6380a2553ebbb:0x54f774babc9ed1e9!8m2!3d38.9686862!4d-77.3963002!16s%2Fg%2F11mbnhlbbg?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-center md:justify-start items-center mt-4 gap-3 cursor-pointer"
>
  <i className="fa-brands fa-google text-xl sm:text-2xl"></i>
  <p className="text-base sm:text-lg text-[#9c261f]">Herndon Location</p>
</a>

  </div>

  {/* Right Section */}
  <div className="w-full sm:max-w-[400px] md:max-w-[500px] mx-auto mt-8 md:mt-16 overflow-hidden">
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="text-center md:text-left px-4 sm:px-6">
          <div className="flex justify-center md:justify-start items-center gap-3">
            <i className="fas fa-quote-left text-3xl sm:text-4xl md:text-6xl text-[#9c261f]"></i>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e518f]">
              {testimonial.name}
            </h1>
          </div>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-normal max-w-full">
            {testimonial.text}
          </p>
        </div>
      ))}
    </Slider>
  </div>

</div>


<div className="mt-3" style={{ position: "relative", width: "100%", height: "270px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0458273610874!2d-77.3963002!3d38.9686862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6380a2553ebbb%3A0x54f774babc9ed1e9!2s1043%20Sterling%20Rd%20%23101%2C%20Herndon%2C%20VA%2020170%2C%20USA!5e0!3m2!1sen!2sus!4v1611139899651!5m2!1sen!2sus"
              width="100%"
              height="270px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
            <a
              href="https://www.google.com/maps/place/1043+Sterling+Rd+%23101,+Herndon,+VA+20170,+USA/@38.9707041,-77.4028711,15z/data=!4m6!3m5!1s0x89b6380a2553ebbb:0x54f774babc9ed1e9!8m2!3d38.9686862!4d-77.3963002!16s%2Fg%2F11mbnhlbbg?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                textDecoration: "none",
              }}
              aria-label="Open location in Google Maps"
            ></a>
          </div>






</div>



}

