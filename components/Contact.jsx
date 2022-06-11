import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setName("");
    // setPhone("");
    // setEmail("");
    // setSubject("");
    // setMessage("");
  };

  return (
    <div id="contact" className="w-full lg:h-screen pt-10">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#94a3b8]">
          Contact
        </p>
        <h2 className="text-slate-50 py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-slate-900 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="text-slate-50 py-2">Victor Duran</h2>
                <p className="text-sm font-bold text-slate-50">
                  Front-End Developer
                </p>
                <p className="text-slate-50 py-4">
                  You can leave a message if you want to get in touch, I'll get
                  back to you as soon as possible.
                </p>
              </div>
              <div>
                <p className="pt-4 text-slate-50">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a href="https://www.linkedin.com/in/vudjj/" target="_blank">
                    <div className="rounded-full bg-slate-50 shadow-lg shadow-slate-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn size={30} className="text-slate-800" />
                    </div>
                  </a>
                  <a href="https://github.com/vudjzx" target="_blank">
                    <div className="rounded-full bg-slate-50 shadow-lg shadow-slate-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub size={30} className="text-slate-800" />
                    </div>
                  </a>

                  <a href="mailto:vudjzx@gmail.com" target="_blank">
                    <div className="rounded-full bg-slate-50 shadow-lg shadow-slate-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail size={30} className="text-slate-800" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-slate-900 rounded-xl lg:p-4">
            <div className="p-4 text-slate-50">
              <form
                onSubmit={handleSubmit}
                action="https://getform.io/f/5c8a1759-bf8e-4ea6-9ee7-764e1ff336fb"
                method="POST"
                className="text-slate-700"
                target="_blank"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-slate-50">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-slate-50">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-slate-50">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-slate-50">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-slate-50">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className="shadow-slate-800 w-full p-4 text-slate-50 mt-4 font-bold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg bg-slate-50 shadow-slate-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-slate-800" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
