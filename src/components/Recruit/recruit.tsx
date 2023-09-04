import React from "react"
import { Link } from "gatsby"


const Recruit = () => {
  return (
    <section id="recruit" className="max-w-screen-xl mx-auto relative bg-white">
      <div className="absolute right-0 bottom-0 z-10 w-1/2">
        <img src="./FunctionalLab_files/ill_05.svg" alt="" />
      </div>
      <div className="relative z-20 p-8 bg-[#5dc1cf]">
        <h2 className="text-white">Recruit</h2>
        <div className="mt-4">
          <p className="text-lg text-white">共に働き、共に学ぶ。</p>
          <p className="mt-2 text-white">当社では、共にIT業界の現在そして未来を創造する仲間を募集しています。</p>
        </div>
      </div>
      <div className="relative z-30 p-8">
        <Link to="https://functional-inc.com/reqruit.html" className="inline-block px-4 py-2 text-white bg-[#5dc1cf] rounded">
          View More
        </Link>
      </div>
    </section>
  );
};

export default Recruit;