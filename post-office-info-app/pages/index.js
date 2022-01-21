import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [pinCode, setPinCode] = useState();
  const [info, setInfo] = useState(null);
  const [btnText, setBtnText] = useState("Search");

  /**
   *
   *
   * @param
   */
  const getPostOfficeInfo = async (e) => {
    e.preventDefault();

    try {
      setBtnText("Loading...");
      const res = await axios.get(`/api/info`, {
        params: {
          pinCode,
        },
      });
      setInfo(res.data);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Search");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Post <span className="text-danger">Office</span> Finder App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
        Get India Post Office Details using the pin code
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            type="number"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Pin code..."
            onChange={(e) => setPinCode(e.target.value)}
          />
          <button
            className="outline-none border border-danger text-secondary font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={getPostOfficeInfo}
          >
            {btnText}
          </button>
        </form>
        {info && (
          <div className="flex flex-col text-primary text-sm text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
            {info.map((postOffice) => {
              return (
                <div key={info.indexOf(postOffice)}>
                  <h3 className="font-raleway font-semibold text-danger text-2xl text-primary pb-6 md:text-xl">
                    {postOffice.office}
                  </h3>
                  <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
                    <tbody className="text-primary font-normal">
                      <tr>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          Circle
                        </th>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          {postOffice.circle}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          Delivery
                        </th>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          {postOffice.delivery}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          District
                        </th>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          {postOffice.district}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          Division
                        </th>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          {postOffice.division}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          Phone
                        </th>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          {postOffice.phone}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          Region
                        </th>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          {postOffice.region}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          Related Head Office
                        </th>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          {postOffice.related_headoffice}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          Taluk
                        </th>
                        <th className="border border-primary text-left px-4 py-4 font-normal">
                          {postOffice.taluk}
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-primary text-xs">
          Made by RapidAPI DevRel Team -{" "}
          <a
            className="hover:text-danger"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}
