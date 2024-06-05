"use client";

import emailjs from "@emailjs/browser";

// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_052pesl", "template_xvyunw8", form.current, {
        publicKey: "_QrLmqrBF-L9lrxEP",
      })
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-auto sm:h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & forms */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let`s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* forms */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* group */}
            <div className="flex flex-col sm:flex-row gap-x-6 gap-y-6 sm:gap-y-0 w-full">
              <input
                type="text"
                name="user_name"
                placeholder="name"
                className="input"
              />
              <input
                type="email"
                name="user_email"
                placeholder="email"
                className="input"
              />
            </div>
            {/* <input type="text" placeholder="subject" className="input" /> */}
            <textarea
              name="user_message"
              placeholder="message"
              className="textarea"
            />
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              type="submit"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let`s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
