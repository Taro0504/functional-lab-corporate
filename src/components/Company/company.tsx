import React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";



const Company = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <section id="company" className="py-12 bg-gray-200">
      <h2 className="text-4xl text-center text-[#5dc1cf] font-future">Company</h2>
      <div className="container mx-auto">
        <h3 className="text-3xl mt-4">FunctionalLabの特徴</h3>
        <p className="text-lg mt-2">
          エンジニアの成長を促進する制度を用意しています。
        </p>

        <div className="flex flex-wrap mt-8">
          <div className="w-1/3 p-4">
            <div className="relative">
              <StaticImage src="../../images/Hero_bg_01.svg" alt="" />
              <span className="absolute top-0 left-0 text-white">Feature-01</span>
            </div>
            <h4 className="text-2xl mt-4">ベース還元率70％、最大85%</h4>
            <ul className="list-disc list-inside mt-2">
              <li>業務外の行動を申告することで還元率アップ</li>
            </ul>
            <p className="text-base mt-4">
              エンジニア一人ひとりの行動や成果に対し、適切な評価と報酬を提供します。
            </p>
            {/* 省略 */}
          </div>
          {/* 省略 */}
        </div>

        <div className="mt-12">
          <h3 className="text-3xl">How it works?</h3>
          <p className="text-lg mt-2">
            最新のWeb技術を駆使したシステム開発を中心に、エンジニア一人ひとりのスキルを活かせます。
          </p>
          {/* 省略 */}
        </div>

        <div className="mt-12">
          <button onClick={toggleAccordion} className="text-3xl">
            Welfare
          </button>
          {isOpen && (
            <div className="mt-4">
              <p>エンジニアのスキルアップ、ワークライフバランス形成の実現のための要素をご用意しています。</p>
              {/* 省略 */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Company;