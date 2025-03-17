"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom(){


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const faqData = [
        {
            title: "Behind The Wheel Course Information",
            questions: [
                {
                    question: "As required by the State of VA DMV, you must complete 14 periods of in-car instruction:",
                    answer: " There will be seven (7) appointments Each appointment is 1 hour and 40 minutes long\n50 minutes of driving and 50 minutes of observation\n7 x 50min periods of driving (350min total)\n7 x 50min periods of observation (350min total)\nPickup & Drop-off from home cannot be guaranteed and must be discussed directly with Instructor.\nOn the last (7th) session, our DMV certified instructor will give you the DMV final road test. If you drive well, the instructor will pass you. Thus, making the student exempt from taking the final road test at a DMV center.\n\nUpon passing, the instructor will issue a temporary driver's license certificate (DTS-B) valid for 6 months/180 days.\nThis document along with the Learner's Permit, will serve as a full-fledged license to drive for the new driver.\n\nThe temporary driver's license (DTS-B) does not become valid unless a teenager is at least 16yrs and 3 months of age and has held a Learners Permit for 9 months.\n\nAA Driving Academy sends a copy of your certificate (DTS-B) to the DMV main office in Richmond, VA.\n\nFor additional info please visit:\nhttp://www.dmvnow.com/webdoc/citizen/drivers/applying.asp"
                }
            ]
        },
        {
            title: "FINAL STEP",
            questions: [
                {
                    question: "What to Expect from the Re-Examination Course?",
                    answer: "Within the next few months, the local Juvenile Court will mail a letter with the date and time of the Licensing Ceremony. They typically notify you at least 30 days in advance of the Ceremony, so that you and a parent can both attend. At the Ceremony, the student will receive the hard copy of their driver's license (ID card)."
                }
            ]
        },
        {
            title: "FYI: Requirements before starting Teen Behind the Wheel",
            questions: [
                {
                    question: "What happens after completing the course?",
                    answer: "Must obtain a Learners Permit from the DMV and have held it for 9 months\nMake a photocopy of Learner's Permit\nCertificate of completion (DEC-1) of drivers education course (classroom or online)\nMust be signed by Driver's Education Teacher and School Administrator\nCertificate of completion of 90-minute parent/teen course (classroom or online)\nMust be signed by Driver's Education Teacher and School Administrator\nDriving log of 45 hours with parents (30hrs daytime plus 15hrs nighttime)\nThis program is NOT for brand new drivers who have never driven before! Per the DMV, you MUST have 45 hours of driving practice/experience before the temporary license is issued."
                }
            ]
        },
        {
            title: "Teen Behind the Wheel Training Pricing",
            questions: [
                {
                    question: "Behind the Wheel Training (Under 18)",
                    answer: "(Includes 7 appointments, DMV Road Test, License Issuing)"
                }
            ]
        }
    ];
    
    
    
    
    
    
    


    const faqData2 = [
        {
            title: "Extra Information Regarding Our Vehicles",
            questions: [
                {
                    question: "Clean, air-conditioned, automatic transmission, Dual Control Vehicles",
                    answer: "Our vehicles go through continuous and rigorous maintenance and safety inspections.\n\nOur vehicles have dual equipped brakes, passenger side rear view mirror, blind spot mirrors and are inspected annually by the DMV.\n\nOur vehicles hold vehicle inspection reports in compliance with Virginia state requirement to insure you receive maximum safety.",
                    src:"https://aadrivingacademy.net/wp-content/uploads/2021/10/fmf_12552.jpg",
                }
            ]
        },
        {
            title: "Extra Information Regarding Our Instructors",
            questions: [
                {
                    question: "DMV Certified Instructors",
                    answer: "Some of our instructors are active and retired police officers, with numerous years of extensive training and experience in traffic law enforcement, emergency driving methods, collision investigation, and traffic court proceedings.\n\nAll of our instructors have many years of driving instruction experience, given professional training, and are educated college graduates. They have also received specialized collegiate-level training in Drivers Education.\n\nIn addition, all are licensed as Driver Training Instructors by the Virginia Department of Motor Vehicles (DMV), certified by the American Automobile Association (AAA), and the National Safety Council (NSC).\n\nAll of our instructors get their fingerprints done every year and are subject to annual national Federal Bureau of Investigations (FBI) background checks and DMV driving record audits.",
                    src:"https://aadrivingacademy.net/wp-content/uploads/2022/09/FBISeal.png",
                }
            ]
        },
        {
            title: "Extra Information Regarding Our School",
            questions: [
                {
                    question: "Our school is fully licensed, certified, insured, and bonded.",
                    answer: "Since opening its doors in 1994, AA Driving Academy has had one goal: to 'teach you safe, responsible, and accountable driving.'\n\nTo date, our driving school is responsible for training, licensing, and improving the driving of 80,000 student drivers that have graduated from our academy.\n\nOur school is fully licensed, certified, insured, and bonded.",
                    src:"https://aadrivingacademy.net/wp-content/uploads/2021/10/Licensed-Insured-Bonded-Badge.png"
                }
            ]
        },
        {
            title: "What To Provide at Your 1st Appointment",
            questions: [
                {
                    question: "Required Documents and Payments",
                    answer: "Printed registration form\n\nCompleted & Signed School Contract (must be signed by Student & Parent/Guardian) Click Here for Student Contract\n\nPhotocopy of Learner's Permit issued by the DMV\n\nRemaining balance payment (Checks can be made out to 'AA Driving Academy')\n\nCertificate of completion (DEC-1) of driver's education course (classroom or online)\n\nUsually, a pink card that looks like this.",
                    src:"https://aadrivingacademy.net/wp-content/uploads/2022/09/void-certificate-300x194.jpg"
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
  <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-24 xl:mt-32 lg:mt-48 sm:mt-28 text-white">
    BEHIND THE WHEEL TRAINING
  </h1>
  <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-8 text-white">
    FOR TEENS (STEP 2 of 2)
  </h1>
</div>

</div>

<div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 sm:gap-8 p-6 lg:p-10">
  {/* Left Section */}
  <div className="w-full lg:w-[750px] h-auto p-4 mx-auto text-center sm:text-left">
  <div className="flex flex-col xl:flex-row gap-3">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9c261f]">
      Behind the Wheel
    </h1>
  </div>

  <h2 className="text-2xl sm:text-4xl font-bold mt-5 text-[rgb(14,81,143)]">
    Training for Teens
  </h2>

  <p className="text-base sm:text-lg mt-5">
    * Required for all Teenagers (Under 18) to complete in order to receive their Driver’s License
  </p>
  <p className="text-base sm:text-lg mt-2">
    * A Six-Month Temporary License Issued Upon Completion
  </p>

  {/* Registration Button */}
  <div className="flex justify-center sm:justify-start mt-8">
    <button className="bg-[#9c261f] text-white font-bold text-lg md:text-2xl px-6 md:px-10 py-2 md:py-3">
      CLICK HERE TO REGISTER
    </button>
  </div>

  {/* Image & Info */}
  <div className="flex flex-wrap mt-10 justify-center sm:justify-start gap-5">
    <img
      src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
      className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain max-w-full"
      alt="1 Stop Driving School of Virginia"
    />
    <p className="text-base sm:text-lg font-bold w-full sm:w-[479px]">
      This program is a mandatory requirement by VA DMV for all Teenagers (Under 18) to complete in order to receive their Driver’s License.
      DMV final road test included with Teen Behind the Wheel. Available 7 days a week, including evenings. Pickup & Drop-off from home must be discussed with the instructor.
    </p>
  </div>
</div>


  {/* Right Section - FAQ */}
  <div className="bg-white w-full lg:w-[650px] h-auto flex flex-col justify-start  items-start shadow-lg p-4 sm:p-6 gap-10">

  <div className="flex flex-wrap justify-center text-center lg:text-left w-full">
  {faqData.map((faq, index) => (
    <div key={index} className="w-full sm:w-1/2 px-3">
      <div onClick={() => setIsOpen(index)} className="cursor-pointer">
        <div className="flex justify-between items-center text-black px-3 py-2 border-b-4 border-red-600">
          <h1 className="text-lg md:text-xl font-medium w-full text-center sm:text-left">
            {faq.title}
          </h1>
        </div>
      </div>

      {isOpen === index && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg lg:max-w-2xl max-h-[90vh] overflow-y-auto relative text-center sm:text-left">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
              onClick={() => setIsOpen(null)}
            >
              ✖
            </button>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              {faq.questions.map((q, i) => (
                <p key={i}>
                  <strong>{q.question}</strong>
                  <br />
                  {q.answer}
                </p>
              ))}
            </div>

            {/* Third Title ki Description me Video */}
            {index === 2 && (
              <div className="mt-4">
             <iframe style={{width:"620px",height:"300px"}} src="https://www.youtube.com//embed/mnDVsACGkpY" >

             </iframe>
              </div>
            )}

            {/* Fourth Title ki Description me Image */}
            {index === 3 && (
              <div className="mt-4">
                <img
                  src="https://aadrivingacademy.net/wp-content/uploads/2024/06/Teen-BTW-fees.png"
                  alt="Description"
                  className="w-full rounded-lg"
                />
              </div>
            )}

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


    {/* FAQ Section 2 */}
    <div className="flex flex-wrap justify-center text-center lg:text-left w-full">
      {faqData2.map((faq, index2) => (
        <div key={index2} className="w-full sm:w-1/2 px-3">
          <div onClick={() => setIsOpen2(index2)} className="cursor-pointer">
            <div className="flex justify-between items-center text-black px-3 py-2 border-b-4 border-red-600">
              <h1 className="text-lg md:text-xl font-medium w-full text-center sm:text-left">
                {faq.title}
              </h1>
            </div>
          </div>

          {isOpen2 === index2 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg lg:max-w-2xl max-h-[90vh] overflow-y-auto relative text-center sm:text-left">
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
                  onClick={() => setIsOpen2(null)}
                >
                  ✖
                </button>
                <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.questions.map((q, i) => (
                    <p key={i}>
                      <strong>{q.question}</strong>
                      <br />
                      {q.answer}
                    </p>
                   
                  ))}
                  {faq.questions.map((q,i)=>{
                    return <div key={i} >
                        <img src={q.src} ></img>
                    </div>
                  })}
                </div>
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
  </div>
</div>




















<div className="bg-gray-100" >

<div className="flex justify-center px-4">
  <div style={{backgroundColor:"#002243"}} className=" text-white p-6 mt-14 flex-1 text-center max-w-6xl w-full">
    <h2 className="text-3xl md:text-4xl mt-5 font-bold mb-4">
      How To Get a License
    </h2>
    <img
      src="https://aadrivingacademy.net/wp-content/uploads/2021/11/Simple-Teen-Info.jpg"
      alt="How to Get a License"
      className="mx-auto mt-10 mb-5 w-full max-w-md"
    />
  </div>
</div>




<div className="flex flex-col xl:flex-row p-6 md:p-12 gap-7 justify-center">
  <div
    style={{ background: "#f3f4f6" }}
    className="w-full flex items-center justify-center md:h-auto"
  >
    <div className="w-full max-w-6xl bg-white shadow-lg p-5">
      <div className="flex justify-center mt-8">
        <p className="text-medium text-center font-bold max-w-[600px]">
          THE INITIAL PAYMENT OF $100.00 IS ONLY A DEPOSIT. THE REMAINDER BALANCE YOU WILL PAY TO YOUR BEHIND THE WHEEL DRIVING INSTRUCTOR.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="p-8 bg-[#002243] w-full max-w-[740px]">
          <p style={{lineHeight:"30px"}} className="text-white text-center font-semibold max-w-[652px] mx-auto">
            NOTE: By completing the registration form, this does NOT guarantee a time spot/schedule. Once you submit your registration and pay the deposit, you will immediately receive your confirmation page via email. Plus, within 24hrs, we will also send you a separate email with your assigned instructors' information. It is your responsibility to reach out to the instructor to discuss scheduling. Pickup & Drop-off from home cannot be guaranteed and must be discussed directly with the instructor. Please give them 24-48 hours to respond. If you do not hear from them, you may call them directly or please call our office at 703-478-6800.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 mt-6 lg:mt-8 justify-center">
        <img
          className="w-[70px] max-w-full h-auto"
          src="https://aadrivingacademy.net/wp-content/uploads/2021/10/secure-icon-padlock-icon-isolated-vector-elvinagraph.jpg"
          alt="Secure Icon"
        />
        <Link href={"/Registration"} className="bg-[#9c261f] text-white font-bold text-xl md:text-2xl px-8 md:px-10 py-3">
          CLICK HERE TO REGISTER
        </Link>
      </div>
      <div className="flex justify-center mt-6">
        <img
          className="w-full max-w-[400px] h-auto"
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




