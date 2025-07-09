"use client";
import React from "react";
import contents from "@content/contact-us.json";
import Link from "next/link";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const { contact } = contents;
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("All input feilds are required");
      return;
    }

    setLoading(true);
    const serviceId = "service_xtkxf2m";
    const templateId = "template_xrxcmhh";
    const publicKey = "8KqbiaOJYk1Nelqca";

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        setLoading(false);
        toast.success("Message Sended Successfully", {
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        toast.error("Sorry an error occur", {
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-tcs-black rounded-3xl pt-20 sm:pt-[170px]  lg:flex  lg:h-[765px] text-tcs-white text-[40px] sm:text-5xl text-left mx-auto 2xl:justify-between  ">
        <div className="h-[270px] block lg:hidden w-full lg:-translate-x-10  2xl:-translate-x-28 sm:-translate-y-12">
          <video
            autoPlay
            loop
            muted
            className="size-full object-contain mx-auto"
          >
            <source src="/image/Banana.mov" type="video/quicktime" />
            <source src="/image/Banana.WEBM" type="video/webm" />
          </video>
        </div>
        <div className="lg:max-w-[500px] ml-0 lg:ml-24 3xl:ml-32 text-center lg:text-left leading-tight lg:tracking-wide">
          <div className="h-auto overflow-hidden">
            <div className="relative animate-plateUp">
              <h3>
                <span>
                  Let&apos;s discuss something{" "}
                  <span className="text-tcs-banana animate">cool</span>
                </span>
              </h3>
              <div className="flex justify-center lg:justify-start">
                <img
                  src={contact.title_icon}
                  className="size-11 my-1 sm:my-3 mr-3 relative spin"
                />
                <h3>
                  <span className="relative">together</span>
                </h3>
              </div>
            </div>
          </div>
          <div className=" lg:h-[400px] w-full -translate-x-10  2xl:-translate-x-28 -translate-y-12">
            <video
              autoPlay
              loop
              muted 
              className="size-full object-contain mx-auto hidden lg:block"
            >
              <source src="/image/Banana.mov" type="video/quicktime" />
            <source src="/image/Banana.WEBM" type="video/webm" />
            </video>
          </div>
        </div>
        <div className="bg-tcs-white max-w-[600px] mx-auto lg:mr-5 xl:mr-24 2xl:mr-24 3xl:mr-32 lg:ml-16 pb-4 lg:pb-0 lg:h-[85%] rounded-3xl  text-tcs-black animate__animated animate__fadeIn">
          <h3 className="text-xl mt-12 mx-8 pt-10 lg:pt-0 font-bold">
            Hang with us
          </h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-b-[2.5px] cursor-none font-normal outline-none focus:border-b-tcs-black focus:placeholder:text-tcs-black text-lg lg:text-xl border-b-tcs-light-gray ml-7 pl-1 h-12 mt-6 bg-tcs-white w-[90%]  mb-2"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-b-[2.5px] cursor-none font-normal outline-none focus:border-b-tcs-black focus:placeholder:text-tcs-black border-b-tcs-light-gray ml-7 pl-1 h-12 mt-6 mb-2 bg-tcs-white w-[90%] text-lg lg:text-xl"
          />
          <input
            type="text"
            name="message"
            id="message"
            value={message}
            placeholder="Your message"
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border-b-[2.5px] font-normal cursor-none outline-none focus:border-b-tcs-black focus:placeholder:text-tcs-black border-b-tcs-ligth-gray ml-7 pl-1 h-12 mt-6 bg-tcs-white w-[90%] text-lg lg:text-xl"
          />
          {loading ? (
            <button className="w-[95%]" disabled>
              <div className="flex justify-center lg:justify-start items-center rounded-full bg-tcs-black ml-4 lg:ml-8 mt-16 sm:mt-[108px] w-[95%] sm:w-48 h-14 lg:h-[60px] py-2 text-xl cursor-none px-5">
                <div className="animate-spin "></div>
                <span className="text-[22px] text-tcs-banana">Sending...</span>
              </div>
            </button>
          ) : (
            <Link
              className="r-transition bg-tcs-black group text-tcs-banana mt-16 sm:mt-[108px]  ml-4 lg:ml-8 flex justify-center lg:justify-start items-center rounded-full w-[90%] sm:w-48 sm:hover:w-60 h-14 lg:h-[60px] py-2 text-xl cursor-none px-5"
              href="contact-us"
              onClick={onSubmit}
            >
              <p className="font-extrabold text-[22px] whitespace-nowrap">
                Send Message
              </p>
              <div className="group-hover:flex relative bg-tcs-black items-center mx-1 overflow-hidden hidden ">
                <p className="r-transition-s bg-tcs-black ml-0 text-lg px-1.5 block">
                  |
                </p>
                <img
                  src={contact.forward_icon_banana}
                  className="w-4 bg-tcs-black mt-0.5 relative group-hover:animate-plateLeft"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
