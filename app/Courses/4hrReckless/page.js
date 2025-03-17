"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom(){


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const faqData = [
      {
          title: "The Dangers of a Reckless Driving Ticket",
          questions: [
              {
                  question: "Did you receive a reckless driving ticket in Virginia?",
                  answer: "In Virginia, reckless driving is a class 1 misdemeanor (similar to a DWI or assault and battery conviction) and carries several possible punishments, penalties, and serious long-term consequences.\n\nVirginia traffic laws are among some of the most severe traffic laws in the country.\n\nFirst off, once charged with a reckless driving ticket, you cannot pre-pay the ticket. It is mandatory that either you or an attorney (on your behalf) appear in traffic court.\n\nFailure to appear in court can result in the judge issuing a warrant for your arrest.\nSo DO NOT miss your court date!\n\nSecondly, if convicted in court, the MAXIMUM penalties for a reckless driving conviction in Virginia are as follows:\n\nSix (6) demerit points offense that stays on your VA driving record for eleven (11) years\nPotential jail sentence of up to twelve (12) months\nDriver’s license suspension up to six (6) months\nPotential fine up to $2,500\nAuto insurance premium increase for three years\nSecurity clearance problems\nLoss of job, putting your career on the line\nPermanent criminal record (Class 1 misdemeanor)"
              }
          ]
      },
      {
          title: "Our Recommendation",
          questions: [
              {
                  question: "We cannot stress this enough, but we STRONGLY recommend that you complete a 4-hour Reckless/Aggressive Driver Course course, PRIOR to court, for any of the following tickets:",
                  answer: "Reckless Driving\nAggressive Driving\nDWI/DUI\nPossession\nDriving on a Suspended License\nPersons charged with reckless driving tickets (or driving violations that contribute to aggressive/road rage behaviors) may enroll prior to their court date or as referred by their attorney or as ordered by the Court, in a 12-hour education program (8-hour DIP Course and 4-hour Reckless Course).\n\nThe 8-hour DIP class is a preferred pre-requisite for the 4-hour Reckless/Aggressive Driver Course. It is not required to be completed first but recommended to be done in that order."
              }
          ]
      },
      {
          title: "Course Benefits",
          questions: [
              {
                  question: "The 4-hour \"Reckless/Aggressive Driver Course\" addresses the many causes of reckless driving, the psychological aspects of aggressive driving, teaches methods to avoid situations that encourage dangerous driving behavior, and gives tools that help us implement the skills we learn in the driver improvement program. The participant will learn skills that can be used in everyday driving situations to safely negotiate the crowded roadways.",
                  answer: "Traffic court preparation, coaching, tips, and guidance provided\nThe course is commonly ordered by judges throughout Virginia. In fact, half the students are referred by their experienced attorneys to attend prior to court\nCertificate of completion can help you:\nIncrease your chances of ticket reduction in traffic court\nPossibly prevent license suspension or get restricted license in traffic court\nPossibly have auto insurance premium reduced"
              }
          ]
      },
      {
          title: "Course Information",
          questions: [
              {
                  question: "Taught at our Herndon, VA office.",
                  answer: "Course workbook and class supplies provided\nCourse is participation-based. There is no final test\nUpon meeting course requirements, students are issued a certificate of completion the same day.\nDO NOT lose or misplace your certificate. There is a $30 fee for re‑issuing certificates.\nIt will be your responsibility to present your certificate to your attorney/judge/court.\nIf you received a letter from your attorney or court, or have the police issued ticket, bring it along.\nThis class is not a Driver’s Improvement class, it does NOT give you good points on your driving record"
              }
          ]
      }
  ];


  const faqData2 = [
    {
        title: "Course Fee $",
        questions: [
            {
                question: "* Pre-Register Online: $95",
                answer: "View upcoming schedule below\nComplete the Pre-Registration Form online and make payment (if paying by debit/credit)\nCheck your email (your ‘SPAM/JUNK/BULK’ folders too)\nPRINT your Confirmation Page (PDF attachment sent via email)\nPresent to the instructor at the beginning of your class (or if selected, bring cash)\nShowing us the email/receipt on your phone is NOT sufficient! We need to collect it!\n\n* Walk-In Register: $110 (Walk-in registration the day of your class)\n\nOn the day of class, you can pay by cash or money order\nNO debit/credit card payments accepted in person\nAbsolutely NO CHECKS allowed!"
            }
        ]
    },
    {
        title: "Day of Class Instructions",
        questions: [
            {
                question: "On the day of the class, DO NOT ARRIVE EARLY TO REGISTER!",
                answer: "JUST SHOW UP AT CLASS START TIME and DO NOT ARRIVE LATE!\nWhen you arrive at the location, let the staff member know that you are there for the 4 hr Reckless/Aggressive Course\nAt the beginning of the class, the instructor will need two (2) things from you:\n\nPRINTED OUT Confirmation Page (Pre-Registration Form)\nShowing us the email on your phone is NOT sufficient; we need to physically collect this.\nIf you paid with card, it will show your payment on this page as well. If you chose CASH as your payment, please bring exact change or Money Order. NO CHECKS allowed!!\n\nDriver’s License or Learner’s Permit or DMV-issued ID card\nIf your license was taken away or lost, bring a valid photo ID and a DMV letter or driving record or receipt from DMV or the yellow ticket issued by the police officer.\nNo Valid ID = No Certificate Issued"
            }
        ]
    },
    {
        title: "Extra Information Regarding Our School",
        questions: [
            {
                question: "Since opening its doors in 1994, AA Driving Academy has had one goal: to 'teach you safe, responsible, and accountable driving.'",
                answer: "To date, our driving school is responsible for training, licensing, and improving the driving of 80,000 student drivers that have graduated from our academy.\n\nOur school is fully licensed, certified, insured, and bonded."
            }
        ]
    },
    {
        title: "Extra Legal Resources/Attorney Info",
        questions: [
            {
                question: "Legal resources and attorney information.",
                answer: "https://www.recklessdrivinglawyer.net/faq.html\nhttp://www.novalegalgroup.com/traffic-criminal-defense/reckless-driving/\nhttp://nicholsgreen.com/practice-areas/reckless-driving-in-virginia/how-to-beat-a-reckless-driving-by-speed-ticket/\nhttp://www.fairfaxrecklessdriving.com/#risk\nhttps://www.lawyeradvocate.com/practice_areas/fairfax-reckless-driving-defense-lawyer-dedicated-to-fairfax-county.cfm\nhttp://www.yoonfirm.com/reckless-driving/\nhttps://www.novadefenders.com/reckless-driving.html\n\nhttps://www.andrewflusche.com/services/virginia-reckless-driving-ticket-defense/\n\nhttp://www.harold-law.com\n\nhttps://parachafirm.com/traffic-violations/reckless-driving/"
            }
        ]
    }
];





  
  
  
  



return <div>



<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-center"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://aadrivingacademy.net/wp-content/uploads/2021/11/reckless-aggressive-2400-scaled.jpg')"
  }}
>
  <div className="text-center px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-28 text-white">
    4HR RECKLESS/AGGRESIVE
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-8 text-white">
    DRIVING COURSE
    </h1>
  </div>
</div>

<div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 p-6 lg:p-14">
  <div className="max-w-full lg:w-[750px] mt-5 h-auto p-4">
  <div className="flex flex-col lg:flex-col xl:flex-row gap-3 text-center lg:text-left xl:text-left">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9c261f]">
    Find Out
  </h1>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002243]">
    More About Our
  </h1>
</div>


    <h1 className="text-2xl sm:text-4xl font-bold mt-5 text-[rgb(14,81,143)]">
    4-Hour Reckless/Aggressive
    </h1>
    <h1 className="text-2xl sm:text-4xl font-bold mt-2 text-[rgb(14,81,143)]">
    Driver Course
    </h1>
    <p className="text-base sm:text-lg mt-5">
    * Provided at our Herndon, VA office.
    </p>
    <p className="text-base sm:text-lg mt-2">
    * Issued a certificate of completion same day
    </p>
  
    <p style={{fontWeight:"700"}} className="text-base sm:text-lg mt-5">
    If you receive a reckless driving ticket, it is STRONGLY recommended to complete this course prior to your court date, along with the 8-hour DIP Course!
    </p>
 
  </div>
  
  <div className="bg-[#002243] max-w-full lg:w-[650px] h-auto p-6 flex justify-center items-center">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl text-white mt-5 font-bold">**Be Sure To Watch</h1>
      <h1 className="text-3xl sm:text-4xl text-white font-bold">the Video!**</h1>
      <video className="w-full sm:w-[525px] mt-6 mb-5 " controls src="/Driver Improvement Program (DIP).mp4"></video>
    </div>
  </div>
</div>

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

<div className="flex flex-col xl:flex-row items-center gap-3 p-6 md:p-14 text-center lg:text-left">
  {faqData2.map((faq, index2) => (
    <div key={index2} className="w-full max-w-lg mt-16 md:max-w-xl lg:max-w-7xl">
      <div onClick={() => setIsOpen2(index2)} className="cursor-pointer">
        <div className="flex justify-between items-center text-black px-3 py-2">
        <h1
  style={{
    width: index2 === 0 ? "180px" 
          : index2 === 2 ? "369px" 
          : index2 === 3 ? "330px" 
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
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto relative text-center md:text-center lg:text-left">
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




