"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom(){


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const faqData = [
      {
          title: "Part 1: You Must Complete the 30-Hour Driver’s Ed Course",
          questions: [
              {
                  question: "Online Driver’s Education (Remote/Self-Paced)",
                  answer: "30 hours as required by the State of VA DMV.\n\nStart any day; available online 24/7.\n\nDo as little or many hours as you like per day.\n\nOnce you complete the course and are prompted for the final exam, call our office to schedule a time to come in and take the final test. Be sure to call us 24 hrs. prior.\n\nFinal exam MUST be taken in Herndon office only.",
                  src:"https://aadrivingacademy.net/wp-content/uploads/2024/03/Final-Test-Hours.png"
              }
          ]
      },
      {
          title: "Part 2: You Must Complete 14 Periods of In‑Car Instruction",
          questions: [
              {
                  question: "What does this include?",
                  answer: "As required by the State of VA DMV, you must complete 14 periods of in‑car instruction.\n\n- There will be seven (7) appointments.\n- Each appointment is 1 hour and 40 minutes long.\n- 50 minutes of driving and 50 minutes of observation.\n- 7 x 50-min periods of driving (350-min total).\n- 7 x 50-min periods of observation (350-min total).\n- On the last (7th) session, our DMV-certified instructor will give you the DMV final road test. If you drive well, the instructor will pass you, thus making the student exempt from taking the final road test at a DMV center.\n\nThis program is **NOT** for brand-new drivers who have never driven before! In order to do this program, you **MUST** have twelve (12) hours of driving practice/experience.\n\nAnyone who has failed the road test at the DMV 3 times is **NOT** eligible for this class. That class is called the \"Road Test Reexamination course,\" which you can sign up for here."
              }
          ]
      },
      {
          title: "Final Step: Get Certificate and Go to DMV To Pick Up Your Driver’s License",
          questions: [
              {
                  question: "What happens after completing the program?",
                  answer: "Upon successful completion of the two (2) part **“Adult Waiver Program,”** we will issue a **Certificate of Completion - Adult Waiver (DTS-D).**\n\n- Take this certificate and present it to the DMV.\n- The DMV will **WAIVE** the required 60-day holding period of the learner's permit.\n- The DMV will **EXEMPT** you from taking the final road test there.\n- The DMV will **ISSUE** your permanent driver’s license."
              }
          ]
      },
      {
          title: "Course Fee $",
          questions: [
              {
                  question: "Adult License Waiver Program Pricing",
                  answer: "(Includes both parts: Drivers Ed & Behind the Wheel)\n\n**Part 1 ONLY (Online Drivers Education):** $179.00\n\n**Part 2 ONLY (Behind the Wheel) in Zone 1:** $419.00\n\n**Part 2 ONLY (Behind the Wheel) in Zone 2:** $399.00"
              }
          ]
      }
  ];
  
  
  
  
    
    
    
    


  const faqData2 = [
    {
        title: "Extra Information Regarding Our Vehicles",
        questions: [
            {
                question: "Our DMV-certified instructors give in-car instruction using DMV-approved vehicles",
                answer: "Our vehicles are modern, 4-door, automatic, and dual-controlled.\n\nClean, air-conditioned, automatic transmission, dual control vehicles.\n\nOur vehicles go through continuous and rigorous maintenance and safety inspections.\n\nOur vehicles have dual-equipped brakes, passenger-side rearview mirror, blind-spot mirrors, and are inspected annually by the DMV.\n\nOur vehicles hold vehicle inspection reports in compliance with Virginia state requirements to ensure you receive maximum safety."
            }
        ]
    },
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
                answer: "Since opening its doors in 1994, AA Driving Academy has had one goal: to 'teach you safe, responsible, and accountable driving.'\n\nTo date, our driving school is responsible for training, licensing, and improving the driving of 100,000 student drivers that have graduated from our academy."
            }
        ]
    },
    {
        title: "What To Provide at Your 1st Appointment",
        questions: [
            {
                question: "Required documents and payment",
                answer: "Completed and signed school contract (must be signed by student) Click Here for Student Contract.\n\nPhotocopy of Learner’s Permit issued by the DMV.\n\nRemaining balance payment (Checks can be made out to 'AA Driving Academy')."
            }
        ]
    },

];




    
    





  
  
  
  



return <div>



<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://aadrivingacademy.net/wp-content/uploads/2021/11/adult-waiver-program-2400-scaled.jpg')"
  }}
>
  <div className="text-center px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-6xl mt-14 sm:mt-28 text-white">
    ADULT LICENSE WAIVER *NEW*
    </h1>

  </div>
</div>

<div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 p-6 lg:p-10">
  <div className="max-w-full lg:w-[750px] mt-5 h-auto p-4">
  <div className="flex flex-col lg:flex-col xl:flex-row gap-3 text-left lg:text-left xl:text-left">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9c261f]">
  Explore
  </h1>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002243]">
   Our
  </h1>
</div>


    <h1 className="text-2xl sm:text-4xl font-bold mt-5 text-[rgb(14,81,143)]">
    Adult License Waiver Program
    </h1>
 
    <p className="text-base sm:text-lg mt-5">
    * For adults looking to WAIVE the DMV required 60 days holding period
    </p>
    <p className="text-base sm:text-lg mt-2">
    * For adults looking to BYPASS taking the final road test at a DMV location
    </p>
    <div className="flex flex-wrap mt-3 justify-start gap-5">
  
  <img
    src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
    className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain"
    alt="1 Stop Driving School of Virginia"
  />
      <p style={{width:"479px",fontWeight:"400"}} className="text-base sm:text-lg mt-2">
      This two (2) part program is for adults (ages 18 and over) that have a valid Learner’s Permit (issued by the Virginia DMV) who are looking to WAIVE the DMV required 60 days holding period AND also BYPASS taking the final road test at a DMV location!
</p>
</div>
  
    <p style={{fontWeight:"700"}} className="text-base sm:text-lg mt-8">
    This program is NOT for brand new drivers who have never driven before!
In order to do this program, you MUST have twelve (12) hours of driving practice/experience.
    </p>
    <p style={{fontWeight:"400"}} className="text-base sm:text-lg mt-3">
    If you have not and need to first learn driving, you can do private/individual lessons with an instructor. Then after that, you can do the ADULT WAIVER PROGRAM with an instructor.
    Anyone who has failed the road test at the DMV 3 times is NOT eligible for this class.
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

<div className="flex justify-start p-16 py-0 " >
  <h1 style={{color:"#0e518f"}} className="text-2xl font-bold " >This program has two (2) required parts:</h1>
</div>

<div className="flex flex-col xl:flex-row items-center gap-10 p-6 md:p-14 text-center lg:text-left">
  {faqData.map((faq, index) => (
    <div key={index} className="w-auto max-w-lg mt-0 md:max-w-auto lg:max-w-7xl">
      <div onClick={() => setIsOpen(index)} className="cursor-pointer">
        <div className="flex justify-between items-center text-black px-3 py-2">
          <h1
            style={{
              width: index === 0 ? "280px" : index === 1 ? "270px" : index === 2 ? "270px" : "150px",
            }}
            className={`text-lg md:text-xl text-center font-medium border-b-4 border-red-600 ${
              index === 2 ? "pb-8" : index === 0 ? "pb-14" : index === 3 ? "pb-24" : "pb-14"
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
               {index === 0 && (
                <img
                  src="https://aadrivingacademy.net/wp-content/uploads/2024/03/Final-Test-Hours.png"
                  alt="First Title Image"
                  className="w-full h-auto rounded-lg mb-4"
                />
              )}
                {index === 3 && (
                <img
                  src="https://aadrivingacademy.net/wp-content/uploads/2024/06/Adult-Waiver-Fees.png"
                  alt="Adult Waiver Fees"
                  className="w-full h-auto rounded-lg mb-4"
                />
              )}
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
                    : index2 === 3 ? "240px" 
                    : "240px",
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
















<div className="bg-gray-100" >
<div className="flex justify-center pt-5 px-4">

</div>

<div className="flex flex-col xl:flex-row p-6 md:p-12 gap-7 justify-center items-center">

  {/* Right Box */}
  <div className="w-full max-w-[770px]  flex items-center justify-center md:h-auto">
    <div className="w-full max-w-[620px] bg-white shadow-lg p-5">
      <div className="flex justify-center">
        <p className="w-full max-w-[555px] text-lg mt-10 font-semibold text-center">
          The initial payment of $179.00 is only a deposit. The remainder balance you will pay to your behind-the-wheel driving instructor.
        </p>
      </div>

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
      <div className="flex justify-center mb-14 mt-9">
        <img
          className="w-full max-w-[200px] h-auto"
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




