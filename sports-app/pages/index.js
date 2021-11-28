import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [league, setLeague] = useState(null);
  const [leagueID, setLeagueID] = useState(null);

  const getLeague = async (id) => {
    try {
      setLeagueID(id);
      const res = await axios.get("api/league/", {
        params: { leagueID },
      });
      const { data } = res;
      setLeague(data["league-table"]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl text-primary font-bold mt-20">
        Football Scores <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Select a league to get its data.
      </h2>

      <div className="mt-10 grid grid-cols-3 gap-4">
        <button
          class="block w-full rounded-md px-5 py-3 bg-primary text-base font-bold text-background focus:outline-none hover:bg-active sm:px-10"
          onClick={() => {
            getLeague("1");
          }}
        >
          Premier League
        </button>
        <button
          className="block w-full rounded-md px-5 py-3 bg-primary text-base font-bold text-background focus:outline-none hover:bg-active sm:px-10"
          onClick={() => {
            getLeague("92");
          }}
        >
          Bundesliga
        </button>
        <button
          className="block w-full rounded-md px-5 py-3 bg-primary text-base font-bold text-background focus:outline-none hover:bg-active sm:px-10"
          onClick={() => {
            getLeague("94");
          }}
        >
          Spanish La Liga
        </button>
      </div>

      {league && (
        <div className="flex flex-col">
          <h2 className="text-3xl my-10 text-active font-bold text-center">
            {league.competition.name}
          </h2>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-active sm:rounded-lg">
                <table className="min-w-full divide-y divide-active text-primary">
                  <thead className="bg-gray-50 text-primary opacity-90">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
                      >
                        <span className="sr-only">Position</span>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
                      >
                        Team
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold  uppercase tracking-wider"
                      >
                        Total Matches
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold  uppercase tracking-wider"
                      >
                        Won
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold  uppercase tracking-wider"
                      >
                        Lost
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold  uppercase tracking-wider"
                      >
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-active">
                    {league.teams.map((team) => (
                      <tr key={team.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-active font-bold text-gray-900">
                          {team.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {team.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm ">
                          {team["all-matches"].played}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm ">
                          {team["all-matches"].won}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm ">
                          {team["all-matches"].lost}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                          {team["total-points"]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {league && (
        <div className="flex flex-col mt-10 justify-center">
          <p className="block mt-10 mb-10 text-center text-secondary text-xs">
            Made by RapidAPI DevRel Team -{" "}
            <a
              className="hover:text-active"
              href="https://github.com/RapidAPI/DevRel-Examples-External"
            >
              See more examples like this
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
