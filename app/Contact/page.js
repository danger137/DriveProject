"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBuilding, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { toast } from "react-toastify";




export default function Contact (){

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzdxjcOhXROPJ1SM6uVOYRN-qvBDP9r2ErnrAdDcXpnK_EmJ_hBwchS7FmBSxxanZ95/exec';
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = new FormData(formRef.current);
    let newErrors = {};

    if (!formData.get("name").trim()) newErrors.name = "Name is required";
    if (!formData.get("city").trim()) newErrors.city = "City is required";
    if (!formData.get("email").trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.get("number").trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.get("number"))) {
      newErrors.number = "Enter a valid phone number";
    }
    if (!formData.get("message").trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const form = formRef.current;

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        toast.success("Thank you! Your form is submitted successfully.");
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  };






return <div>

<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-center"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2021/11/fmf_5957-1-scaled.jpg')" }}
>
  {/* Dark Overlay as a full-width div */}
  <div className="w-full h-full bg-black/20 flex justify-center items-center px-4">
    <h1 className="font-semibold md:font-bold mt-28 text-2xl md:text-4xl lg:text-6xl text-white">
    CONTACT US
    </h1>
  </div>
</div>

<div className="flex justify-center px-4">
  <div className="mt-10 text-center">
    <h1 className="font-bold text-4xl sm:text-4xl text-[#9c261f] mb-3">
    Complete Our Contact Form
    </h1>
 
  </div>
</div>

<div className="bg-white">
  <div className="flex flex-col md:flex-col lg:flex-row bg-white p-6 md:p-16 shadow-lg">
    {/* Form Section */}
    <div className="bg-white p-6 md:p-10 w-full md:w-full lg:w-2/3 shadow-2xl shadow-gray-500/50">
    <form ref={formRef} name="Yssr" onSubmit={handleSubmit} className="space-y-5">
      <input name="name" type="text" placeholder="Name*" className="w-full p-3 border mt-5 border-gray-300" />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input name="city" type="text" placeholder="City*" className="w-full p-3 border border-gray-300" />
      {errors.city && <p className="text-red-500">{errors.city}</p>}

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2">
          <input name="email" type="email" placeholder="Email*" className="w-full p-3 border border-gray-300" />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="w-full md:w-1/2">
          <input name="number"  placeholder="Phone*" className="w-full p-3 border border-gray-300" />
          {errors.number && <p className="text-red-500">{errors.number}</p>}
        </div>
      </div>

      <textarea name="message" placeholder="Message*" className="w-full p-3 border border-gray-300 h-32 md:h-64" />
      {errors.message && <p className="text-red-500">{errors.message}</p>}

      <div className="group">
        <button type="submit" className="w-full text-white p-3 mt-10 transition duration-300 bg-[#9c261f] hover:bg-blue-900">
          Submit
        </button>
      </div>
    </form>

    </div>

    {/* Contact Info Section */}
    <div className="bg-[#002243] text-white p-6 w-full md:w-full lg:w-2/5 shadow-md mt-6 md:mt-0">
      <h2 className="text-lg font-bold mt-8 mb-4 sm:mt-6 sm:mb-3">
        YSSR Driving Academy, Inc. - Herndon’s Office (Main Office)
      </h2>
      <div className="space-y-5">
  {[
    { icon: faEnvelope, text: 'info@aadrivingacademy.net' },
    { icon: faPhone, text: '(703) 478-6800' },
    { icon: faBuilding, text: '(703) 467-9747' },
    { icon: faMapMarkerAlt, text: '1043 Sterling Rd #101, Herndon, VA 20170' },
  ].map((item, index) => (
    <div key={index} className="flex flex-col items-center gap-2 text-center mt-5 sm:flex-row sm:gap-3 sm:text-left">
      <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#9c261f]">
        <FontAwesomeIcon icon={item.icon} className="text-white w-5 h-5" />
      </div>
      <p className="font-medium text-lg break-words sm:text-base max-w-[180px] sm:max-w-[220px]">
        {item.text}
      </p>
    </div>
  ))}
  <div className="flex flex-col items-center sm:items-start gap-2 text-center mt-5 sm:flex-row sm:gap-3 sm:text-left">
    <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#9c261f]">
      <FontAwesomeIcon icon={faClock} className="text-white w-5 h-5" />
    </div>
    <div>
      <p className="font-medium text-lg sm:text-base">Business Hours:</p>
      <div>
        {[
          'Mon: 9:30 am - 7:00 pm',
          'Tues: 3:00 pm - 7:30 pm',
          'Wed: 9:30 am - 7:30 pm',
          'Thurs: 3:00 pm - 7:30 pm',
          'Fri: 9:30 am - 2:00 pm',
          'Sat: 9:30 am - 2:00 pm',
          'Sun: Closed',
        ].map((hour, idx) => (
          <p key={idx} className="font-medium text-lg sm:text-base">{hour}</p>
        ))}
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-5 gap-2 flex-wrap sm:justify-start">
    {[
      { icon: 'facebook-f', color: '#4267b2', url: 'https://facebook.com' },
      { icon: 'twitter', color: '#55acee', url: 'https://twitter.com' },
      { icon: 'instagram', color: '#bc2a8d', url: 'https://instagram.com' },
      { icon: 'youtube', color: '#ff0000', url: 'https://youtube.com' },
    ].map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center  justify-center rounded-full"
        style={{ backgroundColor: social.color }}
        aria-label={`Visit our ${social.icon} page`}
      >
        <i className={`fab fa-${social.icon} text-lg`} aria-hidden="true"></i>
      </a>
    ))}
  </div>
</div>


    </div>
  </div>
</div>

<div  style={{ position: "relative", width: "100%", height: "270px" }}>
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


