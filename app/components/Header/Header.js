"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [showNestedMenu, setShowNestedMenu] = useState(null);

  const menuItems = [
    { name: "HOME", url: "/" },
    {
      name: "COURSES",
      subMenu: [
        {
          name: "8HR Driver Improvement Program (D.I.P)",
          subMenu: [
            { name: "ClassRoom Course", url: "/Courses/ClassRoom" },
            { name: "Online Course", url: "/Courses/OnlineCourses" },
          ],
        },
        { name: "4HR RECKLESS/AGGRESIVE DRIVING COURSE", url: "/Courses/4hrReckless" },
        {
          name: "8HR Driver MANUAL/REEXAMINATION COURSE (3 EXAMS FAILS AT THE DMV)",
          url: "/Courses/8hrDrivers",
          subMenu: [
            { name: "Classroom Course", url: "/Courses/classRoom2" },
            { name: "Online Course", url: "/Courses/online" },
          ],
        },
        {
          name: "ADULT (18 & OVER) CLASSES",
          subMenu: [
            { name: "ADULT LICENSE WAIVER *NEW*", url: "/Courses/adultlicense" },
            { name: "PRIVATE LESSON (1 ON 1 TRAINING)", url: "/Courses/PrivateLesson" },
          ],
        },
        {
          name: "TEENAGER (UNDER 18) CLASSES ",
          subMenu: [
            { name: "TEEN LICENSE FULL PACKAGE PROGRAM (STEPS 1 & 2)", url: "/Courses/teen" },
            { name: "30HR TEEN DRIVER'S EDUCATION (ONLINE/SELF-PACED) STEP 1 OF 2", url: "/Courses/30Hr" },
            { name: "Behind the Wheel Training for Teens (Step 2 of 2)", url: "/Courses/BehindTheWheel" },
            { name: "PRIVATE LESSON (1 ON 1 TRAINING)", url: "/Courses/PrivateLesson" },
          ],
        },
      ],
    },
    { name: "DIP & RECKLESS SCHEDULE CALENDAR", url: "/dip-reckless" },
    { name: "YSSR EDUCATION LOCATIONS", url: "/locations" },
    { name: "TESTIMONIALS & REVIEWS", url: "/Reviews" },
    { name: "BLOG", url: "/BlogUS" },
    { name: "FREQUENTLY ASKED QUESTIONS", url: "/Questions" },
    { name: "CONTACT US", url: "/Contact" },
  ];

  const router = useRouter();

  return (
    <header className="w-full">
      <nav className="bg-black bg-opacity-50 absolute w-full text-white py-4 px-6 flex flex-wrap items-center justify-between">
        {/* Logo & Contact */}
        <div className="flex items-center w-full lg:w-auto justify-between">
          <img
            src="https://aadrivingacademy.net/wp-content/uploads/2021/10/logo-edited.png"
            className="mt-3 h-20 cursor-pointer"
            alt="All Round Driving School Logo"
            onClick={() => router.push("/")}
          />
          {/* Mobile Toggle Button */}
          <button
            className="xl:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

                {/* Contact Info */}
                <div
          style={{ top: "50px" }}
          className="hidden lg:flex gap-5 items-center w-full justify-center absolute left-1/2 transform -translate-x-1/2"
        >
          <div className="flex gap-5 items-center">
            <i style={{fontSize:"20px"}} className="fas fa-phone-alt transform rotate-90" aria-hidden="true"></i>
            <p className="text-lg font-semibold">
              <strong>Herndon’s Office:</strong>{" "}
              <a href="tel:+17034786800">
                (703) 478-6800
              </a>
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex justify-center gap-2">
  {[
    { icon: "facebook-f", color: "#4267b2", url: "https://facebook.com" },
    { icon: "twitter", color: "#55acee", url: "https://twitter.com" },
    { icon: "instagram", color: "#bc2a8d", url: "https://instagram.com" },
    { icon: "youtube", color: "#ff0000", url: "https://youtube.com" },
    { icon: "lock", color: "#333", url: "/Login" },
  ].map((social, index) => (
    <a
      key={index}
      href={social.url}
      target={social.url.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="w-[35px] h-[35px] flex items-center p-5 justify-center rounded-full"
      style={{ backgroundColor: social.color }}
      aria-label={`Visit our ${social.icon} page`}
    >
      <i className={`fa-${social.icon === "lock" ? "solid" : "brands"} fa-${social.icon}`} aria-hidden="true"></i>
    </a>
  ))}
</div>


        {/* Navigation Links */}
        <div className={`lg:flex ms-36 ps-10 ${isOpen ? 'block' : 'hidden'}`}>
  <ul className="flex flex-col lg:flex-row ms-3 ps-3 flex-wrap justify-start lg:justify-normal gap-3 font-semibold items-start text-left">
    {menuItems.map((item, index) => (
      <li
        key={index}
        className="list-none relative group"
        onMouseEnter={() => setShowSubMenu(index)}
        onMouseLeave={() => setShowSubMenu(null)}
      >
        {item.subMenu ? (
          <>
            <span className="cursor-pointer hover:text-gray-500">{item.name}</span>
            <ul
              className={`absolute left-0 lg:left-auto lg:right-0 mt-7 w-48 bg-blue-500 text-white shadow-md rounded-md transition-all duration-300 z-10 ${showSubMenu === index ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`}
            >
              {item.subMenu.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="px-3 py-1 text-sm hover:bg-blue-600 relative"
                  onMouseEnter={() => subItem.subMenu ? setShowNestedMenu(subIndex) : setShowNestedMenu(null)}
                  onMouseLeave={() => setShowNestedMenu(null)}
                >
                  {subItem.url ? (
                    <Link href={subItem.url} className="block text-white">{subItem.name}</Link>
                  ) : (
                    <span className="block">{subItem.name}</span>
                  )}
                  {subItem.subMenu && (
                    <ul
                      className={`absolute left-[-100px] lg:left-full top-0 w-40 bg-blue-500 text-white shadow-md rounded-md transition-all duration-300 z-20 ${showNestedMenu === subIndex ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`}
                    >
                      {subItem.subMenu.map((nestedItem, nestedIndex) => (
                        <li key={nestedIndex} className="px-3 py-1 text-sm hover:bg-blue-600">
                          <Link href={nestedItem.url} className="text-white">{nestedItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Link href={item.url} className="cursor-pointer hover:text-gray-500">{item.name}</Link>
        )}
      </li>
    ))}
  </ul>
</div>


      </nav>
    </header>
  );
}
