import React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";



const Company = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <section id="company" className="py-12 bg-[#f2f2f2]">
      <h2 className="text-[14.8148148148vw] font-bold text-left text-main font-future mx-auto p-[8%] max-w-screen-xl">Company</h2>
      <div className="relative container mx-auto max-w-screen-xl">
        <h3 className="relative text-head3 mt-[6vw] px-[8%] text-main ml-[6.5vw] text-left
          before:content-[''] before:bg-sub before:w-[3.7037037037vw] before:h-[3.7037037037vw] 
          before:absolute before:rounded-full before:top-1/2 before:left-0">
          FunctionalLabの特徴
        </h3>
        <p className="text-[3.2vw] mt-2 px-[8%]">
          エンジニアの成長を促進する制度を用意しています。
        </p>

        <div className="bg-white mt-8 ">
          <div className="p-4">
            <div className="relative">
              <StaticImage src="../../images/ill_02.svg" alt="" />
            </div>
            <span className="text-main font-bold text-[2.8vw]">Feature-01</span>
            <h4 className="text-head4 font-bold mt-4">ベース還元率70％、最大85%</h4>
            <ul className="text-[4.1vw] list-none mt-2">
              <li className="before:content-[''] before:inline-block before:bg-orange before:w-[13px] before:h-[13px]
                before:relative before:rounded-full before:-top-[2px] before:left-0 before:mr-[13px]">
              業務外の行動を申告することで還元率アップ</li>
            </ul>
            <p className="text-[3.4vw] mt-6 leading-paragraph">
              エンジニア一人ひとりの行動や成果に対し、適切な評価と報酬を提供します。
              <br />
              ※還元率には会社負担分の社会保険料を含みます。
            </p>
            <div className="p-8">
              <h5 className="text-[#5dc1cf] text-[5.5vw] mb-4">還元率アップ例</h5>
              <div className="p-4">
                <div className="">
                  <div className="py-2">
                    <ul className="list-none">
                      <li className="border-b border-gray text-[3vw] pt-[1.4vw] pb-[2.7vw]">書籍などで学習</li>
                      <li className="border-b border-gray text-[3vw] pt-[1.4vw] pb-[2.7vw]">技術記事や動画の投稿</li>
                      <li className="border-b border-gray text-[3vw] pt-[1.4vw] pb-[2.7vw]">勉強会の開催や登壇、スタッフとして参加</li>
                      <li className="border-b border-gray text-[3vw] pt-[1.4vw] pb-[2.7vw]">OSS活動</li>
                      <li className="border-b border-gray text-[3vw] pt-[1.4vw] pb-[2.7vw]">書籍の執筆</li>
                      <li className="border-b border-gray text-[3vw] pt-[1.4vw] pb-[2.7vw]">社内外エンジニアへのメンター</li>
                      <li className="text-[3vw] pt-[1.4vw] pb-[2.7vw]">エンジニアコミュニティの運営</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="relative">
              <StaticImage src="../../images/ill_02.svg" alt="" />
            </div>
            <span className="text-main font-bold text-[2.8vw]">Feature-02</span>
            <h4 className="text-head4 font-bold mt-4">案件選択制と単価評価制度</h4>
            <ul className="text-[4.1vw] list-none mt-2 font-bold">
              <li className="before:content-[''] before:inline-block before:bg-orange before:w-[13px] before:h-[13px]
                before:relative before:rounded-full before:-top-[2px] before:left-0 before:mr-[13px]">
              複数案件から、目標とするキャリアに沿った案件をエンジニアが選択</li>
              <li className="before:content-[''] before:inline-block before:bg-orange before:w-[13px] before:h-[13px]
                before:relative before:rounded-full before:-top-[2px] before:left-0 before:mr-[13px]">
              契約更新の判断はエンジニアが決定</li>
              <li className="before:content-[''] before:inline-block before:bg-orange before:w-[13px] before:h-[13px]
                before:relative before:rounded-full before:-top-[2px] before:left-0 before:mr-[13px]">
              単価など案件の条件はエンジニアに公開</li>
            </ul>
            <p className="text-[3.4vw] mt-6 leading-paragraph">
              エンジニア自身のスキルやキャリア・特性に合った案件を本人が選ぶことが出来ます。お客様からいただいた単金に基づき適切に評価。エンジニアのビジョン実現のために、私達はエンジニアファーストを追求します。
            </p>
          </div>
          <div className="p-4">
            <div className="relative">
              <StaticImage src="../../images/ill_02.svg" alt="" />
            </div>
            <span className="text-main font-bold text-[2.8vw]">Feature-03</span>
            <h4 className="text-head4 font-bold mt-4">FunctionalLabの働き方</h4>
            <ul className="text-[4.1vw] list-none mt-2 font-bold">
              <li className="before:content-[''] before:inline-block before:bg-orange before:w-[13px] before:h-[13px]
                before:relative before:rounded-full before:-top-[2px] before:left-0 before:mr-[13px]">
              副業希望する社員に副業案件を紹介</li>
              <li className="before:content-[''] before:inline-block before:bg-orange before:w-[13px] before:h-[13px]
                before:relative before:rounded-full before:-top-[2px] before:left-0 before:mr-[13px]">
              フレックス勤務制を採用、フルリモートも可能</li>
              <li className="before:content-[''] before:inline-block before:bg-orange before:w-[13px] before:h-[13px]
                before:relative before:rounded-full before:-top-[2px] before:left-0 before:mr-[13px]">
              待機時の月額100%完全保証</li>
            </ul>
            <p className="text-[3.4vw] mt-6 leading-paragraph">
              エンジニアにとって働きやすい環境を整える事で、私達は社員の自己実現をサポートします。エンジニアにとって最も働きやすいSES企業であることを目指します。
            </p>
          </div>
          {/* 省略 */}
        </div>

        <div className="mt-12 p-4">
          <h3 className="relative text-head3 mt-[6vw] px-[8%] text-main ml-[6.5vw] text-left
            before:content-[''] before:bg-sub before:w-[3.7037037037vw] before:h-[3.7037037037vw] before:absolute 
            before:rounded-full before:top-1/2 before:left-0">
              How it works?</h3>
          <p className="text- mt-2">
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