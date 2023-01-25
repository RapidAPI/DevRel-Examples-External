import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [hexValueInputBox, setHexValueInputBox] = useState<number[]>([1]);
  const [hexValues, setHexValues] = useState<string[]>([]);

  /**
   * Get brand color hex values from user
   *
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleHexValues = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    value.length === 6 && setHexValues([...hexValues, value]);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>LogoAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-7xl font-bold font-sans text-[#0055d9]">LogoAI</h1>
        <p className="mt-8 text-2xl w-2/5 text-[#081477] font-bold">
          Create unique and professional logos for your company using AI
        </p>

        <div className="mt-12 flex max-w-xl flex-col flex-wrap sm:w-full border border-gray-300 p-6 rounded-md shadow-sm">
          <div>
            <div className="flex">
              <p className="flex items-center justify-center rounded-[99px] w-[30px] h-[30px] bg-[#ef386a] text-white">
                <span className="text-sm">1</span>
              </p>
              <p className="mt-1 ml-2">
                Please provide your brand colors hex values
              </p>
            </div>
            <div className="w-full text-left ml-[38px]">
              {hexValueInputBox.map((item) => (
                <input
                  key={item}
                  type="number"
                  style={{
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                  }}
                  placeholder="Hex value"
                  className="mr-2 my-2 text-sm rounded-md w-[100px] border border-gray-300 shadow-sm p-2 focus:ring-black"
                  onChange={handleHexValues}
                />
              ))}

              <button
                className="w-[30px] h-[30px] bg-[#081477] rounded-[999px] text-white"
                onClick={() => {
                  setHexValueInputBox([...hexValueInputBox, 1]);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="flex items-center justify-center rounded-[99px] w-[30px] h-[30px] bg-[#ef386a] text-white">
                <span className="text-sm">2</span>
              </p>
              <p className="mt-1 ml-2">
                Please provide a short description of your company
              </p>
            </div>
            <div className="w-full text-left ml-[38px]">
              <textarea
                className="w-5/6 h-[200px] mt-2 text-sm rounded-md border border-gray-300 shadow-sm p-2 focus:ring-black"
                placeholder="1000 characters max"
                maxLength={1000}
              />
            </div>
            <div className="mt-6 flex justify-center w-full">
              <button className="w-full py-2 md:text-sm bg-[#081477] rounded-md text-white">
                Generate logo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
