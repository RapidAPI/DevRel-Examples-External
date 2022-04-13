import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [colors, setColors] = useState(null);
  const [loading, setLoading] = useState(false);

  const getColors = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/generate/");
      setColors(res.data.data[0].palette);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getColors();
  }, []);

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
        Random <span className="text-active">Color Pallete</span> Generator
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6 font-ebas">
        Click change to get a random color pallete
      </h2>

      {colors && (
        <div className="mt-20 grid grid-cols-4 rounded-lg">
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                className="text-primary font-bold sm:text-xl text-sm sm:px-12 px-2 py-36"
                style={{ backgroundColor: color }}
              >
                {color}
              </div>
            );
          })}
        </div>
      )}

      <button
        className="mt-10 font-bold text-primary text-xl hover:text-active"
        onClick={getColors}
      >
        {loading ? (
          <span className="animate-pulse">Loading..</span>
        ) : (
          <>Change &rarr;</>
        )}
      </button>

      <div className="mt-20 mb-10 opacity-70 text-center">
        <p className="text-primary text-xs">
          Made by RapidAPI DevRel Team -{" "}
          <a
            className="hover:text-active"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}
