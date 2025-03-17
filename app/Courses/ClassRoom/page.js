"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom(){


    const [isOpen, setIsOpen] = useState(false);
  
    const faqData = [
      {
          title: "Course Information",
          questions: [
              {
                  question: "Additional Course Details",
                  answer: "Taught at 25 Northern Virginia locations; offered multiple times a week. View Upcoming DIP Class Schedule. Class available for CDL (Commercial Driver’s License) holders as well. Course workbook and supplies provided. Workbook available in Spanish. The Virginia DMV requires all courses to be a full eight (8) hours of instruction, not including breaks. Lunch break issued in class. At the end of the course, students take a multiple-choice test. Upon meeting course requirements, students are issued a certificate of completion the same day. DO NOT lose or misplace your certificate. There is a $30 fee for re‑issuing certificates. Within 24 hrs. of completing the course, we will electronically update your DMV record to reflect the course. We have direct access to the Virginia DMV online system."
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
          title: "DIP Course Fee $",
          questions: [
              {
                  question: "* Pre-Register Online: $95",
                  answer: "Check the DIP Calendar to view upcoming schedule"
              },
              {
                  question: "",
                  answer: "Complete the Pre-Registration Form online and make payment (if paying by debit/credit)"
              },
              {
                  question: "",
                  answer: "Check your email (your ‘SPAM/JUNK/BULK’ folders too)"
              },
              {
                  question: "",
                  answer: "PRINT OUT your Confirmation Page (PDF attachment)"
              },
              {
                  question: "",
                  answer: "Present to the instructor at the beginning of your class (or if selected, bring cash)"
              },
              {
                  question: "",
                  answer: "Showing us the email/receipt on your phone is NOT sufficient! We need to collect it!"
              },
              {
                  question: "* Walk-In Register: $110 (Walk-in registration the day of your class)",
                  answer: "On the day of class, you can pay by CASH or MONEY ORDER"
              },
              {
                  question: "",
                  answer: "NO Debit/Credit Card payments accepted in person"
              },
              {
                  question: "",
                  answer: "Absolutely NO CHECKS allowed!"
              }
          ]
      },
      {
          title: "Day of Class Instructions",
          questions: [
              {
                  question: "Important Instructions for the Day of Class",
                  answer: "On the day of the class, DO NOT ARRIVE EARLY TO REGISTER! JUST SHOW UP AT CLASS START TIME and DO NOT ARRIVE LATE! When you arrive at the location, ask the front desk attendant where the drivers’ classroom is. At the beginning of the class, the instructor will need three (3) things from you:"
              },
              {
                  question: "PRINTED OUT Confirmation Page (Pre-Registration Form)",
                  answer: "Showing us the email on your phone is NOT sufficient; we need to physically collect this. If you paid with card, it will show your payment on this page as well. If you chose CASH as your payment, please bring exact change or Money Order. NO CHECKS allowed!!"
              },
              {
                  question: "Driver’s License or Learner’s Permit or DMV-issued ID card",
                  answer: "If your license was taken away or lost, bring a valid photo ID and a DMV letter or driving record or receipt from DMV or the yellow ticket issued by the police officer. If you received a letter from the DMV instructing you to complete this course, bring it along. No Valid ID = No Certificate Issued."
              }
          ]
      },
      {
          title: "Extra DMV Resources",
          questions: [
              {
                  question: "Driver Improvement Program",
                  answer: "https://www.dmv.virginia.gov/drivers/#points.asp"
              },
              {
                  question: "Reasons for Attending a Driver Improvement Course",
                  answer: "https://www.dmv.virginia.gov/drivers/#di_reason.asp"
              },
              {
                  question: "The Points System",
                  answer: "https://www.dmv.virginia.gov/drivers/#points_you.asp"
              },
              {
                  question: "Obtaining DMV Records/Driver Transcripts (Record Request)",
                  answer: "https://www.dmv.virginia.gov/general/#records/index.asp"
              }
          ]
      }
  ];
  
  
  



return <div>



<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-center"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://aadrivingacademy.net/wp-content/uploads/2021/11/drivers-improvement-program-2400-scaled.jpg')"
  }}
>
  <div className="text-center px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-28 text-white">
      CLASSROOM COURSE
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-4xl mt-2 sm:mt-8 text-white">
      8-Hour Driver Improvement Program (DIP) Classroom
    </h1>
  </div>
</div>

<div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 p-6 lg:p-14">
  <div className="max-w-full lg:w-[650px] h-auto p-4">
    <div className="flex gap-3">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#9c261f]">Enroll</h1>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#002243]"> in Our</h1>
    </div>
    <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-[rgb(14,81,143)]">
      8-Hour Driver Improvement
    </h1>
    <h1 className="text-2xl sm:text-4xl font-bold mt-2 text-[rgb(14,81,143)]">
      Program (DIP) Classroom
    </h1>
    <p className="text-base sm:text-lg mt-5">
      * Earn 5 good points on your driving record
    </p>
    <p className="text-base sm:text-lg mt-2">
      * Taught at 25 Northern Virginia locations; offered multiple times a week
    </p>
    <div className="flex flex-wrap mt-3 justify-start gap-2">
      <img
        src="https://aadrivingacademy.net/wp-content/uploads/2022/01/National_Safety_Council.svg.png"
        className="w-[80px] sm:w-[90px] h-[80px] sm:h-[90px] mt-4 object-contain"
        alt="National Safety Council"
      />
      <img
        src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
        className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain"
        alt="1 Stop Driving School of Virginia"
      />
    </div>
    <p className="text-base sm:text-lg mt-5">
      The 8-hour Driver Improvement Program (DIP) is licensed by the Virginia DMV, and the curriculum is the National Safety Council (NSC) Defensive Driving Course.
    </p>
    <p className="text-base sm:text-lg mt-3">
      Our expert instructors discuss a wide variety of subjects, including defensive driving techniques, distracted driving, aggressive driving, traffic rules, and DMV guidelines.
    </p>
    <p className="text-base sm:text-lg mt-3">
      Driver improvement courses do not have to be boring but rather enjoyable and informative at the same time.
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
            <h1 style={{ width: "214px" }} className="text-lg text-center md:text-xl font-medium border-b-4 border-red-600 pb-2">
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
<div className="flex justify-center px-4">
  <div className="w-full max-w-[1217px]">
    <div
      className="flex justify-center p-2"
      style={{
        minHeight: "175px",
        background: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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




