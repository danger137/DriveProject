"use client";
import { useState } from "react";
import "./Dumfries.css";
import Head from "next/head";



export default function Herndon(){


  const [isOpen, setIsOpen] = useState(false);

  const faqData = [
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
                question: "*Pre-Register Online: $95 ",
                answer: "Check the DIP Calendar to view upcoming schedule"
            },
            {
                question: "",
                answer: "Complete the Pre-Registration Form online & make payment (if paying by Debit/Credit/PayPal)"
            },
            {
                question: "",
                answer: "Check your email (your ‘SPAM/JUNK/BULK’ folders too) "
            },
            {
                question: "",
                answer: "PRINT OUT BOTH your Confirmation Page (PDF attachment) & PayPal payment receipt"
            },
            {
                question: "",
                answer: "Present BOTH to the instructor at the beginning of your class "
            },
            {
                question: "",
                answer: "Showing us the email/receipt on your phone is NOT sufficient! We need to collect these! "
            },
            {
                question: "* Walk-In Register: $110 (Walk in registration the day of your class)",
                answer: "On the day of class, you can pay by CASH or MONEY ORDER"
            },
            {
                question: "",
                answer: "NO Debit/Credit Card payments accepted in person"
            },
            {
                question: "",
                answer: "Absolutely NO CHECKS allowed!"
            },
            {
                question: "",
                answer: "Absolutely NO REFUNDS!"
            }
        ]
    },
    {
        title: "Course Information",
        questions: [
        
            {
                question: "Additional Course Details",
                answer: "Taught at 25 Northern Virginia locations; Offered multiple times a week. View Upcoming DIP Class Schedule. Class available for CDL (Commercial Drivers License) holders as well. Course workbook & supplies provided. Workbook available in Spanish. The Virginia DMV requires all courses be a full eight (8) hours of instruction, not including breaks. Lunch break issued in class. At the end of the course, students take a multiple-choice test. Upon meeting course requirements, students are issued a certificate of completion same day. DO NOT lose or misplace your certificate. There is a $30 fee for re-issuing certificates. Within 24hrs of completing the course, we will electronically update your DMV record to reflect the course. We have direct access with the Virginia DMV online system."
            }
        ]
    },
    {
        title: "Day of Class Instructions",
        questions: [
            {
                question: "Important Instructions for the Day of Class",
                answer: "On the day of the class, DO NOT ARRIVE EARLY TO REGISTER!! JUST SHOW UP AT CLASS START TIME AND DO NOT ARRIVE LATE!! When you arrive at the location, ask the front desk attendant where the drivers classroom is. At the beginning of the class, the Instructor will need three (3) things from you: PRINTED OUT Confirmation Page (Pre-Registration Form). Showing us the email on your phone is NOT sufficient; We need to physically collect this. PRINTED OUT PayPal payment receipt (if paying with Debit/Credit Card). Showing us the email on your phone is NOT sufficient; We need to physically collect this. Or Cash or Money Order; Absolutely NO CHECKS allowed! Drivers License or Learners Permit or DMV issued ID card. If your license was taken away or lost, bring a valid Photo ID and a DMV letter or Driving Record or Receipt from DMV or the yellow ticket issued by the police officer. If you received a letter from the DMV instructing you to complete this course, bring it along. NO VALID ID = NO CERTIFICATE ISSUED."
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

<Head>
        <title>YSSR EDUCATION Improvement Program in  Dumfries,  Dumfries | YSSR EDUCATION Academy</title>
        <meta name="description" content="Join our DMV-approved YSSR EDUCATION Improvement Program (DIP) in   Dumfries, Virginia. Earn 5 safe YSSR EDUCATION points, reduce insurance rates, and dismiss traffic tickets." />
        <meta name="keywords" content="YSSR EDUCATION improvement program, DMV points, traffic school, defensive YSSR EDUCATION course,   Dumfries Virginia" />
        <meta name="author" content="YSSR EDUCATION Academy" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    



<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[450px] bg-cover bg-top"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2021/11/drivers-ed-class-2400-scaled.jpg')" }}
>
  <div className="relative text-center mt-24 sm:mt-28 md:mt-16 lg:mt-24 px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-20 text-white">
    Drivers Improvement
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-5 text-white">
    Program (DIP) ONLY in
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-5 text-white">
    Dumfries, Virginia
    </h1>
  </div>
</div>


<div style={{ position: "relative", width: "100%", height: "270px" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.8283339255855!2d-77.326917!3d38.5831507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6f906ab2e67bf%3A0x9d93919fbb701585!2s16959%20Old%20Stage%20Rd%2C%20Montclair%2C%20VA%2022025%2C%20USA!5e0!3m2!1sen!2sus!4v1611139899651!5m2!1sen!2sus"
    width="100%"
    height="270px"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Google Map"
  ></iframe>
  <a
    href="https://www.google.com/maps/place/16959+Old+Stage+Rd,+Montclair,+VA+22025,+USA/@38.583151,-77.326917,16z/data=!4m6!3m5!1s0x89b6f906ab2e67bf:0x9d93919fbb701585!8m2!3d38.5831507!4d-77.3269169!16s%2Fg%2F11b8v5fvxr?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
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



<div className="flex flex-wrap mt-10 justify-center gap-2 ml-0 lg:ml-0 xl:ml-24">
  <img
    src="https://aadrivingacademy.net/wp-content/uploads/2022/01/National_Safety_Council.svg.png"
    className="w-[110px] h-[110px] mt-4 object-contain"
    alt="National Safety Council"
  />
  <img
    src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
    className="w-[140px] h-[140px] object-contain"
    alt="1 Stop Driving School of Virginia"
  />
</div>







<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-6 lg:p-12 custom-1025 custom-545">
  {/* Image Section */}
  <div className="w-full lg:w-auto lg:mr-10">
    <div className="flex flex-wrap justify-center gap-3">
      <img className="w-full sm:w-[620px] h-auto sm:h-[430px]" src="https://aadrivingacademy.net/wp-content/uploads/2022/01/Hampton-Inn-DUMFRIES.jpg" />
     
    </div>
   
   
  </div>

  {/* Info Section */}
  <div className="w-full lg:w-auto mt-6 lg:mt-0 lg:mr-36 text-center lg:text-left">
    <div className="p-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0e518f]">YSSR EDUCATION</h1>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0e518f] mt-3">Academy Dumfries</h1>
      <h1 className="text-xl sm:text-2xl font-extrabold text-[#0e518f] mt-2">(DIP only)</h1>
      <p className="text-lg mt-3">Hampton Inn</p>
      <p className="text-lg mt-1">16959 Old Stage Road</p>
      <p className="text-lg mt-1">Dumfries, VA 22025</p>
      <p className="text-lg mt-1">ONLY SELECT DATES AVAILABLE - SEE SCHEDULE</p>
      <button className="px-6 py-2 sm:px-8 sm:py-3 bg-red-700 text-white font-bold mt-6 sm:mt-7 hover:bg-red-800 transition">
        View Upcoming DIP Class Schedule
      </button>
    </div>
  </div>
</div>

<div className="flex justify-center px-4">
  <div className="w-full max-w-[1129px] text-center lg:text-left lg:mr-28 ">
    <p className="text-base md:text-lg mt-5">
    The 8hour Driver Improvement Program (DIP) is licensed by the Virginia DMV and the curriculum is the National Safety Council (NSC) Defensive Driving Course, which created the first defensive driving course in 1964 and has been the leader in driver safety training ever since.
    </p>
    <p className="text-base md:text-lg mt-5">
      Our expert instructors discuss a wide variety of subjects, including effective defensive driving techniques, distracted driving, impaired driving, aggressive driving, traffic rules, police law enforcement, traffic court preparation & tips, and DMV guidelines. All of our instructors have many years of driving instruction experience and some of our instructors have numerous years of law enforcement/police officer experience.
    </p>
    <p className="text-base md:text-lg mt-5">
      Driver Improvement courses do not have to be boring, but rather enjoyable and informative at the same time. Whether you are a beginner or seasoned driver, you will find our DIP class to be educational and eye-opening.
    </p>
  </div>
</div>

<div className="w-full mt-16 flex justify-center">
 <img src="https://i.ytimg.com/vi/i2kXnR2DtpA/hqdefault.jpg" ></img>
</div>



<div className="flex flex-col items-center p-6 md:p-14 min-h-screen space-y-6 text-center md:text-center lg:text-left">
  {faqData.map((faq, index) => (
    <div key={index} className="w-full max-w-lg mt-16 md:max-w-xl lg:max-w-7xl">
      <div onClick={() => setIsOpen(index)} className="cursor-pointer">
        <div className="flex justify-between items-center bg-[#002243] text-white px-3 py-2">
          <h1 className="text-lg md:text-xl font-medium">{faq.title}</h1>
          <i className="fa-solid fa-plus text-lg"></i>
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

            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>

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



    <div className="flex justify-center mb-10 px-4 md:px-8">
  <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e518f]">
    HOW TO REGISTER FOR COURSE
  </h1>
</div>

<div className="mt-10 flex justify-center">
  <img 
    src="https://aadrivingacademy.net/wp-content/uploads/2022/01/Road-2-Infographic-768x384.jpg" 
    className="max-w-full h-auto"
    alt="Infographic"
  />
</div>


<div className="mt-10" style={{ position: "relative", width: "100%", height: "270px" }}>
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


