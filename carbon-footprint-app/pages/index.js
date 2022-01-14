import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [vehicle, setVehicle] = useState("SmallPetrolCar");
  const [distance, setDistance] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculateFootprint = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/calculate/", {
        params: { vehicle, distance },
      });
      const { data } = res;
      setLoading(false);
      setResponse(data);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl font-bold text-active mt-20">Carbon Footprint</h1>
      <h2 className="text-primary text-2xl font-light mt-5">
        Calculate the Carbon Footprint of your travel.
      </h2>
      <form
        className="sm:mx-auto mt-20 md:max-w-3xl justify-center flex flex-col w-full sm:flex"
        onSubmit={(e) => {
          calculateFootprint();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="sm:w-3/5 w-full">
            <label className="block text-primary text-sm">Vehicle</label>
            <select
              className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
              autoFocus={true}
              required
              onChange={(e) => {
                setVehicle(e.target.value);
                setResponse(null);
              }}
            >
              {[
                "SmallPetrolCar",
                "MediumPetrolCar",
                "LargePetrolCar",
                "SmallDieselCar",
                "MediumDieselCar",
                "LargeDieselCar",
                "MediumHybridCar",
                "LargeHybridCar",
                "MediumLPGCar",
                "LargeLPGCar",
                "MediumCNGCar",
                "LargeCNGCar",
                "SmallPetrolVan",
                "LargePetrolVan",
                "SmallDielselVan",
                "MediumDielselVan",
                "LargeDielselVan",
                "LPGVan",
                "CNGVan",
                "SmallMotorBike",
                "MediumMotorBike",
                "LargeMotorBike",
              ].map((diet) => {
                return <option value={diet}>{diet}</option>;
              })}
            </select>
          </div>
          <div className="sm:w-1/3 w-full">
            <label className="block text-primary text-sm">Distance (KM)</label>
            <input
              className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
              type="number"
              required
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
        </div>

        <button
          className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
          type="submit"
        >
          {loading ? <>Loading..</> : <>Get Footprint</>}
        </button>
      </form>
      {response && (
        <div className="mt-10">
          <span className="text-2xl text-primary">
            The carbon footprint is{" "}
            <span className="font-bold">{response.carbonEquivalent}</span> KGs
          </span>
        </div>
      )}

      <div className="mt-72 mb-10  text-center">
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
