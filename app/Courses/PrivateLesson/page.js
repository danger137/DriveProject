"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom(){


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
const faqData = [
    {
        title: "Extra Information Regarding Our Vehicle",
        questions: [
            {
                question: "Vehicle Details and Safety Features",
                answer: "Our DMV-certified instructors give in-car instruction using DMV-approved vehicles (modern, 4-door, automatic, dual-controlled).\n\n- Clean, air-conditioned, automatic transmission, dual control vehicles\n- Our vehicles go through continuous and rigorous maintenance and safety inspections.\n- Our vehicles have dual-equipped brakes, passenger-side rearview mirror, blind-spot mirrors, and are inspected annually by the DMV.\n- Our vehicles hold vehicle inspection reports in compliance with Virginia state requirements to ensure you receive maximum safety."
            }
        ]
    },
    {
        title: "Extra Information Regarding Our Instructors",
        questions: [
            {
                question: "DMV-Certified Instructors",
                answer: "Some of our instructors are active and retired police officers with numerous years of extensive training and experience in traffic law enforcement, emergency driving methods, collision investigation, and traffic court proceedings.\n\n- All of our instructors have many years of driving instruction experience, are given professional training, and are educated college graduates.\n- They have received specialized collegiate-level training in Driver’s Education.\n- All are licensed as Driver Training Instructors by the Virginia Department of Motor Vehicles (DMV), certified by the American Automobile Association (AAA), and the National Safety Council (NSC).\n\n**1-Stop-Driving-School-of-Virginia**\n- All of our instructors get their fingerprints done every year and are subject to annual national Federal Bureau of Investigations (FBI) background checks and DMV driving record audits."
            }
        ]
    },
    {
        title: "Extra Information Regarding Our School",
        questions: [
            {
                question: "Our School's Licensing and Legacy",
                answer: "Our school is fully licensed, certified, insured, and bonded.\n\nSince opening its doors in 1994, AA Driving Academy has had one goal: to 'teach you safe, responsible, and accountable driving.' To date, our driving school is responsible for training, licensing, and improving the driving of 100,000 student drivers that have graduated from our academy."
            }
        ]
    },
    {
        title: "What To Provide at Your 1st Appointment",
        questions: [
            {
                question: "Required Documents & Payment",
                answer: "- **Printed registration form**\n- **Completed and signed school contract** (must be signed by student and parent/guardian) [Click Here for Student Contract](#)\n- **Photocopy of Learner’s Permit** issued by the DMV\n- **Remaining balance payment** (Checks can be made out to 'AA Driving Academy')"
            }
        ]
    },
 
];




    
    
    
    



    
    


    const pricingData = [
        { lessons: 2, price: 180, savings: 0 },
        { lessons: 3, price: 260, savings: 10 },
        { lessons: 5, price: 430, savings: 20 },
        { lessons: 7, price: 600, savings: 30 },
      ];
    


  
  
  
  



return <div>



<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://aadrivingacademy.net/wp-content/uploads/2021/11/adult-waiver-program-2400-scaled.jpg')"
  }}
>
  <div className="text-center px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:mt-44 xl:mt-28 lg:text-5xl xl:text-6xl mt-16 sm:mt-32 text-white">
    PRIVATE  LESSONS
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-6xl   sm:mt-5 text-white">
    (1 on 1 TRAINING)
    </h1>

  </div>
</div>

<div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 p-4 sm:p-6 lg:p-10">
  {/* Left Content */}
  <div className="w-full lg:w-[750px] h-auto p-4">
    <div className="flex flex-col xl:flex-row gap-3 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9c261f]">
        See Our
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002243]">
        Exceptional
      </h1>
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-[rgb(14,81,143)] text-center lg:text-left">
      Private Lessons/1-on-1 Training
    </h1>

    <p className="text-base sm:text-lg mt-4 text-center lg:text-left">
      * Private, 1-on-1 lessons (90 mins)
    </p>
    <p className="text-base sm:text-lg mt-2 text-center lg:text-left">
      * Pick up and drop off included
    </p>

    {/* Lesson Details */}
    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
      {[
        "Private 1-on-1 lessons to help teach you to become a safe, responsible, and accountable driver...",
        "Each lesson is 1.5 hours (90 minutes) long; *2 lesson minimum* Pick up and drop off included.",
        "Available 7 days a week, including evenings.",
        "Our behind-the-wheel services are performed by professional and experienced driving instructors...",
      ].map((text, index) => (
        <p key={index} className="text-base sm:text-lg w-full md:max-w-lg font-normal">
          * {text}
        </p>
      ))}
    </div>

    {/* FAQ Section */}
    <div className="flex  flex-col md:grid md:grid-cols-2 gap-6 mt-20 text-center lg:text-left">
      {faqData.map((faq, index) => (
        <div key={index} className="w-full max-w-lg">
          <div onClick={() => setIsOpen(index)} className="cursor-pointer">
            <div className="flex justify-between items-center text-black px-4 py-3  ">
              <h1 className="text-lg md:text-xl font-medium border-b-4 border-red-600 pb-1 w-full">
                {faq.title}
              </h1>
            </div>
          </div>

          {isOpen === index && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg lg:max-w-2xl max-h-[80vh] overflow-y-auto relative">
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
                  onClick={() => setIsOpen(null)}
                >
                  ✖
                </button>

                <div className="space-y-4 text-gray-700 text-sm md:text-base">
                  {faq.questions.map((q, i) => (
                    <p key={i}>
                      <strong>{q.question}</strong>
                      <br />
                      {q.answer}
                    </p>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button
                    className="bg-[#002243] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                    onClick={() => setIsOpen(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Right Section - Video */}
  <div className="bg-[#002243] w-full lg:w-[650px] h-auto p-6 sm:p-9 flex justify-center items-center">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Private Lessons/1-on-1 Training Pricing
      </h2>
      <p className="text-lg sm:text-xl mt-2 text-white">
        (Each lesson is 1.5 hrs/90 mins long)
      </p>
      <p className="text-md sm:text-lg italic mt-1 text-white">
        *2 lessons minimum*
      </p>

      <div className="mt-4 w-full">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-300 py-3"
          >
            <div>
              <p className="font-semibold text-white">{item.lessons} Lessons</p>
              <p className="text-xs text-white">({item.lessons} × 90min)</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white">${item.price}</p>
              {item.savings > 0 && (
                <p className="text-xs text-green-400">(Savings ${item.savings})</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-md sm:text-lg mt-6 text-white font-semibold">
        **This pricing is the same for all of our service areas/zones**
      </p>
      <p className="text-md sm:text-lg mt-6 text-white font-semibold">
        <strong>Zone 1:</strong> Alexandria, Arlington, Burke, Dunn Loring, Fairfax, Fair Lakes, Fair Oaks, Falls Church, Great Falls, McLean, Merrifield, Oakton, Tysons Corner, Vienna.
      </p>
      <p className="text-md sm:text-lg mt-6 text-white font-semibold">
        <strong>Zone 2:</strong> Ashburn, Brambleton, Broadlands, Cascades, Dulles, Herndon, Lansdowne, Leesburg, Oak Hill, Potomac Falls, Reston, Sterling.
      </p>
    </div>
  </div>
</div>









<div className="flex justify-center px-4">
  <div style={{background:" rgb(255 255 0)"}} className="flex justify-center  mt-14 mb-14  w-full max-w-2xl">
    <h1 className="text-center text-lg font-semibold text-red-700 max-w-2xl">
      WHILE SUBMITTING THE REGISTRATION FORM, YOU MUST PAY THE 2 LESSON MINIMUM DEPOSIT ($180). IF YOU ARE DOING MORE THAN 2 LESSONS, THE REMAINING BALANCE YOU WILL PAY LATER TO THE INSTRUCTOR.
    </h1>
  </div>
</div>

















<div className="bg-gray-100" >
<div className="flex justify-center pt-5 px-4">

</div>

<div className="flex flex-col lg:flex-row p-6 md:p-12 gap-7 justify-center items-center">
  {/* Left Box */}
  <div className="w-full max-w-[770px] flex items-center justify-center">
    <div style={{ background: "#002243" }} className="w-full max-w-[620px] shadow-lg p-5 md:p-8 h-full min-h-[560px] flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <p className="w-full max-w-[500px] text-white text-lg mt-6 md:mt-10 font-semibold text-start md:text-center">
            While submitting the registration form, you must pay the 2-lesson minimum deposit ($180). If you are doing more than 2 lessons, the remaining balance you will pay later to the instructor.
          </p>
          <p className="w-full max-w-[500px] text-white text-lg mt-6 md:mt-10 font-semibold text-start md:text-center">
            Note: By completing the registration form, this does NOT guarantee a time spot/schedule. Once you submit your registration and pay the deposit within 24 business hours, we will send you an email with your assigned instructor's information. Please contact the instructor directly to discuss scheduling. Please give them 24-48 hours to respond. If you do not hear back from them, you may text them or please call our office at 703-478-6800.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Box */}
  <div className="w-full max-w-[770px] flex items-center justify-center">
    <div className="w-full max-w-[620px] bg-white shadow-lg p-5 md:p-8 h-full min-h-[560px] flex flex-col justify-center">
      <div className="flex justify-center">
        <p className="w-full max-w-[555px] text-lg mt-6 md:mt-10 font-semibold text-center">
          The initial payment of $179.00 is only a deposit. The remainder balance you will pay to your behind-the-wheel driving instructor.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 mt-6 lg:mt-8 justify-center">
        <img
          className="w-[70px] md:w-[80px]"
          src="https://aadrivingacademy.net/wp-content/uploads/2021/10/secure-icon-padlock-icon-isolated-vector-elvinagraph.jpg"
          alt="Secure Icon"
        />
          <Link href={"/Registration"} className="bg-[#9c261f] text-white font-bold text-xl md:text-2xl px-8 md:px-10 py-3">
          CLICK HERE TO REGISTER
        </Link>
      </div>

    

      {/* Bottom Image */}
      <div className="flex justify-center mb-10 mt-8">
        <img
          className="w-full max-w-[180px] md:max-w-[200px] h-auto"
          src="https://aadrivingacademy.net/wp-content/uploads/2022/11/Card-Pic-1.jpg"
          alt="Card"
        />
      </div>
    </div>
  </div>
</div>








<div>




<div className="mt-5" style={{ position: "relative", width: "100%", height: "270px" }}>
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
</div>





</div>



}




