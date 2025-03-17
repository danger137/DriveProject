"use client";

import Head from "next/head";

export default function Home() {
  const locations = [
    // Column 1
    [
      "Aldie",
      "Alexandria",
      "Annandale",
      "Arcola",
      "Arlington",
      "Ashburn",
      "Brambleton",
      "Bristow",
      "Vienna",
    ],
    // Column 2
    [
      "Broadlands",
      "Burke",
      "Cascades",
      "Centreville",
      "Chantilly",
      "Clifton",
      "Dale City",
      "Dulles",
      "West Springfield",
    ],
    // Column 3
    [
      "Dumfries",
      "Dunn Loring",
      "Fairfax",
      "Fairfax Station",
      "Fair Lakes",
      "Falls Church",
      "Fort Belvoir",
      "Fort Hunt",
      "Woodch...", // Update if you know the full name
    ],
    // Column 4
    [
      "Franconia",
      "Gainesville",
      "Great Falls",
      "Haymarket",
      "Herndon",
      "Lake Ridge",
      "Lansdowne",
      "Leesburg",
      "Woodbridge",
    ],
    // Column 5
    [
      "Lorton",
      "Lovettsville",
      "Manassas",
      "Manassas Park",
      "McLean",
      "Merrifield",
      "Mount Vernon",
      "Newington",
    ],
    // Column 6
    [
      "Nokesville",
      "Oakton",
      "Occoquan",
      "Potomac",
      "Purcellville",
      "Quantico",
      "Reston",
      "Round Hill",
    ],
    // Column 7
    [
      "South Riding",
      "Springfield",
      "Sterling",
      "Stone Ridge",
      "Triangle",
      "Tysons Corner",
      "Tysons Corner",
    ],
  ];

  return (
    <>
      <Head>
        <title>YSSR EDUCATION - Trusted DMV-Approved Driving Academy</title>
        <meta
          name="description"
          content="YSSR EDUCATION offers safe, responsible, and accountable driving courses in 25 convenient Northern Virginia locations. Learn driving, driver improvement, and more at AA Driving Academy."
        />
        <meta
          name="keywords"
          content="Driving Academy, DMV Approved, Driving Courses, Driver Improvement, AA Driving Academy, Northern Virginia"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yoursite.com" />
        <meta property="og:title" content="YSSR EDUCATION - Trusted DMV-Approved Driving Academy" />
        <meta
          property="og:description"
          content="Learn safe, responsible, and accountable driving with our top courses across 25 Northern Virginia locations."
        />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yoursite.com/your-og-image.jpg" />
      </Head>

      <header>
        {/* Hero Section */}
        <section
          className="w-full h-auto lg:h-[943px] bg-cover bg-center flex justify-center"
          style={{
            backgroundImage:
              'url("/New-Project-60-landscape-31557f3ee0b44688a29bf78d7d12e659-617afdd3ad843.jpg")',
          }}
          aria-label="Hero Section"
        >
          <div className="px-4 md:px-8 gap-5 flex flex-col lg:flex-row justify-center items-center">
            {/* Left Section */}
            <div className="lg:ms-10 text-center lg:text-left lg:w-1/2 mt-24 lg:mt-0">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mt-10 lg:mt-36">
                Best Education Platform YSSR EDUCATION
              </h1>
              <h2 className="text-lg lg:text-2xl font-medium text-white mt-5">
                Safe, Responsible, and Accountable Driving Courses in 25 Convenient Northern Virginia Locations
              </h2>
              <button
                className="bg-[#9c261f] text-white text-lg font-bold px-10 py-3 lg:px-16 lg:py-4 mt-6 lg:mt-10 rounded-full hover:bg-red-800 transition"
                aria-label="Connect with us"
              >
                Connect With Us
              </button>
              {/* Badge Images */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mt-8 lg:mt-10">
                <img
                  className="w-[80px] lg:w-[90px]"
                  src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/FBISeal-square-350507323f0d868fe324681290e65398-617ad6dad87b9.png"
                  alt="FBI Seal"
                />
                <img
                  className="w-[80px] lg:w-[90px]"
                  src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/Licensed-Insured-Bonded-Badge-square-ec6bd655d295ca628344722d9a107903-617ad7137fd60.png"
                  alt="Licensed and Insured Badge"
                />
                <img
                  className="w-[80px] lg:w-[90px]"
                  src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/National_Safety_Council.svg-square-f0011057ed473429a13d5f30c17c761a-617ad72366a13.png"
                  alt="National Safety Council"
                />
                <img
                  className="w-[80px] lg:w-[90px]"
                  src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/1-Stop-Driving-School-of-Virginia-square-003383e13766f6c3f71e11ac7cb3f29f-617ad67562018.png"
                  alt="1 Stop Driving School"
                />
              </div>
            </div>
            {/* Map Image */}
            <div className="mt-3 lg:mt-44 lg:w-1/2 flex justify-center">
              <img
                className="w-[78%] lg:w-[1120px] max-w-full"
                src="https://aadrivingacademy.net/wp-content/uploads/2021/10/Map-final-01.png"
                alt="Map of 25 Northern Virginia locations"
              />
            </div>
          </div>
        </section>
      </header>

      <main>
        {/* Courses and Programs Section */}
        <section aria-label="Courses and Programs">
        <div  className="flex flex-col lg:flex-row justify-center px-4">
  {/* Left Card */}
  <div className="w-full lg:w-1/2 max-w-[507px] mt-12 mb-20 text-center mx-auto">
    <div className="flex justify-center mt-20">
      <div className="flex items-center justify-center bg-red-800 w-24 h-24 rounded-full">
        <i className="fas fa-car text-white text-5xl" aria-hidden="true"></i>
      </div>
    </div>
    <h2 className="text-4xl font-bold mt-7">
      <span className="text-red-800">A Trusted and </span>
      <span className="text-blue-900">DMV-Approved</span>
      <br />
      <span className="text-blue-900">Driving Academy</span>
    </h2>
    <h3 className="text-3xl font-bold mt-10 mb-0 lg:mb-10 text-blue-700">
      YSSR EDUCATION, Inc. <br />
      12 Courses Offered in Classroom, Online, and on the Road
    </h3>
  </div>
  {/* Right Cards */}
  <div style={{position:"relative",bottom:'40px'}} className="w-full lg:w-1/2 mt-10 lg:mt-0">
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      {/* Card 1 */}
      <div className="border shadow-lg overflow-hidden">
        <img
          src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/8-hours-driver-improvement-landscape-12164d7598012ab7bc6fdd6f0715410f-617afe4eae51d.jpg"
          alt="Driver Improvement Program Classroom"
          className="w-full object-cover"
        />
        <div  className="bg-blue-900 text-white p-4">
          <p className="text-lg font-semibold">
            8 Hours Driver Improvement Program (DIP) Classroom
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="border shadow-lg overflow-hidden">
        <img
          src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/8-hours-driver-improvement-online-landscape-2d0f9c3dcfe28d1d28c1d788ca8fff4e-617afe389a33d.jpg"
          alt="Driver Improvement Program Online"
          className="w-full object-cover"
        />
        <div className="bg-red-800 text-white p-4">
          <p className="text-lg font-semibold">
            8 Hours Driver Improvement Program (DIP) Online
          </p>
        </div>
      </div>
      {/* Card 3 */}
      <div  className="border shadow-lg overflow-hidden">
        <img
          src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/online-dip-course-small_2-landscape-fcb5713108e2cf22cce03cf1e0fed5d1-618ec51a71d3e.jpg"
          alt="Teen Driver’s Education Course"
          className="w-full object-cover"
        />
        <div style={{ height: "89px" }} className="bg-red-800 text-white p-4">
          <p className="text-lg font-semibold">
            Teen Driver’s Education Course
          </p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="border shadow-lg overflow-hidden">
        <img
          src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/re-exam-landscape-067698dec398482b37ad6bcfb261857e-617afe592e715.jpg"
          alt="Reexamination Course"
          className="w-full object-cover"
        />
        <div style={{ height: "89px" }} className="bg-blue-900 text-white p-4">
          <p className="text-lg font-semibold">
            Reexamination Course (Failed DMV Test 3 Times)
          </p>
        </div>
      </div>
      {/* Card 5 */}
      <div className="border shadow-lg overflow-hidden">
        <img
          src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/4-Hours-Reckless-scaled-landscape-dda829882337b6c6e0d71449f313def5-618ec502a9fc4.webp"
          alt="Reckless Driving Course"
          className="w-full object-cover"
        />
        <div style={{ height: "89px" }} className="bg-blue-900 text-white p-4">
          <p className="text-lg font-semibold">
            4 Hours Reckless/Aggressive Driving Course
          </p>
        </div>
      </div>
      {/* Card 6 */}
      <div className="border shadow-lg overflow-hidden">
        <img
          src="https://aadrivingacademy.net/wp-content/uploads/bb-plugin/cache/New-Project-60-landscape-31557f3ee0b44688a29bf78d7d12e659-617afdd3ad843.jpg"
          alt="Teen Behind the Wheel Course"
          className="w-full object-cover"
        />
        <div style={{ height: "89px" }} className="bg-red-800 text-white p-4">
          <p className="text-lg font-semibold">
            Teen Behind the Wheel Course
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </section>

    {/* Videos Section */}
<section aria-label="Video Courses">
  <div className="flex flex-wrap justify-center gap-10">
    <div className="w-full sm:w-96">
      <video className="w-full h-auto" controls src="/Driver%20Improvement%20Program%20(DIP).mp4"></video>
    </div>
    <div className="w-full sm:w-96">
      <video className="w-full h-auto" controls src="/Drivers%20Manual-Re-Examination%20Course%20(Failed%203%20times%20at%20DMV).mp4"></video>
    </div>
    <div className="w-full sm:w-96">
      <video className="w-full h-auto" controls src="/Reckless-Aggressive%20Driver%20Course.mp4"></video>
    </div>
  </div>
</section>

{/* Video Background Section */}
<section aria-label="Special Programs Videos">
  <div
    className="w-full mt-5 h-auto min-h-[600px] bg-cover bg-center flex justify-center items-center px-4"
    style={{ backgroundImage: 'url("/home-background-2400-scaled.jpg")' }}
  >
    <div className="w-full max-w-7xl px-4 flex flex-col lg:flex-row gap-10 justify-center items-center">
      <div className="w-full max-w-2xl">
        <video controls src="/Teen%20Licensing%20Package%20Program.mp4" className="w-full h-auto"></video>
      </div>
      <div className="w-full max-w-2xl">
        <video controls src="/Adult%20License%20Waiver%20Program.mp4" className="w-full h-auto"></video>
      </div>
    </div>
  </div>
</section>



        {/* Information Cards */}
        <section aria-label="About AA Driving Academy">
          <div className="flex flex-col lg:flex-row justify-center items-center p-10 lg:p-14 mt-10">
            <div
              className="text-white p-8 shadow-md w-full lg:w-1/2 max-w-full"
              style={{ backgroundColor: "#002243", minHeight: "420px" }}
            >
              <p style={{ fontSize: "17px", fontWeight: "400" }}>
                Since opening its doors in 1994, <strong>AA Driving Academy</strong> has had one goal: to "teach you safe, responsible, and accountable driving." To date, our driving school is responsible for training, licensing, and improving the driving of <em>100,000 student drivers</em> that have graduated from our academy.
              </p>
              <p style={{ fontSize: "17px", fontWeight: "400" }} className="mt-4">
                We offer several services to facilitate your driving needs. We specialize in teaching collision-free, defensive driving techniques. This, combined with a solid grounding of classroom theory, gives students the strong foundation they need to develop a thorough understanding of the roads, rules, and regulations. We offer behind-the-wheel training, driver improvement courses, reckless/aggressive courses, driver education, and reexamination courses.
              </p>
            </div>

            <div
              className="text-white p-8 shadow-md w-full mt-5 lg:mt-0 lg:w-1/2 max-w-full"
              style={{ backgroundColor: "#9c261f", minHeight: "380px" }}
            >
              <p style={{ fontSize: "17px", fontWeight: "400" }}>
                Some of our instructors are active and retired police officers with numerous years of extensive training and experience in traffic law enforcement, emergency driving methods, collision investigation, and traffic court proceedings. All of our instructors have many years of driving instruction experience, are given professional training, and are educated college graduates.
              </p>
              <p style={{ fontSize: "17px", fontWeight: "400" }} className="mt-4">
                They have also received specialized collegiate-level training in Driver’s Education. In addition, all are licensed as Driver Training Instructors by the Virginia Department of Motor Vehicles (DMV) and certified by the American Automobile Association (AAA) and National Safety Council (NSC). They are subject to annual national Federal Bureau of Investigations (FBI) background checks and DMV driving record audits.
              </p>
            </div>
          </div>
        </section>

       
        {/* Accreditation Section */}
        <section aria-label="Accreditations">
          <div className="mb-10 flex justify-center">
            <h1 className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0e518f]">
              Our School Is Fully Licensed, Certified, Insured, and Bonded.
            </h1>
          </div>
        </section>

        {/* Locations Section */}
        <section aria-label="Service Locations">
          <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url('/fmf_5958-scaled.jpg')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-85"></div>
            <div className="relative text-white py-10 px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
                We are proudly servicing the following Northern Virginia locations:
              </h2>
              <div className="mx-auto max-w-screen-xl p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                  {locations.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-2">
                      {column.map((place, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-4 h-4 bg-white border border-white flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-black"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="ml-2 text-lg">{place}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section aria-label="Google Maps">
          <div style={{ position: "relative", width: "100%", height: "270px" }}>
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
        </section>
      </main>

   
    </>
  );
}
