"use client";
import Link from "next/link";
import { useState } from "react";



export default function ClassRoom() {


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

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
            title: "Course Description",
            questions: [
                {
                    question: "What is the course about?",
                    answer:
                        "Online/Self-Paced course (no Instructor) Flexible Schedule: Go at your own pace! Coursework can be done 100% remotely! Only required to come to our office for the Final Test. Driver education programs are available statewide to students, adults and out-of-school youths. Course content approved by VA Department of Education, and we are licensed by VA DMV to provide Driver's education. The curriculum includes components about alcohol safety, drug abuse awareness, aggressive driving, distracted driving, driving emergencies, pedestrian & bicycle safety, motorcycle awareness, organ donation awareness and auto insurance info, etc."
                }
            ]
        },
        {
            title: "Advantages of Self-Paced Course",
            questions: [
                {
                    question: "What are the advantages of a self-paced course?",
                    answer:
                        "Convenient - This course allows you to log in and log out of the course at your own schedule. Great for students with afterschool activities, jobs, etc. Ease - With an easy to direct interface and course this course is a no brainer to function. 90 Minute Parent Teen course is included in the course. No need for workbooks or textbooks. As long as you have internet access you can continue the course from anywhere even VACATION!"
                }
            ]
        },
        {
            title: "Course Information",
            questions: [
                {
                    question: "What does the course include?",
                    answer:
                        "The program consists of 13 online/self-paced sessions + Final Test. Program Objectives and Procedures. Right-of-Way Concepts & Traffic Control Devices. Driver Responsibilities: Preparations before Operating a Vehicle. Basic Maneuvering Tasks: Low Risk Environment. Basic Maneuvering Tasks: Moderate Risk Driving Environment. Information Processing: Moderate Risk Environment. Overview: Complex Risk Environment. Driver Performance: Personal Factors (Alcohol). Driver Responsibilities: Adverse Conditions. Virginia Driver Responsibilities: Vehicle Functions. Virginia Driver Responsibilities: Making Informed Choices. Program Summary/Review. After the 13 sessions and 90-minute parent teen are completed, you MUST call our office (703) 478-6800 to schedule your Final Test. The final test MUST be taken in our office. You have six (6) months to complete the course! Per the VA DMV: If the driver training school that provides classroom instruction is also providing behind-the-wheel instruction, the classroom and behind-the-wheel instruction may be done simultaneously!"
                }
            ]
        },
        {
            title: "Course Fee $",
            questions: [
                {
                    question: "What are the pricing options?",
                    answer:
                        "Option A: 30hrs Drivers Education Course + REQUIRED 90min Parent/Teen Course ($179). Option B (RE-EXAM): 30hrs Drivers Education Course + REQUIRED 90min Parent/Teen Course ($180) – For Students who failed DMV learners permit test 3 times"
                }
            ]
        }
    ];

    const faqData2 = [
        {
            title: "Extra Information Regarding Our School",
            questions: [
                {
                    question: "What makes our school unique?",
                    answer:
                        "Our school is fully licensed, certified, insured, and bonded. Since opening its doors in 1994, AA Driving Academy has had one goal: to 'teach you safe, responsible and accountable driving.' To date, our driving school is responsible for training, licensing, and improving the driving of 100,000 student drivers that have graduated from our academy."
                }
            ]
        },
        {
            title: "Extra Information Regarding Our Instructors",
            questions: [
                {
                    question: "What are the qualifications of our instructors?",
                    answer:
                        "DMV-certified instructors. Some of our instructors are active and retired police officers with numerous years of extensive training and experience in traffic law enforcement, emergency driving methods, collision investigation, and traffic court proceedings. All of our instructors have many years of driving instruction experience, are given professional training, and are educated college graduates. They have also received specialized collegiate level training in Driver’s Education. In addition, all are licensed as Driver Training Instructors by the Virginia Department of Motor Vehicles (DMV), certified by American Automobile Association (AAA) and National Safety Council (NSC). 1-Stop-Driving-School-of-Virginia. All of our instructors get their fingerprints done every year and are subject to annual national Federal Bureau of Investigations (FBI) background checks and DMV driving record audits. FBISeal"
                }
            ]
        }
    ];












    return <div className="bg-white">





<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://aadrivingacademy.net/wp-content/uploads/2021/11/drivers-ed-class-2400-scaled.jpg')"
  }}
>
  <div className="text-center px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-28 text-white">
    30HR TEEN DRIVER'S EDUCATION
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-8 text-white">
    (ONLINE/SELF-PACED) STEP 1 OF 2
    </h1>
  </div>
</div>



        <div className="flex flex-col lg:flex-row justify-center mt-5 gap-6 p-4 sm:p-6 lg:p-10">
            {/* Left Section */}
            <div className="max-w-full lg:w-[750px] h-auto p-4">
                <div className="flex flex-col xl:flex-row gap-3 text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9c261f]">
                        Trust Us
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002243]">
                        for Unrivaled
                    </h1>
                </div>

                {/* Headings */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5 text-[rgb(14,81,143)]">
                    30 hr Teen Driver’s
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[rgb(14,81,143)]">
                    Education Course    </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-black mt-5">
                    * Approved by VA DMV for teens needing Driver’s Ed.



                </p>
                <p className="text-base sm:text-lg text-black mt-2">
                    *Online/Self-Paced course (no instructor)
                </p>
                <p className="text-base sm:text-lg text-black mt-2">
                    *Flexible schedule: Go at your own pace!

                </p>

                {/* Image & Extra Text */}
                <div className="flex flex-wrap items-center mt-3 gap-5">
                    <img
                        src="https://aadrivingacademy.net/wp-content/uploads/2022/01/1-Stop-Driving-School-of-Virginia.png"
                        className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain"
                        alt="1 Stop Driving School of Virginia"
                    />
                    <p className="text-base sm:text-lg text-black font-semibold max-w-md">

                        Per VA DMV, all teenagers (under 18) MUST complete 30 hrs of Driver’s Education (classroom or online) in order to receive their Driver’s License.      </p>
                </div>








            </div>

            {/* ---------------------------- */}


            {/* Right Section - Video Box */}

            <div className="bg-white w-full lg:w-[650px] h-auto flex flex-col justify-start  items-start shadow-lg p-4 sm:p-6 gap-10">

                <div className="flex flex-wrap justify-center text-center lg:text-left w-full">
                    {faqData.map((faq, index) => (
                        <div key={index} className="w-full sm:w-1/2 px-3">
                            <div onClick={() => setIsOpen(index)} className="cursor-pointer">
                                <div className="flex justify-between items-center text-black px-3 py-2 border-b-4 border-red-600">
                                    <h1 className="text-lg md:text-xl   font-medium w-full text-center sm:text-center">
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
                                    <h1 className="text-lg md:text-xl font-medium w-full text-center sm:text-center">
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








        <div className="flex flex-col  bg-gray-100 lg:flex-row justify-center mt-5 gap-6 p-4 sm:p-6 lg:p-10">


            <div className="flex flex-col md:flex-row max-w-7xl  gap-6 w-full">
                {/* Left Side - How to Get a License */}
                <div className="bg-[#002243] text-white p-14 flex-1 text-center">
                    <h2 className="text-4xl font-bold mb-4">How To Get a License</h2>
                    <img
                        src="https://aadrivingacademy.net/wp-content/uploads/2021/11/Simple-Teen-Info.jpg"
                        alt="How to Get a License"
                        className="mx-auto mt-10  w-full max-w-md"
                    />
                </div>

                {/* Right Side - Pricing Table */}

            </div>

        </div>


        {/* --- */}


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






        {/* --- */}


        <div className="bg-gray-100">
            {/* Title */}


            {/* Student Contract Section */}

            {/* Google Map Section */}
            <div className="relative w-full h-[270px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0458273610874!2d-77.3963002!3d38.9686862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6380a2553ebbb%3A0x54f774babc9ed1e9!2s1043%20Sterling%20Rd%20%23101%2C%20Herndon%2C%20VA%2020170%2C%20USA!5e0!3m2!1sen!2sus!4v1611139899651!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Map"
                ></iframe>
                <Link
                    href="https://www.google.com/maps/place/1043+Sterling+Rd+%23101,+Herndon,+VA+20170,+USA/@38.9707041,-77.4028711,15z/data=!4m6!3m5!1s0x89b6380a2553ebbb:0x54f774babc9ed1e9!8m2!3d38.9686862!4d-77.3963002!16s%2Fg%2F11mbnhlbbg?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label="Open location in Google Maps"
                ></Link>
            </div>
        </div>




    </div>



}