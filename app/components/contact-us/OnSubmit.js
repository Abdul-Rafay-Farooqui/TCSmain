"use client";
import React from "react";
import content from "@content/contact.json";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = ({ redirectFromHome = false, togglemodal }) => {
  const { subtitle, info } = content.contactForm;

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
    const templateId = "template_dscu8ao";
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
      {redirectFromHome && (
        <button
          onClick={togglemodal}
          type="button"
          class="text-gray-400 bg-transparent absolute top-2 right-2 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  hover:text-white"
          data-modal-hide="default-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      )}
      <div
        className={`grid lg:grid-cols-2 font-proza-libre gap-10 px-4 ${
          redirectFromHome ? `pt-2` : `pt-20`
        }`}
      >
        <div className=" text-center mx-auto px-5 sm:px-0 lg:text-left max-w-lg lg:max-w-sm ">
          <p className=" font-semibold text-sm text-th-orange pb-1">
            Our Contact
          </p>
          <h1 className=" text-[39px] font-bold pb-5">
            Get in <span className="text-th-orange">Touch!</span>
          </h1>

          <h2 className="text-[11px] pb-5">{subtitle}</h2>
          <div className="flex justify-between lg:block ">
            {info.map((item, index) => (
              <div
                key={index}
                className="block md:flex content-start lg:gap-3 pb-5"
              >
                <div className="h-6 w-full md:w-6 md:mr-2 pt-[2px]">
                  <img
                    className="size-full object-contain"
                    src={item.icon}
                  ></img>
                </div>
                <div>
                  <p className="text-sm mt-3 md:mt-1 lg:mt-0 lg:text-xl text-center md:text-left font-semibold pt-[2px] pb-2">
                    {item.text}
                  </p>
                  <p className="text-[10px] lg:text-[12.5px]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="r-transition rounded-lg mx-10 lg:mx-0 flex flex-col items-center border-[3px] border-th-blue p-8">
          <input
            className="bg-transparent rounded-lg text-th-white text-xs w-full border-2 border-th-blue p-3 mb-3 placeholder:text-th-white"
            type="text"
            placeholder="Full Name*"
            value={name}
            autoComplete="new-password"
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <input
            className="bg-transparent rounded-lg text-th-white text-xs w-full border-2 border-th-blue p-3  mb-3 placeholder:text-th-white"
            type="email"
            value={email}
            placeholder="Email*"
            autoComplete="new-password"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <textarea
            className="bg-transparent rounded-lg text-th-white text-xs w-full border-2 border-th-blue p-3 mb-3 placeholder:text-th-white"
            placeholder="Your Message"
            value={message}
            rows={6}
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {loading ? (
            <button
              className=" rounded-lg font-poppins bg-th-orange text-sm font-bold text-th-dark-blue py-2 px-4"
              disabled
            >
              <div className="flex items-center justify-center">
                <div className="animate-spin mr-2 border-t-2 border-white border-solid rounded-full w-5 h-5"></div>
                <span>Sending...</span>
              </div>
            </button>
          ) : (
            <button
              type="button"
              onClick={onSubmit}
              className="rounded-lg font-poppins bg-th-orange text-sm font-bold text-th-dark-blue py-2 px-4"
            >
              <span>Send Message</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default ContactForm;
