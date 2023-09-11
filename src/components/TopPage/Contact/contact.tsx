import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-[27.7vw]">
      <h2 className="text-center text-[14.8vw] font-bold text-[#5dc1cf]">Contact</h2>
      <div className="px-[8%]">
        <p className="text-center text-[19px] mb-[5vw]">下記よりお問合せをよろしくお願い致します。</p>
        <form action="https://functional-inc.com/index.html#" method="post" className="">
          <div className="">
            <p className="text-[3.4vw] text-white font-bold w-[40%] h-[8.33vw] leading-[8.33vw] bg-main pl-[20px]">Name</p>
            <p className="w-full mb-[5vw]">
              <input type="text" id="name" name="name" className="w-full border-2 border-main text-[2.77vw] p-[5%]" />
            </p>
          </div>
          <div className="">
            <p className="text-[3.4vw] text-white font-bold w-[40%] h-[8.33vw] leading-[8.33vw] bg-main pl-[20px]">E-mail</p>
            <p className="w-full mb-[5vw]">
              <input type="email" id="email" className="w-full border-2 border-main p-[5%]" />
            </p>
          </div>
          <div className="">
            <p className="text-[3.4vw] text-white font-bold w-[40%] h-[8.33vw] leading-[8.33vw] bg-main pl-[20px]">Comment</p>
            <p className="w-full mb-[5vw]">
              <textarea id="comment" name="comment" className="w-full border-2 border-main p-[5%] h-60 text-[14px] resize-y"></textarea>
            </p>
          </div>
          <div className="">
            <input type="button" value="Submit" className="w-full bg-gradient-to-b from-[#96d7e0] to-main text-white text-[2.77vw] rounded-full cursor-pointer hover:opacity-90 font-semibold p-[5%]" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;