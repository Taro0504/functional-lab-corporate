import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const RecruitHero = () => {
  return (
    <div className="bg-white">
      <div className="absolute top-0 right-0 w-4/5 h-[43.5vw] overflow-hidden">
        <div className="h-[46.3vw] bg-gradient-to-t from-transparent via-[#87D1DB] to-[#5DC1CF]"></div>
      </div>
      <h2 className="text-center text-[11.1vw] font-bold">Recruit</h2>
      <div className="relative z-10 w-full p-[9.3vw] mt-[26.9vw] bg-[#f2f2f2]">
        <div className="relative z-20 p-[12vw] bg-gradient-to-r from-[#043975] via-[#043975] to-[#001E43]">
          <div className="text-white text-[3.1vw] font-semibold leading-[5.6vw]">
            <p>FunctionalLabのミッションは大きく以下2つになります。</p>
            <p>・IT業界で働くエンジニアの待遇と地位の向上に貢献する</p>
            <p>・エンジニアの成長を促進し社内外に評価されるエンジニアを輩出する。</p>
            <p className="pt-[1.9vw]">
              そのため、業務時間外のインプットやアウトプットも評価し還元率をアップする仕組みを用意しています。
            </p>
            <div className="absolute top-0 right-1/2 w-[35.6vw] mt-[-36.1vw] transform translate-x-1/2">
              <StaticImage src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitHero;