import React from "react";

const JobDescription: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col flex-nowrap">
        <p className="text-main text-[5vw] font-semibold text-center py-[5.5vw] my-[6.5vw] border-y border-sub">業務内容</p>
        <div>
          <div>
            <p className="font-semibold pb-[8px]">■ 仕事内容</p>
            <p className="font-semibold">ITエンジニアとしてシステム開発に関わる業務</p>
            <p className="pt-[20px]">
              経験のある技術や経験、学習している技術や今後のキャリアを考慮した上で案件を選択していただき
              <br />
              案件の業務をこなしていただきます。
            </p>
          </div>
          <div>
            <p className="font-semibold pb-[8px] pt-[20px]">■ 案件について</p>
            <p className="font-semibold">案件としては基本的にはWebシステムの開発から選択していただくことになります。</p>
            <p className="font-semibold pb-[8px] pt-[20px]">プロジェクト例としては以下のようになります。</p>
            <ul className="pl-[10px]">
              <li className="pb-[8px]">・大手ECサイトの機能改善プロジェクト</li>
              <li className="pb-[8px]">・音声の録音&解析システムの新規開発プロジェクト</li>
              <li className="pb-[8px]">・教育機関向け情報管理システムの新規開発プロジェクト</li>
              <li>・ECモール型デリバリープラットフォームの機能改善プロジェクト</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold pb-[8px] pt-[20px]">■ 使用技術やソフト</p>
            <p>
              現在まで参画したプロジェクトで使用した技術やツールは以下の通りです。
              <br />
              (特に言語やフレームワークに縛りはなく、今後のキャリアを考慮して使用技術やソフトは選定可能です)
            </p>
            <ul className="pt-[20px]">
              <li>
                <p>・言語</p>
                <p>JavaScript、TypeScript、Ruby、PHP</p>
              </li>
              <li className="pt-[20px]">
                <p>・フロントエンドフレームワーク</p>
                <p>Vue/Nuxt.js、React/Next.js</p>
              </li>
              <li className="pt-[20px]">
                <p>・バックエンドフレームワーク</p>
                <p>Ruby on Rails、Laravel、CakePHP</p>
              </li>
              <li className="pt-[20px]">
                <p>・インフラ</p>
                <p>Firebase、AWS</p>
              </li>
              <li className="pt-[20px]">
                <p>・エディタ/IDE</p>
                <p>Visual Studio Code、PHPStorm</p>
              </li>
              <li className="pt-[20px]">
                <p>・デザインツール</p>
                <p>Figma、XD</p>
              </li>
              <li className="pt-[20px]">
                <p>・PC</p>
                <p>Mac、Windows</p>
              </li>
              <p className="pt-[20px]">※特に希望がない限りMacを支給します。</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
