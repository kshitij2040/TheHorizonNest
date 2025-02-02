"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuroraBackground } from "../components/ui/aurora-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import { PinContainer } from "@/components/ui/3d-pin";
import { NavbarDock } from "@/components/ui/NavbarDock";
import { Tabs } from "@/components/ui/tabs";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Cover } from "@/components/ui/cover";
import { FaJava } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TbBrandLinkedin } from "react-icons/tb";
import  { useRef } from 'react';
import { FaRegSmileWink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


export default function Page() {

  useEffect(() => {
    AOS.init({

    })
  }, [])

  const content = [
    {
      title: "I am",
      description:
          "Passionate about technology, creativity, and solving real-world problems. Committed to transforming ideas into real-world innovations and using my skills to make a positive impact. In my free time, I enjoy staying updated with the latest advancements in technology, exploring the world, and pursuing creative hobbies like vocal practice, 3D modeling with Blender, and content creation for my budding YouTube channel.",
      content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
             <Image
            src="/mypic.png"
            width={250}
            height={250}
            className=" object-cover"
            alt="linear board demo"
          /> 
          </div>
      ),
  },
    {
      title: "My Goals",
        description:
            "I aim to continuously grow as a developer and an individual, embracing challenges that allow me to innovate and contribute to the tech industry. My ultimate goal is to create solutions that positively impact people's lives while expanding my knowledge and skill set. I also plan to resume my YouTube journey, sharing insights on technology, programming, and personal development.",
        content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/mypic.png"
            width={250}
            height={250}
            className=" object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Skills",
      description:
          "Proficient in web development with expertise in frameworks like Next.js and Angular. Skilled in crafting dynamic and responsive layouts, integrating animations, and ensuring seamless user experiences. Additionally, I have experience with tools like Blender for 3D modeling, and I enjoy learning and applying new technologies to solve complex problems.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
            <Image
            src="/mypic.png"
            width={250}
            height={250}
            className=" object-cover"
            alt="linear board demo"
          /> 
        </div>
      ),
    },
    {
      title: "My Projects",
      description:
          "I have worked on various projects, including 'HireLink,' a platform designed to simplify hiring processes. My projects reflect my dedication to building innovative and user-centric solutions. From dynamic web applications to creative visual designs, my work showcases a balance of functionality and creativity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
            src="/mypic.png"
            width={250}
            height={250}
            className=" object-cover"
            alt="linear board demo"
          /> 


        </div>
      ),
    },
  ];


  const ImageComponent = ({ src }) => (
    <Image
      src={src}
      alt=""
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );

  const projectSectionRef = useRef(null);

  const homeSectionRef = useRef(null);

  const meSectionRef = useRef(null);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScrollToHome = (e) => {
    e.preventDefault();
    if (homeSectionRef.current) {
      projectSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScrollToMe = (e) => {
    e.preventDefault();
    if (homeSectionRef.current) {
      meSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const tabs = [
    {
      title: "The Campus Web",
      value: "The Campus Web",
      url: "https://campusweb.example.com",
      content: (
        <div className="w-full overflow-hidden relative items-center h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         <p className="justify-start items-center flex">
            The Campus Web
            <a
              href="https://campusweb.example.com"
              target="_blank"
              className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium m-3 mt-2 text-white bg-black hover:bg-slate-800 rounded-full"
            >
              <FaExternalLinkAlt className="" />
            </a>
          </p>
          <ImageComponent src="/campusweb.png" />
        </div>
      ),
    },
    {
      title: "HireLink",
      value: "HireLink",
      url: "https://hirelink-brown.vercel.app/",
      content: (
        <div className="w-full overflow-hidden relative items-center h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="justify-start items-center flex">
            HireLink
            <a
              href="https://hirelink-brown.vercel.app/"
              target="_blank"
              className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium m-3 mt-2 text-white bg-black hover:bg-slate-800 rounded-full"
            >
              <FaExternalLinkAlt className="" />
            </a>
          </p>
        
          <ImageComponent src="/hirelink.png" />
        </div>
      ),
    },
    {
      title: "Robocon Website",
      value: "Robocon Website",
      url: "https://robocon.example.com",
      content: (
        <div className="w-full overflow-hidden relative items-center h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="justify-start items-center flex">
            Robocon Website
            <a
              href="https://robocon.example.com"
              target="_blank"
              className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium m-3 mt-2 text-white bg-black hover:bg-slate-800 rounded-full"
            >
              <FaExternalLinkAlt className="" />
            </a>
          </p>
          <ImageComponent src="/robocon.png" />
        </div>
      ),
    },
    {
      title: "ACM",
      value: "ACM",
      url: "https://acm.example.com",
      content: (
        <div className="w-full overflow-hidden relative items-center h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="justify-start items-center flex">
            ACM
            <a
              href="https://acm.example.com"
              target="_blank"
              className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium m-3 mt-2 text-white bg-black hover:bg-slate-800 rounded-full"
            >
              <FaExternalLinkAlt className="" />
            </a>
          </p>
          <ImageComponent src="/acm.png" />
        </div>
      ),
    },
    
    {
      title: "Random",
      value: "random",
      url: "https://random.example.com",
      content: (
        <div className="w-full overflow-hidden relative items-center h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="justify-start items-center flex">
            Random tab
            <a
              href="https://random.example.com"
              target="_blank"
              className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium m-3 mt-2 text-white bg-black hover:bg-slate-800 rounded-full"
            >
              <FaExternalLinkAlt className="" />
            </a>
          </p>
          <ImageComponent src="/random.webp" />
        </div>
      ),
    },
  ];
  

  

  const projects = [
    {
      title: "Javascript",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "express.js",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "Typescript",
    },
    {
      title: "React.js",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Next.js",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Github",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home", // This will act as a unique identifier for projects
      onClick: handleScrollToHome,
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects", // This will act as a unique identifier for projects
      onClick: handleScrollToProjects, // Attach scroll handler
    },,
    {
      title: "Know Me",
      icon: <FaRegSmileWink className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#Me",
      onClick: handleScrollToMe,
    },
    {
      title: "X",
      icon: <FaXTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/kjmishraa",
    },
    {
      title: "Linkedin",
      icon: <TbBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/kshitij2040/",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/kshitij2040",
    },

    {
      title: "Instageam",
      icon: <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.instagram.com/kjmishraa/",
    },
  ];


  return (
    <>
      {/* Fixed Background */}
      <AuroraBackground className="fixed inset-0 z-0" />

      {/* Navbar */}
      <div className="h-8">
        <NavbarDock items={links} />
      </div>

      {/* Floating Dock */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[1000]">
        <FloatingDock
          mobileClassName="translate-y-16 translate-x-40"
          items={links}
        />
      </div>

      {/* Main Layout Container */}
      <div
        className="relative z-10 h-screen no-scrollbar  md:overflow-x-auto snap-mandatory  md:snap-x flex flex-col md:flex-row"
      >

        {/* Sections */}
        <motion.div
         ref={homeSectionRef}
        id="home"
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="section flex-shrink-0 w-screen h-screen snap-center flex items-center md:my-0 my-24 justify-center px-8"
        >
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
            {/* Text Section */}
            <div className="flex flex-col pt-20 md:p-28 items-center sm:items-start md:items-start text-start justify-start">
              <div className="text-2xl md:text-5xl font-bold text-white">
                Kshitij Welcomes You!
              </div>
              <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
                And this, is chemical burn.
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="flex flex-col rounded-full gap-20 items-center ">
            <div className="mt-8">
          <Image
            className="rounded-full hover:scale-105 duration-500 border-black"
            src="/mypic2.png"
            alt=""
            width={500}
            height={320}
            quality={100}
            priority
          />
          
        </div>
        {/* <div className="h-11 w-11 scale-150 justify-center items-end flex">
            <IoIosArrowForward/>
            </div> */}
            </div>
           
           
          </div>
        </motion.div>

        <motion.div
        ref={meSectionRef}
        id="Me"
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="section flex-shrink-0 w-screen h-screen snap-center flex items-center justify-center px-24"
        >
          <div className="flex-shrink-0 w-screen md:mb-0 mb-28 h-screen snap-center flex  items-center justify-center">
            <div className="max-w-[40] w-full grid grid-cols-1 md:grid-cols-3 mx-auto px-8">
              {/* Left Section */}
              <div data-aos="fade-zoom-in" className="flex items-center justify-center col-span-1">
                
                  <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold text-white tracking-wider w-full mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text ">
                    <Cover>KNOW ME</Cover>
                  </h1>
                
              </div>

              {/* Right Section */}
              <div className="col-span-2 scale-110 flex items-center justify-center">
                <StickyScroll content={content} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="section flex-shrink-0 w-screen h-screen snap-center flex md:mt-0 mt-52 items-center justify-center px-4"
        >
          <div className="flex-shrink-0 w-screen h-screen snap-center flex items-center justify-center">
            <div className="max-w-full w-full grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-4 md:px-8">
              {/* Left Section */}
              <div
                data-aos="fade-zoom-in"
                className="flex items-center justify-center col-span-1"
              >
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold text-white tracking-wider w-full mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text">
                  <Cover>SKILL</Cover>
                </h1>
              </div>

              {/* Right Section */}
              <div className="col-span-2 flex items-center justify-center">
                <HoverEffect items={projects} />
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div
        ref={projectSectionRef}
        id="projects" 
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          
          className="section flex-shrink-0 w-screen h-screen snap-center flex items-center justify-center px-4"
        >
          <div className="flex-shrink-0 w-screen h-screen snap-center flex items-center justify-center">
            <div className="max-w-full w-full grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-4 md:px-8">
              {/* Left Section */}
              <div
                data-aos="fade-zoom-in"
                className="flex items-center justify-center col-span-1"
              >
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold text-white tracking-wider w-full mx-auto text-center mt-80 md:mt-6 relative z-20 py-6 bg-clip-text">
                  <Cover>PROJECT</Cover>
                </h1>
              </div>

              {/* Right Section */}
              <div
                className="col-span-2 flex items-center justify-center h-[20rem] md:h-[40rem] [perspective:1000px] relative flex-col max-w-5xl mx-auto w-full my-20 md:my-40"
              >
                <Tabs tabs={tabs} />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </>
  );
}
