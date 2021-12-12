import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [searchCity, setSearchCity] = useState(null);
  const [city, setCity] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(null);
  const [hotels, setHotels] = useState(null);

  const getCity = async () => {
    try {
      const res = await axios.get("api/city/", {
        params: { searchCity },
      });
      const { data } = res;
      setCity(data.suggestions[0].entities[0].destinationId);
    } catch (error) {
      console.log(error);
    }
  };

  const getHotels = async () => {
    try {
      const res = await axios.get("api/hotels/", {
        params: { city, checkIn, checkOut, guests },
      });
      const { data } = res;
      setHotels(data.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl text-primary font-bold mt-20">
        Hotel Booking <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Discover and Book Hotels using Hotels API from RapidAPI Hub.
      </h2>

      <div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Enter your destination city"
          onChange={(e) => {
            setCity(null);
            setSearchCity(e.target.value);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getCity()}
          >
            Search
          </button>
        </div>
      </div>

      {city && (
        <div className="mt-10 w-full sm:mx-auto lg:mx-0">
          <div className="md:grid md:grid-cols-6 gap-1 flex flex-col">
            <div className="rounded-l-lg col-span-2 col-span-2 flex flex-col py-2 items-center bg-primary">
              <label
                for="check-in"
                className="py-2 text-sm font-semibold uppercase"
              >
                Check-in
              </label>
              <input
                id="startDate"
                type="date"
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="col-span-2 py-2 flex flex-col items-center bg-primary">
              <label
                for="check-out"
                className="py-2 text-sm font-semibold uppercase"
              >
                Check-out
              </label>
              <input
                id="check-out"
                type="date"
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="col-span-1 py-2 flex flex-col items-center bg-primary overflow-hidden">
              <label
                for="guests"
                className="py-2 text-sm font-semibold uppercase"
              >
                Guests
              </label>
              <input
                id="guests"
                type="number"
                placeholder="Total guests"
                className=" text-center"
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div className="col-span-1 bg-active hover:opacity-80 rounded-r-lg">
              <button
                type="submit"
                className="w-full h-full md:py-0 py-4 text-primary font-bold break-words"
                onClick={() => getHotels()}
              >
                Find Hotels
              </button>
            </div>
          </div>
        </div>
      )}

      {hotels && (
        <div className="mt-16">
          <h3 className="text-secondary text-2xl">
            Hotels in <span className="text-active">{hotels.header}</span>
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {hotels.searchResults.results.map((hotel) => (
              <div key={hotel.id} className="pt-6">
                <div className="flow-root bg-light rounded-lg px-2 pb-6">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <span className="p-3 rounded-md shadow-lg">
                        <img
                          src={hotel.optimizedThumbUrls.srpDesktop}
                          width={300}
                          height={300}
                          alt={hotel.name}
                        />
                      </span>
                    </div>
                    <div className="text-center justify-center items-center">
                      <h3 className="mt-2 text-lg text-center font-medium text-primary tracking-tight">
                        {hotel.name}
                      </h3>
                      <div className="flex flex-col mt-5 items-center">
                        <span className="mt-2 mb-4 max-w-xs text-sm text-secondary block">
                          Rating:{" "}
                          {hotel.guestReviews?.rating && (
                            <>{hotel.guestReviews?.rating}</>
                          )}
                        </span>
                        <span className="text-2xl font-bold text-active">
                          {hotel.ratePlan?.price.current}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 mb-10 text-center">
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
      )}
    </div>
  );
}
