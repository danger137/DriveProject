"use client";
import { useState } from "react";
export default function Question (){


    const [isOpen, setIsOpen] = useState(false);

    const faqData = [
        {
            title: "General Questions",
            questions: [
                {
                    question: "Can I bring my children to class?",
                    answer: "No. We often have multiple classes going on and customers taking tests. Children can be a distraction, so please keep them at home."
                },
                {
                    question: "Do you offer a military or senior discount?",
                    answer: "No. As a small business, we do not have the necessary infrastructure to offer such discounts at this time."
                },
                {
                    question: "Why do I have to pay if the DMV says I must take a class?",
                    answer: "Because nothing in life is free."
                },
                {
                    question: "How do I sign up for/pay for classes?",
                    answer: "Go to the page for the class you would like to take under COURSES. Fill out the Registration Form and follow the link to PAYPAL to make your payment. You can also pay by credit card as a guest."
                },
                {
                    question: "How do I get my suspended license back?",
                    answer: "You must take the Driver Improvement Program, then appear at the DMV with your certificate, pay a fine, and your license may be reinstated at the discretion of the DMV."
                },
                {
                    question: "I’m an adult and need to get my license for the first time, what do I do?",
                    answer: "First, obtain a Learner’s Permit. Adults must hold it for 60 days before taking the Road Test at the DMV."
                }
            ]
        },
        {
            title: "Behind the Wheel",
            questions: [
                {
                    question: "Can I schedule 2 sessions a day to finish quicker?",
                    answer: "No. You can schedule ONE session per day and at your instructor's discretion."
                },
                {
                    question: "Can I start Behind the Wheel before I finish Drivers Education?",
                    answer: "If you are doing Online Drivers Education, you may not schedule for Behind the Wheel until you have taken and passed the final exam for Drivers Education."
                },
                {
                    question: "Can parents ride along?",
                    answer: "Parents do not ride along with instructors and students. DMV prohibits parents from being in the car when Behind the Wheel is being taught. The presence of a parent often increases anxiety in the student."
                }
            ]
        },
        {
            title: "DIP/Reckless",
            questions: [
                {
                    question: "Where is the 12 Hour Class on the Website?",
                    answer: "There is no 12 hour class. You need to take the 8 Hour DIP class and the 4 Hour Reckless/Aggressive Program. Together, these two courses are the 12 hour program that you’ve been asked to take."
                },
                {
                    question: "I have to take DIP and Reckless, which order do I take them in?",
                    answer: "There is no requirement to take one before the other. You may take them in any order. Most people do take 8 Hour DIP first but this is not required."
                },
                {
                    question: "Is Lunch provided during the 8 hour DIP? Where can I get food?",
                    answer: "We do not provide lunch. You will be given a lunch period around midday, the length of that lunch break is at the discretion of the instructor. Each of our locations is central and has food options close by. If you are unable to drive, we advise you to pack a lunch to bring with you to class."
                },
                {
                    question: "Is the Online DIP program accepted by courts?",
                    answer: "Sometimes. There are some county courts and judges that will not accept the online certificate of completion and require that the DIP class be taken in person. If you are taking the DIP class for an upcoming court date, we advise that you speak to your attorney before taking the online program. They can give you better advice on whether or not the online certificate will be accepted."
                },
                {
                    question: "What happens if I ignore the DMV letter?",
                    answer: "Your license will be suspended on the date stated in the DMV letter. There is no work-around and no excuse will be accepted by the DMV as to why you weren’t able to take the class on time."
                }
            ]
        },
        {
            title: "Re-Examination",
            questions: [
                {
                    question: "Can I leave early if I finish all of the work?",
                    answer: "No. You may not leave early, no matter how quickly you finish the work. Re-Exam is not meant to be a fun time. We are trying to prepare you to take the test at the DMV and to PASS it."
                },
                {
                    question: "If I wait until I am 18, then I won’t have to take re-exam to get my license?",
                    answer: "No. The requirement for re-exam never expires. If you have failed the exam 3 times while under 18, it will not disappear when you come of age."
                },
                {
                    question: "Can I take Re-Exam in my native language?",
                    answer: "Re-Exam is only taught in English and Spanish at this time. While the DMV offers the permit and knowledge tests in many languages, the re-exam program is only taught in Spanish and English."
                }
            ]
        },
        {
            title: "Driver's Education",
            questions: [
                {
                    question: "Can all students take Online Driver’s Education or is it only for home-school kids?",
                    answer: "All students can take Drivers Education online. While it was true some years ago that only home-schooled students could take the online program, this is no longer the case in the Commonwealth of Virginia."
                },
                {
                    question: "I found an online version of the 90 Minute Parent/Teen Course, will that be accepted?",
                    answer: "No student in Planning District 8 (Fairfax County, Loudon County, Arlington County, Prince William County and the cities of Alexandria, Fairfax, Falls Church, Manassas & Manassas Park) is permitted to take the 90 minute Parent Teen Course online. We will not accept any certificate for an online course, nor will the DMV. The Vadets online Parent/Teen video is not acceptable for anyone residing in Planning District 8. This information is available on the DMV Website, the FCPS website as well as our website. It is not permitted and will not be accepted."
                },
                {
                    question: "Don’t I have to take Driver’s Education before I can get a Learner’s Permit?",
                    answer: "No. You are not required to have any sort of training before getting a Learner’s Permit. Once you are 15 years and 6 months old, you may go to the DMV and take the Learner’s Permit test. The questions are based on the Drivers Manual that is available for free at every DMV. The only questions that appear on the test will be in the Drivers Manual. Public Schools often tell students that they have to take Drivers Education first, this is FALSE and is a persistent myth."
                },
                {
                    question: "Can I take the classroom books home and do some of the classwork at home?",
                    answer: "No. Students are not allowed to take materials home. They must complete the classroom course at the Driving Academy and complete their required hours in the classroom at either Tysons or Herndon."
                }
            ]
        },
        {
            title: "Adult Waiver Program",
            questions: [
                {
                    question: "Why can’t I do Adult Waiver without 12 hours of driving practice in the United States?",
                    answer: "The Adult Waiver program is not for new drivers. This program does not teach you to drive. It is for Adults who already have driving experience and who do not wish to wait the required 60 day period. If you do not know how to drive, the 60 day period is there so that you can learn the required skills to pass the DMV Road Test."
                },
                {
                    question: "The DMV told me that I don’t have to wait to get my license, they didn’t say anything about qualifying for the program.",
                    answer: "The DMV tells most people over 18 about the Adult Waiver Program. They do not know whether or not you will qualify for the program, they simply know that the option exists."
                },
                {
                    question: "How can you tell if I have 12 Hours of Experience?",
                    answer: "An inexperienced driver cannot hide their inexperience. AA Driving Academy Instructors are extremely well versed at recognizing and teaching inexperienced drivers. They will know, they will not allow you to continue in this program if you are not already an experienced driver."
                },
                {
                    question: "I don’t want to do the Road Test at the DMV.",
                    answer: "The Road Test that AA Driving Academy administers is the exact same as the one given by the DMV. We will not pass you because you have paid us money. You will not get an easier time because you paid money. It is literally the same test."
                }
            ]
        },
    ];

return <div>

<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2021/11/drivers-ed-class-2400-scaled.jpg')" }}
>
  <div className="relative text-center mt-24 sm:mt-28 md:mt-20 lg:mt-24 px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-20 text-white">
    FREQUENTLY ASKED QUESTIONS
    </h1>
  
  </div>
</div>


<div className="flex flex-col items-center bg-gray-100 p-6 md:p-10 min-h-screen space-y-6">
      {faqData.map((faq, index) => (
        <div key={index} className="w-full max-w-lg  mt-16 md:max-w-xl lg:max-w-3xl">
          <div onClick={() => setIsOpen(index)} className="cursor-pointer">
            <div className="flex justify-between items-center bg-[#002243] text-white px-3 py-2">
              <h1 className="text-lg md:text-xl font-medium">{faq.title}</h1>
              <i className="fa-solid fa-plus text-lg"></i>
            </div>
          </div>

          {/* Modal */}
          {isOpen === index && (
            <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto relative">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
                  onClick={() => setIsOpen(null)}
                >
                  ✖
                </button>

                <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-center">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.questions.map((q, i) => (
                    <p key={i}>
                      <strong>{q.question}</strong>
                      <br />
                      {q.answer}
                    </p>
                  ))}
                </div>

                {/* Close button at bottom */}
                <div className="mt-6 text-center">
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


    <div  style={{ position: "relative", width: "100%", height: "270px" }}>
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


