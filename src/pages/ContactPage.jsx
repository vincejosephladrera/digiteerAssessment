import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";

const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_g0pgdcd", "template_v1udsxi", form.current, "jkv1zfeeBEBoj49k1").then(
      (result) => {
        alert("Form is successfully submitted");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="bg-[#234E8F] min-h-screen">
      <NavBar />
      <form
        ref={form}
        className="flex flex-col gap-5 w-[75%] mx-auto pt-[100px]"
        onSubmit={sendEmail}
      >
        <div className="flex flex-col">
          <label className="text-white text-[18px] bold">Name</label>
          <input
            type="text"
            required
            autoComplete="true"
            className="p-5"
            name="user_name"
            placeholder="e.g. Juan Dela Cruz"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-[18px] bold">Email</label>
          <input
            type="email"
            name="user_email"
            required
            autoComplete="true"
            className="p-5"
            placeholder="e.g. j_delacruz@gmail.com"
          />
        </div>
        <div className="flex flex-col items-start w-[100%]">
          <label className="text-white text-[18px] bold">Message</label>
          <textarea
            name="message"
            rows={10}
            className="p-5 w-[100%]"
            placeholder="Input your message here"
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="text-[#234E8F] text-[18px] p-5 bg-[#66ECBC] rounded-md lg:w-[250px] cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ContactPage;
