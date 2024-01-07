"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Copyright from "./Copyright";
import { fadeIn } from "../../../variant";
import { Link } from "react-scroll";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Your response has been submitted successfully");
    setEmail("");
  };
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14 "
        >
          <div className="flex flex-col flex-1 gap-y-8 ">
            <Link
              to={"home"}
              className="cursor-pointer"
              smooth={true}
              spy={true}
            >
              <Image src={"/icons/logo.svg"} width={200} height={200} />
            </Link>
            <div className="text-secondary">Lorem 100 the great scientist</div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">+91-99xxxxxxxx</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">demo@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col  xl:items-center">
            <div>
              <h3 className="font-bold h3 mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold h3 mb-8">Working hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>

              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold h3 mb-8">Newsletter</h3>
            <div className="mb-9 text-secondary ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </div>
            <form className="flex gap-x-2 h-14 ">
              <input
                type="text"
                placeholder="your email"
                className="outline-none bg-white h-full 
              border rounded-lg pl-4 focus:border-accent "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit "
                className="btn btn-sm btn-accent w-24"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
