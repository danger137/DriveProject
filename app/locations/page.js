'use client';

import Link from 'next/link';
import { FaHome, FaMapMarkerAlt } from 'react-icons/fa';

export default function  Locations (){





return <div>



<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2021/11/drivers-ed-class-2400-scaled.jpg')" }}
>
  <div className="relative text-center mt-24 sm:mt-28 md:mt-20 lg:mt-24 px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-20 text-white">
    YSSR EDUATION DRIVING ACADEMY
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-5 text-white">
    LOCATIONS
    </h1>
  </div>
</div>

<div>
<iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1ONtZaGlt2JKVGVRKtpjTRFsCiJs&hl=en"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen
    />
</div>

<div className="flex justify-center px-4">
  <div className="mt-10 text-center">
    <h1 className="font-bold text-3xl sm:text-4xl text-[#9c261f] mb-3">
      Enroll at an
    </h1>
    <h1 className="font-bold text-3xl sm:text-4xl text-[#002243]">
      YSSR Education Driving Academy Near You
    </h1>
  </div>
</div>

<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white bg-[#0e518f] sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
      <i className="fa-solid fa-house"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
        Herndon (Main Office; All courses <br /> offered)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
        1043 Sterling Road #101
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
        Herndon, VA 20170
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
        Phone #: (703) 478-6800
      </p>
     <div className='mt-5' >
     <Link href={"/Locationss/Herndon"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
        Alexandria (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
        Springhill Suites Alexandria Old Town/Southwest
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
        2950 Eisenhower Avenue
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
        Alexandria VA 22314
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Alexandria"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>




<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
      Annandale (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Audrey Moore RECenter
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      8100 Braddock Road
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Annandale, VA 22003
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Annandale"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
        
Arlington (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hilton Garden Inn
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      1333 North Courthouse Road
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Arlington, VA 22201
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Arlington"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>


<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
   
Ashburn (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Aloft Dulles North
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      22390 Flagstaff Plaza
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Ashburn, VA 20147
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Ashburn"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
        

      Centreville (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      SpringHill Suites Centreville Chantilly
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      5920 Trinity Parkway
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Centreville, VA 20120
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Centreville"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>

<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
   

      Chantilly (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Holiday Inn Chantilly-Dulles Expo
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      4335 Chantilly Shopping Center
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Chantilly, VA 20151
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Chantilly"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
        

     
Dulles (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Courtyard Dulles Town Center
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      45500 Majestic Drive
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Dulles, VA 20166
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Dulles"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>






<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Dumfries (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hampton Inn
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      16959 Old Stage Road
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Dumfries, VA 22025
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Dumfries"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Fair Oaks/Fairfax (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Fairfax Marriot at Fair Oaks Mall
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      11787 Lee Jackson Memorial Hwy
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Fairfax, VA 22033
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Fairfax"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>


<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

    
Falls Church (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hampton Inn and Suites Falls Church
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      6430 Arlington Boulevard
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Falls Church, VA 22042
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/FallsChurch"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Front Royal (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hampton Inn
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      9800 Winchester Road
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Front Royal, VA 22630
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/FrontRoyal"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>


{/* //ouevhweu?? */}
<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Gainesville (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hampton Inn Gainesville
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      7300 Atlas Walk Way
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Gainesville, VA 20155
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Gainesville"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Leesburg (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Best Western - Leesburg Hotel & Conference Center
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      726 East Market Street
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Leesburg, VA 20176
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Leesburg"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>


<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Manassas (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Courtyard by Marriott - Manassas
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      10701 Battleview Parkway
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Manassas, VA 20109
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Manassas"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
      McLean (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Staybridge Suites Hotel
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      6845 Old Dominion Dr.
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Mclean, VA 22101
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/McLean"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>

<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
      Reston (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Sheraton Reston Hotel
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      11810 Sunrise Valley Dr
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Reston, VA 20191
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Reston"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
     
South Riding (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Dulles South Multipurpose Center
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      24950 Riding Center Dr.
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      South Riding, VA 20152
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/SouthRiding"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>

<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">
      
Springfield (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Comfort Inn
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      6560 Loisdale Court
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Springfield, VA 22150
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Springfield"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Stafford (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hampton Inn and Conf. Ctr.
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      2925 Jeff Davis Hwy
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Stafford, VA 22554
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Stafford"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>

<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Sterling (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hyatt Place Sterling Dulles-North
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      21481 Ridgetop Circle
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Dulles, VA 20166
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Sterling"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]"> 
Tysons Corner / Vienna (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hilton Garden Inn
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      8301 Boone Boulevard
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Vienna, VA 22182
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Corner"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>


<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Warrenton (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Hampton Inn by Hilton
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      501 Blackwell Road
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Warrenton, VA 20186
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Warrenton"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
      <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]"> 

      Winchester (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Courtyard by Marriott
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      300 Marriott Drive
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Winchester, VA 22603
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Winchester"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>
</div>

<div className="flex flex-wrap gap-48 mt-10 justify-center items-center lg:justify-center lg:items-start">
  {/* First Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-10 w-10 text-lg rounded-full text-white  sm:h-12 sm:w-12 sm:text-xl md:h-12 md:w-12 md:text-2xl">
    <i className="fa-solid fa-location-dot text-[24px] text-[#0e518f]"></i>
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]">

      Woodbridge (DIP only)
      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Country Inn & Suites
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      2621 Prince William Parkway
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
      Woodbridge , VA 22192
      </p>
      <div className='mt-5' >
     <Link href={"/Locationss/Woodbridge"} className="text-[16px]  md:text-[18px] font-light mt-3 text-[#9c261f]">
        view location details & get directions
      </Link>
     </div>
    </div>
  </div>

  {/* Second Location */}
  <div style={{width:"500px"}} className="flex flex-col sm:flex-row gap-3 mt-5 w-full md:w-auto items-center sm:items-start">
    <div className="flex justify-center items-center h-[38px] w-[38px] rounded-full">
    
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-[24px] md:text-[27px] font-bold text-[#0e518f]"> 

      </h1>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
   
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">

      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3">
 
      </p>
      <p className="text-[16px] md:text-[18px] font-light mt-3 text-[#9c261f]">
     
      </p>
    </div>
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

