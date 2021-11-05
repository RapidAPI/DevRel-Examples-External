export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Spell <span className="text-active">Checker</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly See All Your Spelling Errors
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Write/paste any content..."
        />
        <div className="flex items-center">
          <button className="h-1/6 outline-none border border-active font-bold font-raleway mx-12 px-12 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-black hover:border-primary md:h-16 md:my-12">
            Check
          </button>
        </div>
        <div className="h-96 overflow-scroll">
          <table className="bg-white text-primary border-danger border md:text-sm md:mx-2">
            <thead className="font-raleway uppercase tracking-wide">
              <tr>
                <th className="border-danger border text-left px-4 py-4">
                  Word
                </th>
                <th className="border-danger border text-left px-4 py-4">
                  Position
                </th>
                <th className="border-danger border text-left px-4 py-4">
                  Suggestions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-danger border px-4 py-4">thiss</td>
                <td className="border-danger border px-4 py-4">1</td>
                <td className="border-danger border px-4 py-4">
                  'this', 'thesis', 'thighs', 'theist',
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
