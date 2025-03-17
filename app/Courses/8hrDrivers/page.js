"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom(){


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const faqData = [
        {
            title: "Course Options and Descriptions",
            questions: [
                {
                    question: "Option 1: 8 Hours Driver’s Manual/Reexamination Course",
                    answer: "(For adults age 18 or over or teens under age 18 who have completed Driver’s Ed)\n(Failed Knowledge Test 3x at DMV for individuals with 3 knowledge test failures)\n\nThe Driver’s Manual Course is designed for individuals who have failed the knowledge test three (3) times at the DMV. This eight (8) hour course is based on the Virginia Drivers Manual and is designed to better prepare individuals for the knowledge test.\n\nUpon successful completion of the course, we will issue you a Reexamination Certificate (DTS-C) on the same day, allowing you to IMMEDIATELY return back to the DMV and retake the knowledge test a fourth (4th) and UNLIMITED times (until you pass) in order to obtain a Learner’s Permit.\n\nTeens (Under 18) who have completed Driver’s Education MUST provide the certificate of completion (DEC-1).\n\nNote: The completion date of the driver's manual course must be after the date of your third (3rd) knowledge test failure."
                },
                {
                    question: "Option 2a: 30 Hours Online Driver’s Education + 90-min Parent/Teen Course",
                    answer: "(For teens under age 18 who have not completed Driver’s Ed)\nIf you have failed the knowledge test three (3) times at DMV and are under age 18, and have NOT completed Driver’s Education in School, then you MUST take the 30 hours component of driver’s education. You can select between 2 options: Online (2a) or Classroom (2b). And you must also complete the 90-min Parent-Teen Course as well.\n\n**For more details, 90-min PT course dates, final test info, and registration, visit:**\nhttps://aadrivingacademy.net/online-drivers-education-training-virginia.html"
                },
                {
                    question: "Option 2b: 30 Hours Classroom Driver’s Education + 90-min Parent/Teen Course",
                    answer: "(For teens under age 18 who have not completed Driver’s Ed)\nIf you have failed the knowledge test three (3) times at DMV and are under age 18, and have NOT completed Driver’s Education in school, then you MUST take the 30 hours component of driver education. You can select between 2 options: Online (2a) or Classroom (2b). And you must also complete the 90-min Parent-Teen course as well.\n\n**For more details, 90-min PT course dates, and registration, visit:**\nhttps://aadrivingacademy.net/drivers-education-classroom-for-teens-virginia.html"
                },
                {
                    question: "Option 3: 7 Hours Behind the Wheel",
                    answer: "(If you failed the DMV Road Test 3 times)\nIf you have failed the DMV road test three (3) times, you must take the behind-the-wheel component of driver’s education. This consists of seven (7) 50-minute periods of in-car driving instruction."
                }
            ]
        },
        {
            title: "Course Info",
            questions: [
                {
                    question: "What to Expect from the Re-Examination Course?",
                    answer: "The Re-Examination course is NOT a traditional lecture-style classroom. An available member of staff may guide and assist students with questions, but no dedicated staff members will lecture for 8 hours.\n\nShould anyone have any learning disabilities/differences or language concerns, please contact our office before completing registration.\n\n- Classes held in Herndon only (see schedule below)\n- Register & start right away (course held multiple days a week, rolling enrollment) (see schedule below or registration form)\n- Flexible weekday morning, weekday evening & weekend schedule, allows you to maximize hours and complete the course in an accelerated format\n- Driver’s Manual Course can be done in 1 day!\n- We supply all class materials\n- Upon successful completion of the course, we will issue the Re-Examination Certificate (DTS-C) the same day."
                }
            ]
        },
        {
            title: "Final Step/Going Back to DMV",
            questions: [
                {
                    question: "What happens after completing the course?",
                    answer: "Upon receipt of the Reexamination Certificate (DTS-C), you may IMMEDIATELY return back to the DMV and take the examination a fourth time.\n\n- You will not be restricted on the number of attempts and will now have **UNLIMITED retakes** of the exam (knowledge or behind-the-wheel examination) until you pass.\n- ⭐ If you do not pass your DMV exam after taking our course, you can come back to us and repeat some hours for extra help, at **NO additional charge!**\n- ⭐ Our main goal is to help prepare you to **pass your exam at the DMV!**"
                }
            ]
        },
        {
            title: "Course Fee $",
            questions: [
                {
                    question: "**Re-Examination Course Options and Fees**",
                    answer: "**Option 1:** 8-Hours Driver’s Manual/Re-Examination Course  \n(For Adults age 18 or over OR Teens Under age 18 who have completed 30hrs Drivers Ed)  \n**$199**  \n\n**Option 2a:** 30-Hours Online Driver’s Education + 90-min Parent/Teen Course  \n(For Teens Under age 18 who have NOT completed 30hrs Drivers Ed)  \n**$200**  \n\n**If selecting this option, for more course details, 90-min PT course dates, Final Test info, go directly to this page and fill out the Registration form here:**  \n[Online Driver’s Education Registration](https://aadrivingacademy.net/online-drivers-education-training-virginia.html)  \n\n**Option 2b:** 30-Hours Classroom Driver’s Education + 90-min Parent/Teen Course  \n(For Teens Under age 18 who have NOT completed 30hrs Drivers Ed)  \n**$265**  \n\n**If selecting this option, for more course details, 90-min PT course dates, go directly to this page and fill out the Registration form here:**  \n[Classroom Driver’s Education Registration](https://aadrivingacademy.net/drivers-education-classroom-for-teens-virginia.html)  \n\n**Option 3:** 7-Hours Behind the Wheel  \n(If you failed the DMV Road Test 3 times)  \n**$325**"
                }
            ]
        }
    ];
    
    
    
    


    const faqData2 = [
        {
            title: "Extra Information Regarding Our Instructors",
            questions: [
                {
                    question: "DMV-certified instructors",
                    answer: "Some of our instructors are active and retired police officers with numerous years of extensive training and experience in traffic law enforcement, emergency driving methods, collision investigation, and traffic court proceedings.\n\nAll of our instructors have many years of driving instruction experience, are given professional training, and are educated college graduates. They have also received specialized collegiate level training in Driver’s Education.\n\nIn addition, all are licensed as Driver Training Instructors by the Virginia Department of Motor Vehicles (DMV) and certified by American Automobile Association (AAA) and National Safety Council (NSC).\n\n1-Stop-Driving-School-of-Virginia\n\nAll of our instructors get their fingerprints done every year and are subject to annual national Federal Bureau of Investigations (FBI) background checks and DMV driving record audits."
                }
            ]
        },
        {
            title: "Extra Information Regarding Our School",
            questions: [
                {
                    question: "Our school is fully licensed, certified, insured, and bonded.",
                    answer: "Since opening its doors in 1994, AA Driving Academy has had one goal: to 'teach you safe, responsible, and accountable driving.'\n\nTo date, our driving school is responsible for training, licensing, and improving the driving of 80,000 student drivers that have graduated from our academy."
                }
            ]
        },
        {
            title: "What To Provide at Your 1st Appointment",
            questions: [
                {
                    question: "On the day of the class, there is NO NEED TO ARRIVE 15 MINUTES EARLY TO REGISTER!",
                    answer: "JUST SHOW UP AT CLASS START TIME and DO NOT ARRIVE LATE!\nWhen you arrive at the location, let the staff member know that you are there for the Driver’s Manual Reexamination Course.\nWe will need the following items from you:\n\nPRINTED OUT Confirmation Page (Pre-Registration Form)\nShowing us the email on your phone is NOT sufficient; we need to physically collect this.\n\nPRINTED OUT Paypal payment receipt (if paying with debit/credit card)\nShowing us the email on your phone is NOT sufficient; we need to physically collect this.\n\nOr cash or money order; absolutely NO CHECKS allowed!\n\nCOMPLETED and SIGNED school contract (must be signed by student and parent/guardian) Click Here for Student Contract\n\nDMV-issued ID card or federal ID card or passport or birth certificate\nNo Valid ID = No Certificate Issued\n\nIf you are under 18 and wish to take the 8 hr Driver’s Manual Reexamination Course, you must provide the original certificate of completion (DEC-1) of driver’s education course (classroom or online)\n\nUsually, a pink card that looks like this"
                }
            ]
        },
        {
            title: "DMV Links and Resources",
            questions: [
                {
                    question: "Driver Training for Three Exam Failures",
                    answer: "https://www.dmv.virginia.gov/drivers/#three_exam_failures.asp"
                }
            ]
        }
    ];
    
    





  
  
  
  



return <div>



<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://aadrivingacademy.net/wp-content/uploads/2021/11/re-exam-course-2400-scaled.jpg')"
  }}
>
  <div className="text-center px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-28 text-white">
    8HR Drivers Manual/Reexamination
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-8 text-white">
    Course (3 Exam Fail at the DMV)
    </h1>
  </div>
</div>

<div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 p-6 lg:p-10">
  <div className="max-w-full lg:w-[750px] mt-5 h-auto p-4">
  <div className="flex flex-col lg:flex-col xl:flex-row gap-3 text-left lg:text-left xl:text-left">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9c261f]">
  Check
  </h1>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002243]">
  Out Our
  </h1>
</div>


    <h1 className="text-2xl sm:text-4xl font-bold mt-5 text-[rgb(14,81,143)]">
    Driver’s Manual/Reexamination
    </h1>
    <h1 className="text-2xl sm:text-4xl font-bold mt-2 text-[rgb(14,81,143)]">
    Course (Failed 3 times at DMV)
    </h1>
    <p className="text-base sm:text-lg mt-5">
    * Offered multiple times a week at two convenient locations in Northern Virginia
    </p>
    <p className="text-base sm:text-lg mt-2">
  * Issued the Reexamination Certificate (DTS-C) same day; return back to DMV
    </p>
    <div className="flex flex-wrap mt-3 justify-start gap-5">
  
  <img
    src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
    className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain"
    alt="1 Stop Driving School of Virginia"
  />
      <p style={{width:"479px",fontWeight:"700"}} className="text-base sm:text-lg mt-2">
      Driver's license applicants, who fail the knowledge exam OR road skills test three (3) times at the DMV, must successfully complete the applicable knowledge OR in-vehicle component of a driver education course before they can take the examination a fourth time at DMV.
</p>
</div>
  
    <p style={{fontWeight:"700"}} className="text-base sm:text-lg mt-8">
    You must obtain the certificate of completion to return to DMV for testing, regardless of age. For minors, this requirement is NOT removed by reaching 18 years of age. This course is mandatory for those who have failed three times and still wish to obtain a learner’s permit/driver’s license in Virginia.
    </p>
 
  </div>
  
  <div className="bg-[#002243] max-w-full lg:w-[650px] h-auto p-6 flex justify-center items-center">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl text-white mt-10 font-bold">**Be Sure To Watch</h1>
      <h1 className="text-3xl sm:text-4xl text-white font-bold">the Video!**</h1>
      <video className="w-full sm:w-[525px] mt-6 mb-14 " controls src="/Drivers Manual-Re-Examination Course (Failed 3 times at DMV).mp4"></video>
    </div>
  </div>
</div>

<div className="flex flex-col xl:flex-row items-center gap-10 p-6 md:p-14 text-center lg:text-left">
  {faqData.map((faq, index) => (
    <div key={index} className="w-auto max-w-lg mt-0 md:max-w-auto lg:max-w-7xl">
      <div onClick={() => setIsOpen(index)} className="cursor-pointer">
        <div className="flex justify-between items-center text-black px-3 py-2">
          <h1
            style={{ width: index === 0 ? "280px" : "224px" }}
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
                    : index2 === 3 ? "150px" 
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




<div className="flex justify-center mt-5 mb-5 px-4">
  <div className="max-w-4xl text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e518f]">
      Driver’s Manual/Reexamination Course Hours
    </h1>
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e518f] mt-5">
      (April 1st, 2023 onwards)
    </h1>
    <p className="text-base sm:text-lg mt-6">
      **Due to the current situation, the schedule can change.**
    </p>
    <p className="text-base sm:text-lg mt-1">
      Please contact our office the day before your intended class date to confirm**
    </p>
  </div>
</div>


<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
  <div className="overflow-x-auto">
    <div className="w-full max-w-[95%] sm:max-w-full mx-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#002243] text-white text-xs sm:text-sm md:text-base">
            <th className="p-2">LOCATION</th>
            <th className="p-2">MONDAY</th>
            <th className="p-2">TUESDAY</th>
            <th className="p-2">WEDNESDAY</th>
            <th className="p-2">THURSDAY</th>
            <th className="p-2">FRIDAY</th>
            <th className="p-2">SATURDAY</th>
            <th className="p-2">SUNDAY</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-xs sm:text-sm md:text-base">
            <td className="p-2 font-bold">
              Herndon Office <br />
              <span className="text-red-600 font-semibold">1043 Sterling Rd</span> <br />
              <span className="text-red-600 font-semibold">#101 Herndon, VA</span> <br />
              <span className="text-red-600 font-semibold">20170</span>
            </td>
            <td className="p-2">
              <span className="font-bold">8-hr Session:</span> <br />
              9:30 am - 5:45 pm
            </td>
            <td className="p-2">
              <span className="font-bold">8-hr Session:</span> <br />
              9:30 am - 5:45 pm <br />
              <span className="font-bold">4-hr Sessions:</span> <br />
              4:00 - 7:45 pm
            </td>
            <td className="p-2">
              <span className="font-bold">8-hr Session:</span> <br />
              9:30 am - 5:45 pm <br />
              <span className="font-bold">4-hr Sessions:</span> <br />
              4:00 - 7:45 pm
            </td>
            <td className="p-2">
              <span className="font-bold">8-hr Session:</span> <br />
              9:30 am - 5:45 pm
            </td>
            <td className="p-2">
              <span className="font-bold">8-hr Session:</span> <br />
              9:30 am - 5:45 pm
            </td>
            <td className="p-2">
              <span className="font-bold">8-hr Session:</span> <br />
              9:30 am - 5:45 pm <br />
              <span className="text-sm">(Every Other Sat.)</span>
            </td>
            <td className="p-2 font-bold">CLOSED</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>









<div className="bg-gray-100" >
<div className="flex justify-center pt-5 px-4">
  <div className="mt-8 text-center">
    <h1 style={{color:"#0e518f"}} className="font-bold text-4xl sm:text-4xl text-[#9c261f] mb-3">
    How To Register for Course
    </h1>
 
  </div>
</div>

<div className="flex flex-col md:flex-col lg:flex-col  xl:flex-row p-6 md:p-12 gap-7 justify-center">
  {/* Left Image */}
  <div className="w-full xl:w-full lg:w-auto flex justify-center">
    <img
      className="h-auto lg:h-[285px] w-full lg:w-[660px]"
      src="https://aadrivingacademy.net/wp-content/uploads/2021/10/Road-2-Infographic.jpg"
      alt="Infographic"
    />
  </div>

  {/* Right Box */}
  <div style={{background:"#f3f4f6"}} className="w-full xl:w-full lg:w-auto flex items-center justify-center  md:h-auto">
    <div className="w-full xl:w-full lg:w-[620px] sm:h-auto lg:h-[284px] bg-white shadow-lg p-5">
      {/* Lock Icon and Button */}
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

      {/* Bottom Image */}
      <div className="flex justify-center">
        <img
          className="w-full max-w-[400px]"
          src="https://aadrivingacademy.net/wp-content/uploads/2022/11/Card-Pic-1.jpg"
          alt="Card"
        />
      </div>
    </div>
  </div>
</div>





<div>

<div className="flex justify-center px-4 mb-7 ">
  <div className="w-full max-w-[1217px]">
    <div
      className="flex justify-center p-2"
      style={{
        minHeight: "175px",
      
      }}
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-5 mt-8 justify-center items-center">
        <Link href={"/Registration"} className="bg-[#9c261f] text-white font-bold text-xl md:text-2xl px-8 md:px-10 py-3">
          CLICK HERE TO REGISTER
        </Link>
        </div>
        <div className="flex justify-center mt-7  ">
      <p style={{fontWeight:"700",width:"741px"}} className="text-center text-lg " >Note: Once you have filled out the registration form and paid for the course, you will receive a confirmation email and a separate email for your receipt. Please keep for your records and print them out in order to present to the instructor.</p>
        </div>
      </div>
    </div>
  </div>
</div>


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




