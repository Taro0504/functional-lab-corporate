import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const EntryForm: React.FC = () => {
  return (
    <section id="p-entry" className="bg-sub bg-opacity-30 pb-[1.85vw] mt-[13vw] mb-[9.25vw]">
      <div className="mx-[10%]">
        <div className="relative text-[3.3vw]">
          <h2 className="text-main pt-[11vw] text-[11vw] text-center font-bold">Entry</h2>
          <p className="mt-[78.7vw] leading-[6.5vw] font-semibold">
            応募は下記エントリーフォームに必要項目を入力し送信お願いいたします。
            <br />
            送信後は担当者より確認のメールを送らせていただきますのでお待ちください。
            <br />
            メールアドレスに間違いなどが担当者から電話させていただきます。
          </p>
          <p className="text-[2.77vw] mt-[8px]">※は入力必須項目になります。</p>
          <div className="absolute top-[50%] right-[50%] w-[74vw] mt-[-39vw] translate-x-[50%]">
            <StaticImage src="../../../images/ill_07.svg" alt="" />
          </div>
        </div>
        <div className="mt-[8.3vw]">
          <div className="flex flex-nowrap flex-col justify-between">
            <div className="mt-[6.5vw]">
              <label htmlFor="name" className="text-[3.3vw] font-semibold">
                お名前（漢字）<em className="text-main">※</em>
              </label>
              <input 
                id="name"
                type="text"
                placeholder="田中　太郎"
                className="relative w-full py-[28px] px-[20px] border-none mt-[8px] text-[15px]"
              />
            </div>
            <div className="mt-[6.5vw]">
              <label htmlFor="hurigana" className="text-[3.3vw] font-semibold">
                お名前（フリガナ）<em className="text-main">※</em>
              </label>
              <input 
                id="hurigana"
                type="text"
                placeholder="タナカ　タロウ"
                className="relative w-full py-[28px] px-[20px] border-none mt-[8px] text-[15px]" />
            </div>
          </div>
          <div className="flex flex-nowrap flex-col justify-between">
            <div className="mt-[6.5vw]">
              <label htmlFor="tel" className="text-[3.3vw] font-semibold">
                電話番号（半角）<em className="text-main">※</em>
              </label>
              <input 
                id="tel"
                type="tel"
                placeholder="00000000000"
                className="relative w-full py-[28px] px-[20px] border-none mt-[8px] text-[15px]"
              />
            </div>
            <div className="mt-[6.5vw]">
              <label htmlFor="email" className="text-[3.3vw] font-semibold">
                メールアドレス <em className="text-main">※</em>
              </label>
              <input 
                id="email"
                type="email"
                placeholder="example@mail.com"
                className="relative w-full py-[28px] px-[20px] border-none mt-[8px] text-[15px]" />
            </div>
          </div>
          <div className="flex flex-nowrap flex-col justify-between">
            <div className="mt-[6.5vw]">
              <label htmlFor="birthday" className="text-[3.3vw] font-semibold">
                生年月日 <em className="text-main">※</em>
              </label>
              <input 
                id="birthday"
                type="date"
                placeholder="0000"
                className="relative w-full py-[28px] px-[20px] border-none mt-[8px] text-[15px] -webkit-calendar-picker-indicator:none"
              />
            </div>
            <div className="mt-[6.5vw]">
              <label htmlFor="hurigana" className="text-[3.3vw] font-semibold">
                お名前（フリガナ）<em className="text-red-500">※</em>
              </label>
              <input 
                id="hurigana"
                type="text"
                placeholder="タナカ　タロウ"
                className="relative w-full py-[28px] px-[20px] border-none mt-[8px] text-[15px]" />
            </div>
          </div>
          {/* 以下、同様に他の入力フィールドを追加 */}
        </div>
        <div className="mt-4">
          <input id="entry-submit-btn" type="button" value="Submit" className="px-4 py-2 bg-blue-500 text-white rounded" />
        </div>
      </div>
    </section>
  );
};

export default EntryForm;