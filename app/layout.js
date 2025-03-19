import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ChatModal from "./components/ChatModal";
import ChatWidget from "./components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Education Platform | YSSR EDUCATION",
  description:
    "Join YSSR EDUCATION, the best platform for learning. We offer high-quality courses for skill development and professional training.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
  {/* ✅ Title and Meta Description */}
  <title>Best Education Platform | YSSR EDUCATION</title>
  <meta
    name="description"
    content="Join YSSR EDUCATION, the best platform for learning. We offer high-quality courses for skill development and professional training."
  />
  <meta
    name="keywords"
    content="Education, Online Learning, Skill Development, Professional Courses, Best Learning Platform"
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="YSSR EDUCATION" />
  <link rel="canonical" href="https://www.yssreducation.com/" />

  {/* ✅ Open Graph for Social Media */}
  <meta property="og:title" content="Best Education Platform | YSSR EDUCATION" />
  <meta
    property="og:description"
    content="Enhance your skills with YSSR EDUCATION. We offer professional courses for career growth and personal development."
  />
  <meta
    property="og:image"
    content="https://yourwebsite.com/path-to-your-logo.png"
  />
  <meta property="og:url" content="https://www.yssreducation.com/" />
  <meta property="og:type" content="website" />

  {/* ✅ Twitter Card for better social media sharing */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Best Education Platform | YSSR EDUCATION" />
  <meta
    name="twitter:description"
    content="Join YSSR EDUCATION for top-quality courses and professional learning programs."
  />
  <meta
    name="twitter:image"
    content="https://yourwebsite.com/path-to-your-logo.png"
  />

  {/* ✅ Google Schema Markup */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "YSSR EDUCATION",
      "url": "https://www.yssreducation.com/",
      "logo": "https://yourwebsite.com/path-to-your-logo.png",
      "description": "Join YSSR EDUCATION for professional training and online learning courses.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-123-456-7890",
        "contactType": "customer service",
        "areaServed": "Worldwide",
        "availableLanguage": "English"
      }
    })}
  </script>
</Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {children}
        {/* <ChatModal key={4} /> */}
        <ChatWidget key={666} />

        <Footer></Footer>
      </body>
    </html>
  );
}
