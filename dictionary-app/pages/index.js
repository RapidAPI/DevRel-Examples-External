import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-secondary">Dictionary</span> App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check Meaning of any word
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <div className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter any word..."
            onChange={(e) => setWord(e.target.value)}
          />
          <button
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
            onClick={fetchInfo}
          >
            Search
          </button>
        </div>
        {wordInfo && (
          <div className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
            <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
              <thead className="font-raleway uppercase tracking-wide">
                <tr>
                  <th className="border text-left px-4 py-4">
                    <span className="text-secondary">Type</span>
                  </th>
                  <th className="border text-left px-4 py-4">
                    <span className="text-secondary">Definition</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-4">Noun</td>
                  <td className="border px-4 py-4">
                    A written or printed work consisting of pages glued or sewn
                    together along one side and bound in covers.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 flex justify-center items-end h-36 md:h-44">
        <p className="text-primary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team –{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            <span className="transition duration-300 hover:text-secondary">
              See Examples Like this
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
