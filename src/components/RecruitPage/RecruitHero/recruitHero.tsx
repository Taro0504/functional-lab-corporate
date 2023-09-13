// Gatsby.js + Tailwind CSS + TypeScript
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const RecruitHero: React.FC = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 w-[80%] h-[43.5vw] overflow-hidden">
        <div className="h-[46vw] bg-gradient-to-t to-main from-base"></div>
      </div>
      <h2 className="relative font-bold z-[1] text-[14vw] text-base text-center pt-[16.6vw]">Recruit</h2>

      <div className="p-recruit__box">
        <div className="relative bg-gray z-[2] w-full py-[9.25vw] mt-[27vw] bg-rec">
          <div className="relative z-[3] ml-0 bg-gradient-to-l from-lightnavy to-darknavy">
            <div className="py-[12vw] px-[14vw]">
              <p className="text-[3.14vw] font-semibold leading-[5.5vw] text-base">FunctionalLabのミッションは大きく以下2つになります。</p>
              <p className="text-[3.14vw] font-semibold leading-[5.5vw] text-base">・IT業界で働くエンジニアの待遇と地位の向上に貢献する</p>
              <p className="text-[3.14vw] font-semibold leading-[5.5vw] text-base">・エンジニアの成長を促進し社内外に評価されるエンジニアを輩出する。</p>
              <br className="spOnly" />
              <p className="text-[3.14vw] font-semibold leading-[5.5vw] text-base pt-[1.85vw]">
                そのため、業務時間外のインプットやアウトプットも評価し還元率をアップする仕組みを用意しています。
                <br className="pcOnly" />
                勉強会の開催やOSS活動など社内だけではなく社外での行動も評価にもつながるため今後のキャリアで有利に働くことになります。
              </p>
              <br className="spOnly" />
              <p className="text-[3.14vw] font-semibold leading-[5.5vw] text-base pt-[1.85vw]">
                また、案件選択制や単価評価制度を導入しているため社外の評価が上がれば、
                <br className="pcOnly" />
                より魅力的なプロジェクトで高単価なプロジェクトへ参加できる確率が上がります。
                <br />
                より高単価ならば自身の収入も上がるため、
                <br className="pcOnly" />
                技術力も収入もより高みを目指せることがFunctionalLabで働くメリットです。
              </p>
              <div className="absolute z-[4] w-[1px] bg-main top-0 left-0 h-[24.8vw] ml-[6.5vw]  c-line01 c-line"></div>
              <div className="absolute z-[4] w-[1px] bg-main top-0 left-0 h-[18.5vw] mt-[-4.5vw] ml-[6.5vw] rotate-[25deg] c-line02 c-line"></div>
              <div className="absolute z-[4] w-[1px] bg-main right-0 bottom-0 h-[24.8vw] mr-[6.5vw] c-line03 c-line"></div>
              <div className="absolute z-[4] w-[1px] bg-main right-0 bottom-0 h-[18.5vw] mr-[6.5vw] mb-[-2.77vw] rotate-[25deg] c-line04 c-line"></div>
              <div className="absolute top-0 right-[50%] w-[35.6vw] mt-[-36.1vw] translate-x-[50%]">
                <StaticImage src="../../../images/ill_06.svg" alt="" className="w-full max-w-full align-middle"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitHero;
