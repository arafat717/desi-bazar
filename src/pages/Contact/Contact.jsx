import { Helmet } from "react-helmet-async";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import img from "../../../public/vector-line.png";
import "./Contact.css";
import { CiLocationOn } from "react-icons/ci";
import Cover from "../../components/Cover";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Online Bazar - Contact</title>
      </Helmet>
      <Cover page="Contact"></Cover>
      <div className="w-full my-20 md:px-20 px-2">
        <div className="flex flex-col md:flex-row gap-10 justify-center ">
          <div className="md:w-1/2 w-full">
            <h1 className="font-bold text-2xl">Contact Information</h1>
            <p className="font-semibold text-gray-400 my-4">
              Fill the form below or write us .We will help you as soon as
              possible.
            </p>
            <div className="flex gap-8 flex-col md:flex-row justify-center items-center">
              <div className="border border-green-600 rounded-md w-72 h-48 flex justify-center items-center text-center">
                <div>
                  <MdPhoneInTalk className="border border-green-600 size-10 p-2 rounded-full text-green-600 ml-10"></MdPhoneInTalk>
                  <h5 className="my-3 text-xl font-semibold">Phone</h5>
                  <p className="font-semibold">+8801972041006</p>
                </div>
              </div>
              <div className="border border-green-600 rounded-md w-72 h-48 flex justify-center items-center text-center">
                <div>
                  <p>
                    <IoMdMail className="border border-green-600 size-10 p-2 rounded-full text-green-600 ml-[75px]"></IoMdMail>
                  </p>
                  <h5 className="my-3 text-xl font-semibold">Email</h5>
                  <p className="font-semibold">arafatjibon33@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-5 mt-7 rounded-md">
              <div className=" mt-5 text-gray-900 flex items-center gap-4">
                <CiLocationOn className="text-4xl border border-green-600 p-2 rounded-full text-green-600"></CiLocationOn>
                <div>
                  <span className="font-bold text-xl">Address:</span>
                  <p className="text-gray-400">
                    2140 W Thunderbird Rd, Phoenix, Arkansas 85023, United
                    States
                  </p>
                </div>
              </div>
              <div className="my-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275301.79338701285!2d89.88791159284378!3d24.959579734090255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d67552cd9be5%3A0x5f5a1e73907e02f1!2sSherpur%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1722410846134!5m2!1sen!2sbd"
                  width="100%"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-3 md:p-10 shadow-2xl ">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Get In Touch</h1>
                <img src={img} alt="" />
              </div>
              <div className="text-gray-400">
                <form action="">
                  <div className="mt-5">
                    <label className="text-[18px]" htmlFor="name">
                      Name*
                    </label>
                    <input
                      className="border border-green-300 focus:outline-none p-3 rounded-md w-full my-2"
                      type="text"
                      name=""
                      id=""
                      placeholder="Name"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="text-[18px]" htmlFor="email">
                      Email*
                    </label>
                    <input
                      className="border border-green-300 focus:outline-none p-3 rounded-md w-full my-2"
                      type="email"
                      name=""
                      id=""
                      placeholder="user@gmail.com"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="text-[18px]" htmlFor="subject">
                      Subject*
                    </label>
                    <input
                      className="border border-green-300 p-3 rounded-md w-full my-2 focus:outline-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="text-[18px]" htmlFor="message">
                      Message*
                    </label>
                    <textarea
                      className="border border-green-300 p-3 focus:outline-none rounded-md w-full my-2"
                      id="comments"
                      name="comments"
                      style={{
                        height: "150px",
                      }}
                      placeholder="Write a message........"
                    />
                  </div>
                  <div className="relative -mt-5">
                    <button className="bg-green-600 button-form w-full">
                      <span className="text-sm sm:text-[14px] font-semibold">
                        Send Now
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
