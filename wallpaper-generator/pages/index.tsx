import React, { useState, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

const Home: NextPage = () => {
  const [hexValueInputBox, setHexValueInputBox] = useState<number[]>([1]);
  const [description, setDescription] = useState<string>("Generate milky way wallpaper");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [wallpaper, setWallpaper] = useState<string | null>(null);

  /**
   * Generate Wallpaper
   *
   *
   */
  const generateWallpaper = async () => {
    buttonRef.current!.disabled = true;
    try {
      buttonRef.current!.innerText = "Generating wallpaper...";
      const response = await axios.post("/api/generate", {
        description,
      });
      setWallpaper(response.data.data[0].url);
    } catch (err) {
      console.log(err);
      setWallpaper(null);
    } finally {
      buttonRef.current!.innerText = "Generate wallpaper";
      buttonRef.current!.disabled = false;
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>WallAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center my-16">
        <h1 className="text-7xl font-bold font-sans text-[#0055d9]">WallAI</h1>
        <p className="mt-8 text-2xl w-2/5 text-[#081477] font-bold">
          Create unique and stunning wallpapers using API
        </p>

        <div className="mt-12 flex max-w-xl flex-col flex-wrap sm:w-full border border-gray-300 p-6 rounded-md shadow-sm">
          <div className="flex mt-4">
            <p className="flex items-center justify-center rounded-[99px] w-[30px] h-[30px] bg-[#ef386a] text-white">
              <span className="text-sm">1</span>
            </p>
            <p className="mt-1 ml-2">
              Please write description of your wallpaper
            </p>
          </div>
          <div className="w-full text-left ml-[38px]">
            <textarea
              className="w-5/6 h-[200px] mt-2 text-sm rounded-md border border-gray-300 shadow-sm p-2 focus:ring-black"
              placeholder="1000 characters max"
              maxLength={1000}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-center w-full">
            <button
              className="w-full py-2 md:text-sm bg-[#081477] rounded-md text-white"
              onClick={generateWallpaper}
              ref={buttonRef}
            >
              Generate wallpaper
            </button>
          </div>
        </div>
        {wallpaper && (
          <div className="mt-12">
            <h2 className="mb-12 font-bold">Here is your wallpaper ↓</h2>
            <a href={wallpaper!} title="wallpaper">
              <Image
                src={wallpaper!}
                width={512}
                height={512}
                alt="wallpaper"
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
