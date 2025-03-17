"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom() {


  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // const faqData = [
  //   {
  //     title: "Step 1: You Must Complete the 30 Hour Driver’s Ed Course ",
  //     questions: [
  //       {
  //         // question: "Option 1: 8 Hours Driver’s Manual/Reexamination Course",
  //         answer: "• The program consists of 36 fifty-minute classroom periods, as required by the State of VA DMV."
  //       },
  //       {
  //         // question: "Option 2a: 30 Hours Online Driver’s Education + 90-min Parent/Teen Course",
  //         answer: "          ° 36 periods x 50 min each = 30 hrs. of total training."
  //       },
  //       {
  //         // question: "Option 2b: 30 Hours Classroom Driver’s Education + 90-min Parent/Teen Course",
  //         answer: "• Pick a course option that best suits your schedule."
  //       },
  //       {
  //         // question: "Option 3: 7 Hours Behind the Wheel",
  //         answer: "• Course is available in a fully online/self-paced format. "
  //       },
  //       {
  //         question: "• The student will need to come into our HERNDON office for their final test.",
  //         // answer: "• Course is available in a fully online/self-paced format. "
  //       },
  //       {
  //         // question: "• The student will need to come into our HERNDON office for their final test.",
  //         answer: "° For more info: https://aadrivingacademy.net/30-hr-teen-drivers-education-online-self-paced-step-1-of-3/"
  //       },
  //       {
  //         // question: "• The student will need to come into our HERNDON office for their final test.",
  //         answer: "• Beginning with the academic year 2022, all students under age 18 in the state of Virginia along with a (one) parent or guardian, must participate in an additional 90-minute driver education component as a part of the driver education curriculum.  "
  //       },
  //       {
  //         // question: "• The student will need to come into our HERNDON office for their final test.",
  //         answer: "• Per the VA DMV: If the driver training school that provides classroom instruction is also providing behind-the-wheel instruction, the classroom and behind-the-wheel instruction may be done simultaneously! "
  //       },
  //       {
  //         // question: "• The student will need to come into our HERNDON office for their final test.",
  //         answer: "° Best to register for the ‘Teen Licensing Full Package Program’ so that all parts and full license issuing is done by AA Driving Academy. "
  //       },
  //     ]
  //   },
  //   {
  //     title: "Course Info",
  //     questions: [
  //       {
  //         question: "What to Expect from the Re-Examination Course?",
  //         answer: "The Re-Examination course is NOT a traditional lecture-style classroom. An available member of staff may guide and assist students with questions, but no dedicated staff members will lecture for 8 hours.\n\nShould anyone have any learning disabilities/differences or language concerns, please contact our office before completing registration.\n\n- Classes held in Herndon only (see schedule below)\n- Register & start right away (course held multiple days a week, rolling enrollment) (see schedule below or registration form)\n- Flexible weekday morning, weekday evening & weekend schedule, allows you to maximize hours and complete the course in an accelerated format\n- Driver’s Manual Course can be done in 1 day!\n- We supply all class materials\n- Upon successful completion of the course, we will issue the Re-Examination Certificate (DTS-C) the same day."
  //       }
  //     ]
  //   },
  //   {
  //     title: "Final Step/Going Back to DMV",
  //     questions: [
  //       {
  //         question: "What happens after completing the course?",
  //         answer: "Upon receipt of the Reexamination Certificate (DTS-C), you may IMMEDIATELY return back to the DMV and take the examination a fourth time.\n\n- You will not be restricted on the number of attempts and will now have *UNLIMITED retakes* of the exam (knowledge or behind-the-wheel examination) until you pass.\n- ⭐ If you do not pass your DMV exam after taking our course, you can come back to us and repeat some hours for extra help, at *NO additional charge!\n- ⭐ Our main goal is to help prepare you to **pass your exam at the DMV!*"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Course Fee $",
  //     questions: [
  //       {
  //         question: "*Re-Examination Course Options and Fees*",
  //         answer: "*Option 1:* 8-Hours Driver’s Manual/Re-Examination Course  \n(For Adults age 18 or over OR Teens Under age 18 who have completed 30hrs Drivers Ed)  \n*$199*  \n\n*Option 2a:* 30-Hours Online Driver’s Education + 90-min Parent/Teen Course  \n(For Teens Under age 18 who have NOT completed 30hrs Drivers Ed)  \n*$200*  \n\n*If selecting this option, for more course details, 90-min PT course dates, Final Test info, go directly to this page and fill out the Registration form here:*  \n[Online Driver’s Education Registration](https://aadrivingacademy.net/online-drivers-education-training-virginia.html)  \n\n*Option 2b:* 30-Hours Classroom Driver’s Education + 90-min Parent/Teen Course  \n(For Teens Under age 18 who have NOT completed 30hrs Drivers Ed)  \n*$265*  \n\n*If selecting this option, for more course details, 90-min PT course dates, go directly to this page and fill out the Registration form here:*  \n[Classroom Driver’s Education Registration](https://aadrivingacademy.net/drivers-education-classroom-for-teens-virginia.html)  \n\n*Option 3:* 7-Hours Behind the Wheel  \n(If you failed the DMV Road Test 3 times)  \n*$325*"
  //       }
  //     ]
  //   }
  // ];


  const faqData = [
    {
      title: "Step 1: You Must Complete the 30 Hour Driver’s Ed Course",
      questions: [
        {
          answer: "• The program consists of 36 fifty-minute classroom periods, as required by the State of VA DMV."
        },
        {
          answer: "° 36 periods x 50 min each = 30 hrs. of total training."
        },
        {
          answer: "• Pick a course option that best suits your schedule."
        },
        {
          answer: "• Course is available in a fully online/self-paced format."
        },
        {
          question: "• The student will need to come into our HERNDON office for their final test."
        },
        {
          answer: "° For more info: https://aadrivingacademy.net/30-hr-teen-drivers-education-online-self-paced-step-1-of-3/"
        },
        {
          answer: "• Beginning with the academic year 2022, all students under age 18 in the state of Virginia along with a (one) parent or guardian, must participate in an additional 90-minute driver education component as a part of the driver education curriculum."
        },
        {
          answer: "• Per the VA DMV: If the driver training school that provides classroom instruction is also providing behind-the-wheel instruction, the classroom and behind-the-wheel instruction may be done simultaneously!"
        },
        {
          answer: "° Best to register for the ‘Teen Licensing Full Package Program’ so that all parts and full license issuing is done by AA Driving Academy."
        }
      ]
    },
    {
      title: "Step 2: Complete the 7 Behind-the-Wheel Appointments",
      questions: [
        {
          question: "What does the Behind-the-Wheel training include?",
          answer: "As required by the State of VA DMV, you must complete 14 periods of in‑car instruction.\n\n" +
            "There will be seven (7) appointments:\n" +
            "- Each appointment is 1 hour and 40 minutes long\n" +
            "- 50 minutes of driving and 50 minutes of observation\n\n" +
            "Total training:\n" +
            "- 7 x 50-min periods of driving (350 min total)\n" +
            "- 7 x 50-min periods of observation (350 min total)\n\n" +
            "On the last (7th) session, our DMV-certified instructor will give you the DMV final road test. If you drive well, the instructor will pass you, " +
            "making you exempt from taking the final road test at a DMV center.\n\n" +
            "Upon passing, the instructor will issue a temporary driver's license certificate (DTS-B) valid for 6 months/180 days.\n\n" +
            "This document, along with your Learner's Permit, will serve as a full-fledged driver's license.\n\n" +
            "Important Notes:\n" +
            "- The temporary driver's license (DTS-B) is only valid if the student is at least 16 years and 3 months old and has held a Learner’s Permit for 9 months.\n" +
            "- AA Driving Academy will send a copy of your certificate (DTS-B) to the DMV main office in Richmond, VA.\n\n" +
            "For additional info, please visit:\n" +
            "http://www.dmvnow.com/webdoc/citizen/drivers/applying.asp"
        }
      ]
    },
    {
      title: "Final Step",
      questions: [
        {
          question: "What happens after completing the course?",
          answer: "Within the next few months, the local juvenile court will mail a letter with the date and time of the Licensing Ceremony. " +
            "They typically notify you at least 30 days in advance of the ceremony so that you and a parent can both attend. " +
            "At the ceremony, the student will receive the hard copy of their driver's license (ID card)."
        }
      ]
    },]






  const faqData2 = [
    {
      title: "FYI: Requirements Before Starting Teen Behind the Wheel",
      questions: [
        {
          answer: "Must obtain a Learner’s Permit from the DMV\n" +
            "Make a photocopy of Learner's Permit\n" +
            "Driving log of 45 hours with parents (30 hrs daytime plus 15 hrs nighttime)\n" +
            "Per the VA DMV: If the driver training school that provides classroom instruction is also providing behind-the-wheel instruction, " +
            "the classroom and behind-the-wheel instruction may be done simultaneously!\n" +
            "This program is NOT for brand new drivers who have never driven before! " +
            "Per the DMV, you MUST have 45 hours of driving practice/experience before the temporary license is issued."
        }
      ]
    },
    {
      title: "Extra Information Regarding Our Vehicles",
      questions: [
        {
          answer: "Our DMV-certified instructors give in-car instruction using DMV-approved vehicles (modern, 4-door, automatic, dual-controlled).\n\n" +
            "Clean, air-conditioned, automatic transmission, dual-control vehicles.\n\n" +
            "Our vehicles go through continuous and rigorous maintenance and safety inspections.\n\n" +
            "Our vehicles have dual-equipped brakes, passenger-side rearview mirror, blind-spot mirrors, and are inspected annually by the DMV.\n\n" +
            "Our vehicles hold vehicle inspection reports in compliance with Virginia state requirements to ensure you receive maximum safety."
        }
      ]
    },
    {
      title: "Extra Information Regarding Our Instructors",
      questions: [
        {
          answer: "DMV-certified instructors.\n\n" +
            "Some of our instructors are active and retired police officers with numerous years of extensive training and experience in traffic law enforcement, " +
            "emergency driving methods, collision investigation, and traffic court proceedings.\n\n" +
            "All of our instructors have many years of driving instruction experience, are given professional training, and are educated college graduates. " +
            "They have also received specialized collegiate-level training in Driver’s Education.\n\n" +
            "In addition, all are licensed as Driver Training Instructors by the Virginia Department of Motor Vehicles (DMV) " +
            "and certified by the American Automobile Association (AAA) and the National Safety Council (NSC).\n\n" +
            "1-Stop-Driving-School-of-Virginia.\n\n" +
            "All of our instructors get their fingerprints done every year and are subject to annual national " +
            "Federal Bureau of Investigations (FBI) background checks and DMV driving record audits."
        }
      ]
    },
    {
      title: "Extra Information Regarding Our School",
      questions: [
        {
          answer: "Our school is fully licensed, certified, insured, and bonded.\n\n" +
            "Since opening its doors in 1994, AA Driving Academy has had one goal: to 'teach you safe, responsible, and accountable driving.'\n\n" +
            "To date, our driving school is responsible for training, licensing, and improving the driving of 100,000 student drivers " +
            "that have graduated from our academy."
        }
      ]
    }
  ];













  return <div className="bg-white">




<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://aadrivingacademy.net/wp-content/uploads/2021/11/teen-licensing-package-program_2400-scaled.jpg')"
  }}
>
<div className="text-center px-4">
  <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-24 xl:mt-32 lg:mt-48 sm:mt-28 text-white">
  TEEN LICENSE FULL PACKAGE
  </h1>
  <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-8 text-white">
  (STEPS 1 & 2)
  </h1>
</div>

</div>





<div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 p-4 sm:p-6 lg:p-10 w-full">
  {/* Left Section */}
  <div className="flex-1 min-w-[300px] max-w-[750px] h-auto p-4">
    <div className="flex flex-col xl:flex-row gap-3 text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9c261f]">
        View Our
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002243]">
        Driving School’s
      </h1>
    </div>

    {/* Headings */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5 text-[rgb(14,81,143)]">
      Teen Licensing
    </h1>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[rgb(14,81,143)]">
      Package Program
    </h1>

    {/* Description */}
    <p className="text-base sm:text-lg text-black mt-5">
      * For teenagers (under 18) looking to package and complete ALL licensing requirements
    </p>
    <p className="text-base sm:text-lg text-black mt-2">
      * A six-month temporary license issued upon completion
    </p>

    {/* Image & Extra Text */}
    <div className="flex flex-wrap items-center mt-3 gap-3">
      <img
        src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
        className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain"
        alt="1 Stop Driving School of Virginia"
      />
      <p className="text-base sm:text-lg text-black font-semibold max-w-md">
        This package program is for teenagers (under 18) looking to complete the State of VA DMV requirements in order to receive their driver's license.
      </p>
    </div>
  </div>

  {/* Right Section - Video Box */}
  <div className="flex-1 min-w-[300px] max-w-[650px] h-auto bg-[#002243] p-6 flex flex-col items-center text-center">
    <h1 className="text-3xl sm:text-4xl text-white mt-5 font-bold">
      **Be Sure To Watch
    </h1>
    <h1 className="text-3xl sm:text-4xl text-white font-bold">
      the Video!
    </h1>

    {/* Responsive YouTube Video */}
    <div className="relative w-full max-w-[525px] aspect-video mt-6 mb-8">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/mnDVsACGkpY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

<div className="w-full px-4">
  <p className="text-lg sm:text-xl font-bold text-[#0e518f] ml-4 sm:ml-10">
    This program has two (2) required steps:
  </p>

  {/* FAQ Container */}
  <div className="flex flex-col xl:flex-row  items-center gap-12 md:gap-2 p-4 sm:p-6 md:p-14 text-center lg:text-left">
    {faqData.map((faq, index) => (
      <div key={index} className="flex-1 w-100 max-w-lg">
        {/* FAQ Question */}
        <div
          onClick={() => setIsOpen(index)}
          className="cursor-pointer"
        >
          <div className="flex justify-between items-center text-black px-3 py-2">
            <h5
              className={`text-lg md:text-xl border-b-2 border-red-600 text-center text-[#002243] transition-all hover:bg-[#002243] hover:text-white font-semibold w-full ${
                index === 0 || index === 2 ? "pb-2" : "pb-8"
              }`}
              style={{
                maxWidth: index === 0 ? "290px" : index === 1 ? "300px" : "224px",
                paddingBottom: index === 2 ? "55px" : null,
              }}
            >
              {faq.title}
            </h5>
          </div>
        </div>

        {/* Modal */}
        {isOpen === index && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl lg:max-w-2xl max-h-[80vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
                onClick={() => setIsOpen(null)}
              >
                ✖
              </button>

              {/* Modal Content */}
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-center lg:text-left">
                {faq.questions.map((q, i) => (
                  <p key={i} className="px-2">
                    <strong>{q.question}</strong>
                    <br />
                    {q.answer}
                  </p>
                ))}
              </div>

              {/* Image */}
              <div className="flex justify-center mt-4">
                <img
                  src="https://aadrivingacademy.net/wp-content/uploads/2024/03/Final-Test-Hours-1.png"
                  alt="Final Test Hours"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                />
              </div>

              {/* Close Button */}
              <div className="mt-6 flex justify-center">
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




<div className="flex flex-col xl:flex-row items-center gap-12 md:gap-2 p-4 sm:p-6 md:p-14 text-center lg:text-left">
  {faqData2.map((faq, index2) => (
    <div key={index2} className="flex-1 w-100 max-w-lg">
      {/* FAQ Question */}
      <div onClick={() => setIsOpen2(index2)} className="cursor-pointer">
        <div className="flex justify-between items-center text-black px-3 py-2">
          <h1
            style={{
              width:
                index2 === 0
                  ? "257px"
                  : index2 === 2
                  ? "240px"
                  : index2 === 3
                  ? "200px"
                  : "224px",
            }}
            className="text-lg text-center md:text-xl border-b-2 border-red-600 text-[#002243] transition-all hover:bg-[#002243] hover:text-white font-semibold pb-2"
          >
            {faq.title}
          </h1>
        </div>
      </div>

      {/* Modal */}
      {isOpen2 === index2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl lg:max-w-2xl max-h-[80vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
              onClick={() => setIsOpen2(null)}
            >
              ✖
            </button>

            {/* Modal Content */}
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-center md:text-center lg:text-left">
              {faq.questions.map((q, i) => (
                <p key={i}>
                  <strong>{q.question}</strong>
                  <br />
                  {q.answer}
                </p>
              ))}
            </div>

            {/* Close Button at Bottom */}
            <div className="mt-6 flex justify-center">
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




<div className="flex flex-col md:flex-row justify-center bg-gray-100 p-6 gap-6">
  {/* Left Side - How to Get a License */}
  <div className="bg-[#002243] text-white p-6   flex-1 min-w-[300px] max-w-lg text-center ">
  <div className="flex flex-col items-center justify-center h-full">
  <h2 className="text-2xl font-bold mb-4">How To Get a License</h2>
  <img
    src="https://aadrivingacademy.net/wp-content/uploads/2021/11/Simple-Teen-Info.jpg"
    alt="How to Get a License"
    className="mx-auto w-full max-w-md"
  />
</div>

  </div>

  {/* Right Side - Pricing Table */}
  <div className="flex-1 min-w-[300px] max-w-2xl p-6">
    <h2 className="text-blue-900 text-2xl font-bold text-center">
      Teen Licensing Package Program Pricing
    </h2>
    <p className="text-center text-blue-600 font-semibold">
      (Includes: Driver’s Ed & Behind the Wheel)
    </p>

    {/* Responsive Table Wrapper */}
    <div className="mt-6 border  shadow-md overflow-x-auto ">
      <table className="w-full border-collapse min-w-[600px]">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-3 text-left">ZONE</th>
            <th className="p-3 text-left">CITY/TOWN</th>
            <th className="p-3 text-left">CITY/TOWN</th>
            <th className="p-3 text-left">TOTAL PRICE (ALL 3 STEPS)</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {/* Zone 1 */}
          <tr className="border-b">
            <td className="p-3 font-bold">Zone 1</td>
            <td className="p-3">
              <ul className="list-disc pl-4">
                <li>Alexandria</li>
                <li>Arlington</li>
                <li>Burke</li>
                <li>Dunn Loring</li>
                <li>Fairfax</li>
                <li>Fair Lakes</li>
                <li>Fair Oaks</li>
              </ul>
            </td>
            <td className="p-3">
              <ul className="list-disc pl-4">
                <li>Falls Church</li>
                <li>Great Falls</li>
                <li>McLean</li>
                <li>Merrifield</li>
                <li>Oakton</li>
                <li>Tysons Corner</li>
                <li>Vienna</li>
              </ul>
            </td>
            <td className="p-3 font-bold text-lg">$595 Total</td>
          </tr>

          {/* Zone 2 */}
          <tr>
            <td className="p-3 font-bold">Zone 2</td>
            <td className="p-3">
              <ul className="list-disc pl-4">
                <li>Ashburn</li>
                <li>Brambleton</li>
                <li>Broadlands</li>
                <li>Cascades</li>
                <li>Dulles</li>
                <li>Herndon</li>
              </ul>
            </td>
            <td className="p-3">
              <ul className="list-disc pl-4">
                <li>Lansdowne</li>
                <li>Leesburg</li>
                <li>Oak Hill</li>
                <li>Potomac Falls</li>
                <li>Reston</li>
                <li>Sterling</li>
              </ul>
            </td>
            <td className="p-3 font-bold text-lg">$575 Total</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>






<div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
  <div className="bg-white p-10   shadow-lg text-center max-w-lg sm:max-w-2xl md:max-w-6xl w-full">
    {/* Payment Info */}
    <p className="italic mb-6 font-semibold text-gray-700  text-lg underline">
      The initial payment of <span className="font-bold">$179.00</span> is only a deposit. The remainder balance you <br></br>
      will pay to your behind-the-wheel driving instructor.
    </p>

    {/* Buttons Section */}
    <div className="flex flex-col items-center mb-8  gap-y-4">
      {/* Register Button */}
      <div className="flex items-center  mt-8 w-full max-w-md  ">
      <img
          className="w-[70px]"
          src="https://aadrivingacademy.net/wp-content/uploads/2021/10/secure-icon-padlock-icon-isolated-vector-elvinagraph.jpg"
          alt="Secure Icon"
        />
      <Link href={"/Registration"} className="bg-[#9c261f] text-white font-bold text-xl md:text-2xl px-8 md:px-10 py-3">
          CLICK HERE TO REGISTER
        </Link>
      </div>

 

      {/* Payment Logos */}
      <div className="flex justify-center mt-4">
        <img 
          src="https://aadrivingacademy.net/wp-content/uploads/2022/11/Card-Pic-7.jpg" 
          alt="Accepted payment methods including MasterCard"
          className="max-w-xs"
        />
      </div>
    </div>
  </div>
</div>






{/* ----------------------------- */}



<div className="bg-gray-100">
  {/* Google Map Section */}
  <div className="relative w-full h-[270px] sm:h-[350px] md:h-[400px] min-h-[250px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0458273610874!2d-77.3963002!3d38.9686862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6380a2553ebbb%3A0x54f774babc9ed1e9!2s1043%20Sterling%20Rd%20%23101%2C%20Herndon%2C%20VA%2020170%2C%20USA!5e0!3m2!1sen!2sus!4v1611139899651!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      title="Google Map of 1043 Sterling Rd, Herndon, VA"
    ></iframe>

    {/* Clickable Link Overlay */}
    <a
      href="https://www.google.com/maps/place/1043+Sterling+Rd+%23101,+Herndon,+VA+20170,+USA/@38.9707041,-77.4028711,15z/data=!4m6!3m5!1s0x89b6380a2553ebbb:0x54f774babc9ed1e9!8m2!3d38.9686862!4d-77.3963002!16s%2Fg%2F11mbnhlbbg?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-10"
      aria-label="Open location in Google Maps"
    />
  </div>
</div>




  </div>



}