export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-active">Anime</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Search and look for your favorite anime
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Search for your favorite anime..."
          />
          <button className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4">
            Search
          </button>
        </form>
      </div>
      <div className="absolute bottom-0 flex justify-center items-end h-36 md:h-44">
        <p className="text-primary text-sm pb-12 md:w-60 md:text-center">
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
