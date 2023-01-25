import React, { useState, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

const Home: NextPage = () => {
  const [hexValueInputBox, setHexValueInputBox] = useState<number[]>([1]);
  const [hexValues, setHexValues] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [logo, setLogo] = useState<string | null>(null);

  /**
   * Get brand color hex values from user
   *
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleHexValues = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    value.length === 7 && setHexValues([...hexValues, value]);
  };

  /**
   * Generate logo
   *
   *
   */
  const generateCompanyLogo = async () => {
    buttonRef.current!.disabled = true;
    try {
      buttonRef.current!.innerText = "Generating logo...";
      const response = await axios.post("/api/generate", {
        brandColors: hexValues,
        description,
      });
      setLogo(response.data.data[0].url);
    } catch (err) {
      console.log(err);
      setLogo(null)
    } finally {
      buttonRef.current!.innerText = "Generate logo";
      buttonRef.current!.disabled = false;
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>LogoAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center my-16">
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
              {hexValueInputBox.map((item, index) => (
                <input
                  key={index}
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
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-6 flex justify-center w-full">
              <button
                className="w-full py-2 md:text-sm bg-[#081477] rounded-md text-white"
                onClick={generateCompanyLogo}
                ref={buttonRef}
              >
                Generate logo
              </button>
            </div>
          </div>
        </div>
        {logo && (
          <div className="mt-12">
            <h2 className="mb-12 font-bold">Here is your company logo ↓</h2>
            <a href={logo!} title="logo">
              <Image
                src={logo!}
                width={512}
                height={512}
                alt="logo"
                className="rounded-lg"
              />
            </a>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
