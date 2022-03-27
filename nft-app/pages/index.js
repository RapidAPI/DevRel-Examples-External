import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("bored ape");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const getResults = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/search/", {
        params: { title },
      });
      const data = filterData(res.data.result);
      setSearchResults(data); // Add the data to the results state
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filterData = (results) => {
    results = results.slice(0, 30); // Take only the first 30 results
    results.filter((result) => {
      result.metadata = JSON.parse(result.metadata); // Parse string into JS object
    });
    return results;
  };

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-spacemono items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
        <span className="text-active">NFT</span> Explorer
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6 font-ebas">
        Search for NFT collections in 20+ networks
      </h2>
      <form
        className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
        onSubmit={(e) => {
          getResults();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter the NFT collection name"
          defaultValue={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setSearchResults(null);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            type="submit"
          >
            {loading ? (
              <span className="animate-pulse">Loading..</span>
            ) : (
              <>Search</>
            )}
          </button>
        </div>
      </form>

      {searchResults && (
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            {searchResults.map((item) => {
              return (
                <div key={item.token_id} className="pt-6">
                  <div className="flow-root bg-light rounded-lg px-4 pb-8">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            item.metadata.image
                              ? item.metadata.image
                              : item.metadata.image_url // Get alternative image from the metadata
                          }
                          className="p-2 w-64 h-64 rounded-lg"
                          alt={item.metadata.name}
                        />
                      </div>
                      <div className="text-center justify-center items-center">
                        <h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
                          {item.metadata.name}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-secondary">
                          {item.metadata.description}
                        </p>
                        {item.metadata.external_link && (
                          <a
                            href={item.metadata.external_link}
                            className="mt-4 block text-active underline"
                          >
                            View
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

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
  );
}
