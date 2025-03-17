"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom(){


    const [isOpen, setIsOpen] = useState(false);
  
    const faqData = [
      {
          title: "Course Information (MUST READ!)",
          questions: [
              {
                  question: "***IT IS EXTREMELY IMPORTANT THAT YOU READ & UNDERSTAND THESE 6 (SIX) POINTS BELOW!!***",
                  answer: "If you are not technically proficient OR comfortable using a computer to do an online course OR learn better in a classroom setting with a live instructor OR have a CDL, then please instead take the 8hr DIP course in our popular classroom setting! It is offered multiple times a week, at our many convenient Northern Virginia locations! TO VIEW SCHEDULE AND COMPLETE REGISTRATION, GO HERE: https://aadrivingacademy.net/drivers-improvement-program-virginia.html\n\n" +
                      "For the Online course, you must Register with AA Driving Academy FIRST – then you will register AGAIN with our affiliate vendor. The link will be sent to you after you have completed our registration process. We realize this is an extra step, however, it is necessary to ensure we have correct information so that we may issue you an accurate certificate of completion AND accurately report your course completion online to the VA DMV, thus reflecting on your VA driving record. Don’t worry, you will only pay once!\n\n" +
                      "**Your ‘Reason Code’ MUST be correct**\n" +
                      "If you enter the wrong reason code, it CANNOT be fixed at a later date. The VA DMV absolutely will NOT allow ANYONE to change this code! If you enter the wrong code, you may need to take the class again! It is YOUR responsibility to register correctly.\n\n" +
                      "If you received a letter with the VA DMV letterhead (logo at the top of the letter, Richmond address), then your ‘Reason Code’ should be (DMV) – NOT COURT ORDERED.\n\n" +
                      "If you are taking the course to get five (5) good points or at the request of a lawyer, prior to a court date, your reason code is Voluntary (VOL) – NOT COURT ORDERED.\n\n" +
                      "Only if you or your lawyer went to a court hearing and you were legally ordered by a judge or prosecutor to take this course in order to have your ticket dismissed or lowered, then your reason code should be COURT ORDERED (COU).\n\n" +
                      "You do NOT receive 5 good points if you choose the Insurance (INS) reason code.\n\n" +
                      "**There is NOTHING automatic about receiving the certificate of course completion**\n" +
                      "Once you have successfully completed the 8hr course and passed the final test, you do NOT instantly receive a certificate of completion! Please be patient.\n\n" +
                      "Depending on when you complete the course (day & time), please normally allow one (1) business day (Monday – Friday) to receive your certificate of completion via email.\n\n" +
                      "Do NOT wait until the last minute! Complete the course EARLY!\n\n" +
                      "If you finish the course Friday at 6 pm or Saturday at 1 pm, you will NOT get your certificate until Monday. Even if you have an appt. at the DMV or traffic court.\n\n" +
                      "**There is NOTHING automatic about reporting course completion to the VA DMV**\n" +
                      "Once you have successfully completed the 8hr course and passed the final test, your information is NOT instantly or automatically sent to the VA DMV! Please be patient.\n\n" +
                      "Depending on when you complete the course (day & time), please normally allow up to two (2) business days (Monday – Friday) for your information to be submitted online with VA DMV.\n\n" +
                      "Do NOT wait until the last minute! Complete the course EARLY!\n\n" +
                      "If you have a DMV deadline of 05/10/2021, completing the course at 11:50pm on 5/9/2021 will NOT meet the deadline and your license will be suspended. You will have needed to complete the program two (2) BUSINESS days before the 10th.\n\n" +
                      "VA DMV is NOT made aware of your completion until it is fully processed by our office – DMV is not set up for automatic notifications of any kind. It is a manual process.\n\n" +
                      "**AA Driving Academy does NOT communicate with courts or insurance companies**\n" +
                      "We will ONLY let the VA DMV know that you have completed the course. Any other institution that may require notification of your course completion will be 100% your SOLE responsibility.\n\n" +
                      "You will receive a certificate via email, that you can save or print, as your proof of course completion. From there YOU may send to your lawyer or take to traffic court or give to your insurance company. This part is entirely on you."
              }
          ]
      },
      {
          title: "Course Benefits",
          questions: [
              {
                  question: "Certificate of completion can help you:",
                  answer: "Earn five (5) good points on your Driving Record"
              },
              {
                  question: "",
                  answer: "Prevent license suspension or reinstate license with DMV"
              },
              {
                  question: "",
                  answer: "Get a ticket DISMISSED or REDUCED in traffic court"
              },
              {
                  question: "",
                  answer: "Reduce auto insurance premium"
              },
              {
                  question: "",
                  answer: "Improved knowledge of practical & effective defensive driving techniques"
              },
              {
                  question: "",
                  answer: "Traffic court preparation, tips & guidance provided"
              }
          ]
      },
      {
          title: "Online DIP Course Fee $",
          questions: [
              {
                  question: "Registration Fee: $80",
                  answer: "You MUST pay the fee ONLINE before starting the course\n\n" +
                          "After submitting your registration and paying the $80 fee, you will receive another email that will have the link to the course. Please register again on that site to start the course."
              }
          ]
      },
      {
          title: "Extra DMV Resources",
          questions: [
              {
                  question: "Driver Improvement Program",
                  answer: "https://www.dmv.virginia.gov/drivers/#points.asp"
              }
          ]
      }
  ];
  
  
  
  
  



return <div>



<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('http://aadrivingacademy.net/wp-content/uploads/2021/11/online-dip-course-2400-scaled.jpg')"
  }}
>
  <div className="text-center px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-28 text-white">
      ONLINE COURSE
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-4xl mt-2 sm:mt-8 text-white">
    Online 8-Hour Driver Improvement Program (DIP)
    </h1>
  </div>
</div>

<div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 p-6 lg:p-14">
  <div className="max-w-full lg:w-[650px] h-auto p-4">
    <div className="flex gap-3">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#9c261f]">Learn More About Our</h1>
   
    </div>
    <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-[rgb(14,81,143)]">
    Driving Academy’s
    </h1>
    <h1 className="text-2xl sm:text-4xl font-bold mt-2 text-[rgb(14,81,143)]">
      Program (DIP) Classroom
    </h1>
    <p className="text-base sm:text-lg mt-5">
      * Earn 5 good points on your driving record
    </p>
    <p className="text-base sm:text-lg mt-2">
    *Complete the entire course from home, 100% online!
    </p>
    <div className="flex flex-wrap mt-3 justify-start gap-5">
  
      <img
        src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
        className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain"
        alt="1 Stop Driving School of Virginia"
      />
          <p style={{width:"382px",fontWeight:"700"}} className="text-base sm:text-lg mt-2">
          The 8-Hour Online Driver Improvement Program is licensed by the Virginia DMV and is now open to all ages. Those taking the online course are now able to take the final examination at home as well, thus making it 100% online.
    </p>
    </div>
    <p style={{fontWeight:"700"}} className="text-base sm:text-lg mt-5">
    *Those with a CDL (Commercial Driver’s License) MUST still take the class in person ONLY.
    </p>
    <p style={{fontWeight:"700"}} className="text-base sm:text-lg mt-3">
    Please be aware that completion of the online program is not instantly processed. We are still required to notify DMV electronically that you have taken and passed the course. DMV is not set up for automatic notifications. This process takes at least 2 business days. This means that if you have a DMV deadline of 5/10/2021, completing the course at 11:50 pm on 5/9/2021 will NOT meet the deadline, and your license will be suspended. This is why DMV gives you 3 months to complete the course.
    </p>
    <p style={{fontWeight:"700"}} className="text-base sm:text-lg mt-3">
    When you have completed the program and it has been fully processed, you will receive a certificate of completion via email, and we will notify DMV of your class completion. We do not notify courts or insurance companies under any circumstance. This is your responsibility.
    </p>
  </div>
  
  <div className="bg-[#002243] max-w-full lg:w-[650px] h-auto p-6 flex justify-center items-center">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl text-white font-bold">**Be Sure To Watch</h1>
      <h1 className="text-3xl sm:text-4xl text-white font-bold">the Video!**</h1>
      <video className="w-full sm:w-[525px] mt-6" controls src="/Driver Improvement Program (DIP).mp4"></video>
    </div>
  </div>
</div>

<div>
<div className="flex flex-col xl:flex-row items-center gap-3 p-6 md:p-14 text-center lg:text-left">
  {faqData.map((faq, index) => (
    <div key={index} className="w-full max-w-lg mt-16 md:max-w-xl lg:max-w-7xl">
      <div onClick={() => setIsOpen(index)} className="cursor-pointer">
        <div className="flex justify-between items-center text-black px-3 py-2">
          <h1
            style={{ width: index === 0 ? "380px" : "224px" }} // First title ki width 380px, baqi 214px
            className="text-lg text-center md:text-xl font-medium border-b-4 border-red-600 pb-2"
          >
            {faq.title}
          </h1>
        </div>
      </div>

      {/* Modal */}
      {isOpen === index && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto relative text-center md:text-center lg:text-left">
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

</div>




<div >


<img src="https://aadrivingacademy.net/wp-content/uploads/2021/11/Numbered-Online-DIP-Steps.jpg" ></img>





<div>

<div className="flex justify-center px-4">
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
        <div className="flex justify-center mt-4">
          <img
            src="https://aadrivingacademy.net/wp-content/uploads/2022/11/Card-Pic-1.jpg"
            className="w-full max-w-[250px] h-auto"
            alt="Card"
          />
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




