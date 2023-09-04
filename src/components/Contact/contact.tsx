import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8">
      <h2 className="text-center text-4xl text-[#5dc1cf]">Contact</h2>
      <div className="mt-4">
        <p className="text-center">下記よりお問合せをよろしくお願い致します。</p>
        <form action="https://functional-inc.com/index.html#" method="post">
          <div className="flex flex-col mb-4">
            <p className="text-xl font-bold">Name</p>
            <input type="text" id="name" name="name" className="border-2 border-[#5dc1cf] p-2" />
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-xl font-bold">E-mail</p>
            <input type="email" id="email" className="border-2 border-[#5dc1cf] p-2" />
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-xl font-bold">Comment</p>
            <textarea id="comment" name="comment" className="border-2 border-[#5dc1cf] p-2 h-40"></textarea>
          </div>
          <div className="flex justify-center">
            <input type="button" value="Submit" className="bg-gradient-to-r from-[#96d7e0] to-[#5dc1cf] text-white rounded-full py-2 px-4 cursor-pointer hover:opacity-90" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;