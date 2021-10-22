import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";

export default function Home({ symbols }) {
  const [convertFrom, setConvertFrom] = useState("ANG");
  const [convertTo, setConvertTo] = useState("ANG");
  const [amount, setAmount] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  /**
   *
   *
   * Fetch the converted amount
   */
  const convertCurrency = () => {
    const options = {
      method: "GET",
      url: "https://rapidapi-example-currency-converter.vercel.app/api/convert",
      params: { convertFrom, convertTo, amount },
    };

    axios
      .request(options)
      .then(function (response) {
        const { data } = response;
        setConvertedAmount(Math.floor(data.result));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Currency <span className="text-danger">Conversion</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
        Convert Different Concurrencies Quickly
      </h3>
      <div className="flex flex-col justify-between w-3/6 md:w-5/6">
        <Input
          label="Convert from"
          dropdown={true}
          onChange={setConvertFrom}
          symbols={symbols}
        />
        <Input
          label="To Currency"
          dropdown={true}
          onChange={setConvertTo}
          symbols={symbols}
        />
        <Input
          label="Your Amount"
          dropdown={false}
          onChange={setAmount}
          symbols={{}}
        />
        <button
          className="bg-danger w-2/5 border-none outline-none py-2 rounded uppercase font-raleway transition duration-300 hover:shadow-custom pointer"
          onClick={convertCurrency}
        >
          Convert
        </button>
        {convertedAmount && (
          <div className="flex w-3/5 rounded border-primary text-primary my-6 md:w-full">
            <p className="font-raleway font-bold text-lg uppercase tracking-wider md:text-base">
              Converted Amount:{" "}
              <span className="text-danger">{`${convertedAmount} ${convertFrom}`}</span>
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center items-end h-52 md:h-44">
        <p className="text-primary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team –{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            See Examples Like this
          </a>
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    "https://rapidapi-example-currency-converter.vercel.app/api/symbol"
  );
  const { data } = res;
  const { symbols } = data;

  if (!symbols) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      symbols,
    },
  };
}
