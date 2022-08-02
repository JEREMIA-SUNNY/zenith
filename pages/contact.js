import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Contract Manufacturing");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState(false);
  const [visible, setVisible] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("working");

    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("interest", interest);
    console.log("info", info);

    if (!name || !email || !phone || !info) {
      return;
    }

    const response = await fetch(
      "https://prejyihun6edtdi4tyfymegotm0sbtxi.lambda-url.ap-south-1.on.aws/",
      {
        method: "POST",
        headers: {},
        body: JSON.stringify({ name, email, phone, info, interest }),
      }
    );

    console.log("response", response);

    if (response.status === 200) {
      setName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setInfo("");
      setMessage(
        "Your message is sent. We'll get back to you at the earliest!"
      );
    } else {
      console.log(JSON.stringify(response));
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeInfo = (e) => {
    setInfo(e.target.value);
  };
  const changeInterest = (e) => {
    setInterest(e.target.value);
  };
  if (name && email && phone && info && interest) {
    console.log("iam visible");
  }

  return (
    <>
      <section className="pt-12 pb-12 text-black bg-lightgray">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide text-green-900 md:ml-4 text-center">
            Contact
          </h1>

          <div className="flex flex-col-reverse md:flex-row justify-between items-start rounded pt-8 ">
            <d iv className="md:w-2/5 md:mt-0 mt-10 w-full">
              <p className="text-2xl font-semibold  md:ml-4">Zenith Energy</p>
              <div className="grid gap-5 grid-cols-2 ">
                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">ZENITH ENERGY SERVICES PVT</p>
                  <p> LTD , 3rd floor, Ramky Grandiose ,</p>
                  <p>Gachibowli, Hyderabad -500032,</p>

                  <p>+91 9988774455</p>
                  <p></p>
                </div>
              </div>
            </d>
            <div className="md:w-1/2 w-full">
              <div className="md:pl-12 md:pt-0 pt-12">
                <h2 className="text-2xl text-black ">Write to us</h2>
                <form className="mt-8" onSubmit={sendMessage}>
                  <div className="lg:grid flex flex-col justify-center lg:grid-cols-2 gap-6">
                    <label className="block ">
                      <span className="text-black">Name</span>
                      <input
                        type="text"
                        className="block bg-white w-full lg:h-[47px] rounded-sm   focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                        placeholder=""
                        value={name}
                        onChange={changeName}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black">Email</span>
                      <input
                        type="email"
                        className=" block w-full rounded-sm  bg-white   lg:h-[47px]  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                        placeholder=""
                        value={email}
                        onChange={changeEmail}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black">Phone</span>
                      <input
                        type="tel"
                        className=" block bg-white  rounded-sm w-full lg:h-[47px] border focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                        placeholder=""
                        value={phone}
                        onChange={changePhone}
                      />
                    </label>

                    <label className="block">
                      <span className="text-black">
                        What are you looking for?
                      </span>
                      <select
                        onChange={changeInterest}
                        className=" block w-full  bg-white  lg:h-[47px] rounded-sm border-black focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                      >
                        <option>Energy Savings</option>
                        <option>Solar Energy </option>
                        <option>Water Management</option>
                        <option> Carbon Trading</option>

                        <option>Others</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label className="block">
                      <span className="text-black">
                        How Did You Hear About us?
                      </span>
                      <select
                        onChange={changeInterest}
                        className=" block w-full  bg-white  lg:h-[47px] rounded-sm border-black focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                      >
                        <option>Search Engine(Google,Yahoo,etc)</option>
                        <option> Recommended By Friends </option>
                        <option>Social Media</option>
                        <option> Blog Or Publication </option>

                        <option>Others</option>
                      </select>
                    </label>
                  </div>
                  <label className="block mt-6">
                    <span className="text-black">Additional details</span>
                    <textarea
                      className="mt-1 block w-full bg-white  lg:h-28 rounded-sm border-black focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                      rows="3"
                      value={info}
                      onChange={changeInfo}
                    ></textarea>
                  </label>
                  <div className="w-full flex justify-center items-center">
                    {message ? (
                      <p className="text-green text-md font-semibold pt-6 ">
                        {message}
                      </p>
                    ) : (
                      <button
                        className={`w-32 mt-6 bg-orange1 text-black font-bold text-xs   p-3 rounded-sm transition-all ${
                          name && email && phone && info && interest
                            ? "opacity-100"
                            : "opacity-25"
                        }`}
                      >
                        SEND
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30450.31999417214!2d78.33045997910156!3d17.445828600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973fa6843ec7%3A0x255a0d8737e35814!2sZenith%20Energy%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1659440207093!5m2!1sen!2sin"
          width="100%"
          height="600"
          
        
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
{
  /* <button className={`w-32 mt-6 bg-orange text-black font-bold text-xs   p-3 rounded-sm transition-all ${name && email && phone && info && interest?"opacity-100":"opacity-25"}`}>
SEND
</button> */
}
