"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom(){


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const faqData = [
        {
            title: "Course Options & Descriptions",
            questions: [
                {
                    question: "Option 1: 8-Hours Drivers Manual/Re-Examination Course",
                    answer: "(For Adults aged 18 or over) or (Teens Under age 18 who have completed Drivers Ed)\n(Failed Knowledge Test 3x at DMV) (for individuals with 3 knowledge test failures)\n\nThe Drivers Manual Course is designed for individuals who have failed the knowledge test three (3) times at the DMV. This eight (8) hour course is based on the Virginia Drivers Manual and is designed to better prepare individuals for the knowledge test.\n\nUpon successful completion of the course, we will issue you a Re-Examination Certificate (DTS-C) on the same day. Allowing you to IMMEDIATELY return back to the DMV and retake the knowledge test a fourth (4th) and UNLIMITED times (until you pass), in order to obtain a Learners Permit.\n\nTeens (Under 18) who have completed Drivers Education MUST provide the certificate of completion (DEC-1).\n\n**Course available in 2 different formats:**\n- **Option 1a:** 8-Hours Drivers Manual/Re-Examination Course (Classroom)\n  - If selecting this option, fill out this Registration form.\n- **Option 1b:** 8-Hours Drivers Manual/Re-Examination Course (100% Online)\n  - If selecting this option, for more course details, go directly to this page and fill out the Registration form: [Click Here](https://aadrivingacademy.net/online-course-2/)"
                },
                {
                    question: "Option 2: 30-Hours Online Drivers Education + 90min Parent/Teen Course",
                    answer: "(For Teens under age 18 who have not completed Drivers Ed)\nIf you have failed the knowledge test three (3) times at DMV and are under age 18, and have NOT completed Drivers Education in School, then you MUST take the 30-Hours component of driver education, which also includes the mandatory 90min Parent/Teen course.\n\nYou can select between these 2 options:\n- **Option 2a:** 30-Hours Teen Drivers Education (Virtual/Live Instructor Led - Via Zoom)\n  - For more course details, go directly to this page and fill out the Registration form: [Click Here](https://aadrivingacademy.net/30hr-teen-drivers-education-program-steps-1-of-3/)\n- **Option 2b:** 30-Hours Teen Drivers Education (Online/Self-Paced)\n  - For more course details, go directly to this page and fill out the Registration form: [Click Here](https://aadrivingacademy.net/30-hr-teen-drivers-education-online-self-paced-step-1-of-3/)\n\n**NOTE:** The completion date of the driver's manual course must be after the date of your third (3rd) knowledge test failure."
                },
                {
                    question: "Option 3: 7-Hours Behind the Wheel",
                    answer: "(If you failed the DMV Road Test 3 times)\nIf you have failed the DMV road test three (3) times, you must take the behind-the-wheel component of driver education.\n\nThis consists of seven (7) 50-minute periods of in-car driving instruction. If selecting this option, fill out the Registration form on the page you are on now."
                }
            ]
        },
        {
            title: "Course Info",
            questions: [
                {
                    question: "General Course Information",
                    answer: "The Re-Examination course is NOT a traditional lecture-style classroom. An available member of staff may guide and assist students with questions, but no dedicated staff members will lecture for 8 hours.\n\nShould anyone have any learning disabilities/differences or language concerns, please contact our office before completing registration.\n\n- Classes held in Herndon only (see schedule below)\n- Register & start right away (course held multiple days a week, rolling enrollment) (see schedule below or registration form)\n- Flexible weekday morning, weekday evening & weekend schedule, allows you to maximize hours and complete the course in an accelerated format\n- Drivers Manual Course can be done in 1 day!\n- We supply all class materials\n- Upon successful completion of the course, we will issue the Re-Examination Certificate (DTS-C) on the same day."
                }
            ]
        },
        {
            title: "Final Step/Going Back to DMV",
            questions: [
                {
                    question: "What happens after completing the course?",
                    answer: "Upon receipt of the Re-Examination Certificate (DTS-C), you may IMMEDIATELY return back to the DMV and take the examination a fourth time.\n\nYou will not be restricted on the number of attempts and will now have UNLIMITED retakes of the exam (knowledge or behind-the-wheel examination) until you pass.\n\n★ If you do not pass your DMV exam after taking our course, you can come back to us and repeat some hours for extra help, at NO additional charge!\n\n★ Our main goal is to help prepare you pass your exam at the DMV!"
                }
            ]
        },
        {
            title: "Course Fee $",
            questions: [
                {
                    question: "Re-Examination Course Fees",
                    answer: "https://aadrivingacademy.net/wp-content/uploads/2022/11/Re-Exam-Course-Fees.jpg" 
                }
            ]
        }
    ];
    
    
    
    
    
    
    


    const faqData2 = [
        {
            title: "Extra Information Regarding Our Instructors",
            questions: [
                {
                    question: "DMV Certified Instructors",
                    answer: "Some of our instructors are active and retired police officers, with numerous years of extensive training and experience in traffic law enforcement, emergency driving methods, collision investigation, and traffic court proceedings.\n\nAll of our instructors have many years of driving instruction experience, are given professional training, and are educated college graduates. They have also received specialized collegiate-level training in Driver’s Education.\n\nIn addition, all are licensed as Driver Training Instructors by the Virginia Department of Motor Vehicles (DMV), certified by American Automobile Association (AAA), and National Safety Council (NSC).\n\nAll of our instructors get their fingerprints done every year and are subject to annual national Federal Bureau of Investigations (FBI) background checks and DMV driving record audits."
                }
            ]
        },
        {
            title: "Extra Information Regarding Our School",
            questions: [
                {
                    question: "Our School is Fully Licensed, Certified, Insured, and Bonded",
                    answer: "Since opening its doors in 1994, AA Driving Academy has had one goal: to 'teach you safe, responsible, and accountable driving.'\n\nTo date, our driving school is responsible for training, licensing, and improving the driving of 80,000 student drivers that have graduated from our academy."
                }
            ]
        },
        {
            title: "What To Provide at Your 1st Appointment",
            questions: [
                {
                    question: "Required Documents and Information",
                    answer: "On the day of the class, there is NO NEED TO ARRIVE 15 MINUTES EARLY TO REGISTER!!\n\nJUST SHOW UP AT CLASS START TIME AND DO NOT ARRIVE LATE!!\nWhen you arrive at the location, let the staff member know that you are there for the Driver’s Manual Re-Examination Course.\n\nWe will need the following items from you:\n\n- **PRINTED OUT Confirmation Page (Pre-Registration Form)**\n  - Showing us the email on your phone is NOT sufficient; We need to physically collect this.\n  - This sheet will also show your payment if you paid online. If you did not pay, please bring **Cash or Money Order**; Absolutely **NO CHECKS** allowed!\n\n- **COMPLETED & SIGNED School Contract**\n  - Must be signed by **Student & Parent/Guardian** [Click Here for Student Contract]\n\n- **DMV issued ID card, Federal ID card, Passport, or Birth Certificate**\n  - **NO VALID ID = NO CERTIFICATE ISSUED**\n\n- If you are **under 18** and wish to take the **8hr Driver’s Manual Re-Examination Course**, you must provide the **original Certificate of Completion (DEC-1)** of driver’s education course (classroom or online).\n  - Usually a **pink card** that looks like this."
                }
            ]
        },
        {
            title: "DMV Links & Resources",
            questions: [
                {
                    question: "Driver Training for Three Exam Failures",
                    answer: "For more information on driver training requirements after failing the exam three times, visit the Virginia DMV official website: [Driver Training for Three Exam Failures](https://www.dmv.virginia.gov/drivers/#three_exam_failures.asp)."
                }
            ]
        }
    ];
    
    
    
    
    





  
  
  
  



return <div>



<div
  className="flex justify-center items-center w-full h-[600px] sm:h-[600px] lg:h-[590px] bg-cover bg-top px-4"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://aadrivingacademy.net/wp-content/uploads/2021/11/reckless-aggressive-2400-scaled.jpg')"
  }}
>
  <div className="text-center">
  <h1 className="font-semibold md:font-bold sm:text-xl text-2xl md:text-4xl lg:text-6xl mt-36 sm:mt-28 lg:mt-40 text-white">
  DRIVERS MANUAL /
</h1>

    <h1 className="font-semibold md:font-bold sm:text-xl text-2xl md:text-4xl lg:text-6xl mt-2 sm:mt-6 text-white">
      RE-EXAMINATION COURSE
    </h1>
    <h1 className="font-semibold md:font-bold sm:text-xl text-2xl md:text-4xl lg:text-6xl mt-2 sm:mt-6 text-white">
      (FAILED 3 TIMES AT DMV)
    </h1>
    <h1 className="font-semibold md:font-bold sm:text-sm text-sm md:text-xl lg:text-xl mt-2 sm:mt-6 text-white">
      * Offered multiple times a week at our Herndon, VA office.
    </h1>
    <h1 className="font-semibold md:font-bold sm:text-sm text-lg md:text-xl lg:text-xl mt-2 text-white">
      * Issued the Re-Examination Certificate (DTS-C) same day; Return back to DMV
    </h1>
  </div>
</div>




<div className=" mt-5 gap-6 p-6 lg:p-10">
  <div className=" max-w-full mt-5 h-auto p-4">





    <div className="flex flex-wrap mt-3 justify-center gap-5">
  
  <img
    src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
    className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain"
    alt="1 Stop Driving School of Virginia"
  />

</div>
  
    <p style={{fontWeight:"700"}} className="text-base sm:text-lg mt-8">
    Driver's license applicants, who fail the knowledge exam OR road skills test three (3) times at the DMV, must successfully complete the applicable knowledge OR in-vehicle component of a driver education course, before they can take the examination a fourth time at DMV.
    </p>
    <p style={{fontWeight:"700"}} className="text-base sm:text-lg mt-8">
    You must obtain the certificate of completion to return to DMV for testing, regardless of age. For minors, this requirement is NOT removed by reaching 18 years of age. This course is mandatory for those who have failed three times and still wish to obtain a Learner’s Permit/Driver’s License in Virginia.
    </p>
 
  </div>
  
  <div className=" max-w-full  h-auto p-6 flex justify-center items-center">
    <div className="text-center">
      <h1 style={{color:" rgb(14 81 143)"}} className="text-3xl sm:text-4xl  mt-10 font-bold">**Be Sure To Watch the Video!** </h1>

      <video className="w-full sm:w-[550px] mt-16 mb-14 " controls src="/Drivers Manual-Re-Examination Course (Failed 3 times at DMV).mp4"></video>
    </div>
  </div>
</div>

<div className="flex flex-col xl:flex-row items-center gap-20 p-6 md:p-14 text-center lg:text-left">
  {faqData.map((faq, index) => (
    <div key={index} className="w-auto max-w-lg mt-0 md:max-w-auto lg:max-w-7xl">
      <div onClick={() => setIsOpen(index)} className="cursor-pointer">
        <div className="flex justify-between items-center text-black px-3 py-2">
          <h1
            style={{ width: index === 0 ? "224px" : "224px" }}
            className={`text-lg md:text-xl text-center font-medium border-b-4 border-red-600 ${
              index === 0 || index === 2 ? "pb-2" : "pb-8"
            } w-full`}
          >
            {faq.title}
          </h1>
        </div>
      </div>

      {/* Modal */}
      {isOpen === index && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-auto lg:max-w-2xl max-h-[90vh] overflow-y-auto relative text-center md:text-center lg:text-left">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
              onClick={() => setIsOpen(null)}
            >
              ✖
            </button>

            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              {faq.questions.map((q, i) => (
                <div key={i} className="text-center md:text-center lg:text-left">
                  <strong>{q.question}</strong>
                  <br />
                  {index === 3 ? (
                    <img src={q.answer} alt="Answer Image" className="w-full max-w-md mx-auto rounded-lg shadow" />
                  ) : (
                    q.answer
                  )}
                </div>
              ))}
            </div>

            {/* Close button at bottom */}
            <div className="mt-6">
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




<div className="flex flex-col xl:flex-row items-center gap-16 p-6 md:p-14 text-center lg:text-left">
  {faqData2.map((faq, index2) => (
    <div key={index2} className="w-auto max-w-lg mt-0 md:max-w-auto lg:max-w-7xl">
      <div onClick={() => setIsOpen2(index2)} className="cursor-pointer">
        <div className="flex justify-between items-center text-black px-3 py-2">
          <h1
            style={{
              width: index2 === 0 ? "257px" 
                    : index2 === 2 ? "240px" 
                    : index2 === 3 ? "218px" 
                    : "224px",
            }} 
            className="text-lg text-center md:text-xl font-medium border-b-4 border-red-600 pb-2"
          >
            {faq.title}
          </h1>
        </div>
      </div>

      {/* Modal */}
      {isOpen2 === index2 && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-auto lg:max-w-2xl max-h-[90vh] overflow-y-auto relative text-center md:text-center lg:text-left">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
              onClick={() => setIsOpen2(null)}
            >
              ✖
            </button>

            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              {faq.questions.map((q, i) => (
                <p key={i} className="text-center md:text-center lg:text-left">
                  <strong>{q.question}</strong>
                  <br />
                  {q.answer}
                </p>
              ))}
            </div>

            {/* Close button at bottom */}
            <div className="mt-6">
              <button
                className="bg-[#002243] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                onClick={() => setIsOpen2(null)}
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




<div className="container mx-auto flex justify-center">
      <img 
        src="https://aadrivingacademy.net/wp-content/uploads/2025/01/Re-Exam-022025-1.png" 
        alt="Re-Exam Image" 
        className="max-w-full h-auto"
      />
    </div>









    <div>
  {/* Header Section */}
  <div className="flex justify-center pt-5 px-4">
    <div
      className="container mx-auto mt-8 w-full text-center bg-yellow-400 p-4"
    >
      <h1 className="font-bold text-xl sm:text-xl text-[#9c261f] mb-3">
        How To Register for Course
      </h1>
    </div>
  </div>

  {/* Content Section */}
  <div className="flex flex-col p-6 md:p-12 gap-7 justify-center">
    {/* Left Image */}
    <div className="w-full flex justify-center">
      <img
        className="h-auto lg:h-[500px] w-full max-w-5xl object-cover"
        src="https://aadrivingacademy.net/wp-content/uploads/2021/10/Road-2-Infographic.jpg"
        alt="Infographic"
      />
    </div>

    {/* Right Box */}
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-full p-5">
        {/* Lock Icon and Register Button */}
        <div className="flex flex-col md:flex-row items-center gap-5 mt-6 lg:mt-8 justify-center">
          <img
            className="w-[70px]"
            src="https://aadrivingacademy.net/wp-content/uploads/2021/10/secure-icon-padlock-icon-isolated-vector-elvinagraph.jpg"
            alt="Secure Icon"
          />
           <Link href={"/Registration"} className="bg-[#9c261f] text-white font-bold text-xl md:text-2xl px-8 md:px-10 py-3">
          CLICK HERE TO REGISTER
        </Link>
        </div>

        {/* Student Contract Buttons */}
      

        {/* Note Section */}
        <div className="bg-[#002243] w-full text-white text-center mt-10 p-5 ">
          <p>
            NOTE: Once you have filled out the registration form and paid for
            the course, you will receive a confirmation email and a separate
            email for your receipt. Please keep it for your records and print it
            out to present to the instructor.
          </p>
        </div>

        {/* Card Image */}
        <div className="w-full pt-8 flex justify-center">
          <img
            className="w-full max-w-[400px] mb-10"
            src="https://aadrivingacademy.net/wp-content/uploads/2022/11/Card-Pic-1.jpg"
            alt="Card"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Google Map */}
  <div className=" relative w-full h-[270px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0458273610874!2d-77.3963002!3d38.9686862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6380a2553ebbb%3A0x54f774babc9ed1e9!2s1043%20Sterling%20Rd%20%23101%2C%20Herndon%2C%20VA%2020170%2C%20USA!5e0!3m2!1sen!2sus!4v1611139899651!5m2!1sen!2sus"
      width="100%"
      height="270px"
      className="border-0"
      allowFullScreen
      loading="lazy"
      title="Google Map"
    ></iframe>
    <a
      href="https://www.google.com/maps/place/1043+Sterling+Rd+%23101,+Herndon,+VA+20170,+USA/@38.9707041,-77.4028711,15z/data=!4m6!3m5!1s0x89b6380a2553ebbb:0x54f774babc9ed1e9!8m2!3d38.9686862!4d-77.3963002!16s%2Fg%2F11mbnhlbbg?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 left-0 w-full h-full"
      aria-label="Open location in Google Maps"
    ></a>
  </div>
</div>






</div>



}




