import Link from "next/link";



export default function Dip(){




return <div>


<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2021/11/drivers-ed-class-2400-scaled.jpg')" }}
>
  <div className="relative text-center mt-24 sm:mt-28 md:mt-20 lg:mt-24 px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-20 text-white">
      DIP & RECKLESS SCHEDULE
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-5 text-white">
      CALENDAR
    </h1>
  </div>
</div>







<div className="container mx-auto px-4">
  <div className="flex justify-center mt-5">
    <div>
      <h1 className="text-3xl sm:text-4xl mt-8 text-center font-bold text-[#0e518f]">
        To Register for 8 hour DIP
      </h1>
      <div className="flex flex-wrap justify-center text-center gap-2 text-lg mt-10 px-4 md:px-0">
  <p className="font-light">Please go to</p>
  <Link className="font-light text-[#9c261f]" href="/">
    Classroom Course | Drivers Improvement Program
  </Link>
  <p className="font-light">scroll to bottom of the page and</p>
</div>

    </div>
  </div>
  <div className="flex flex-col items-center gap-1 mt-3 px-4 md:flex-row md:justify-center md:px-0">
  <p className="text-center text-lg">Click the button that says</p>
  <p className="text-center text-lg font-bold">"Click Here to Register"</p>
</div>

  <div className="flex justify-center mt-3">
    <p className="text-center text-lg font-bold">OR</p>
  </div>
  <div className="flex flex-col items-center gap-1 mt-3 px-4 text-center md:flex-row md:justify-center md:px-0">
  <Link className="text-lg text-[#9c261f] break-all" href="/register">
    https://www.yssreducation.com/5018746
  </Link>
  <p className="text-lg">for the actual registration page.</p>
</div>

</div>


<div className="flex flex-col items-center py-8">
 
      {/* Embedded Google Calendar */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id%40group.calendar.google.com&ctz=Asia%2FKolkata"
        style={{ border: "1px,solid," }}
        width="90%"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
   
    </div>




    <div className="container mx-auto px-4">
  <div className="flex justify-center mt-5">
    <div>
      <h1 className="text-3xl sm:text-4xl mt-8 text-center font-bold text-[#0e518f]">
      To Register for 4 hour Reckless
      </h1>
      <div className="flex flex-wrap justify-center text-center gap-2 text-lg mt-10 px-4 md:px-0">
  <p className="font-light">Please go to</p>
  <Link className="font-light text-[#9c261f]" href="/">
  Reckless Driving Course 
  </Link>
  <p className="font-light">scroll to bottom of the page and</p>
</div>

    </div>
  </div>
  <div className="flex flex-col items-center gap-1 mt-3 px-4 md:flex-row md:justify-center md:px-0">
  <p className="text-center text-lg">Click the button that says</p>
  <p className="text-center text-lg font-bold">"Click Here to Register"</p>
</div>

  <div className="flex justify-center mt-3">
    <p className="text-center text-lg font-bold">OR</p>
  </div>
  <div className="flex flex-col items-center gap-1 mt-3 px-4 text-center md:flex-row md:justify-center md:px-0">
  <Link className="text-lg text-[#9c261f] break-all" href="/register">
    https://www.yssreducation.com/5018746
  </Link>
  <p className="text-lg">for the actual registration page.</p>
</div>

</div>


<div className="flex flex-col items-center py-8">
 
      {/* Embedded Google Calendar */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id%40group.calendar.google.com&ctz=Asia%2FKolkata"
        style={{ border: "1px,solid," }}
        width="90%"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
   
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

