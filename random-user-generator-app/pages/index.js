import { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Home({ value }) {
  const [userData, setUserData] = useState(value.results[0]);
  const [btnText, setBtnText] = useState("Generate");

  /**
   *
   *
   * Generate more user data
   */
  const generateData = async () => {
    try {
      setBtnText("Generating...");
      const { data } = await axios.get("/api/user");
      setUserData(data.results[0]);
    } catch (error) {
      console.log(error);
    }
    setBtnText("Generate");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-center text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Random <span className="text-secondary">User</span> Generator App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Instantly generate a random user data
      </h3>
      <div className="flex justify-center items-center w-full">
        <button
          className="outline-none border border-danger text-primary font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
          onClick={generateData}
        >
          {btnText}
        </button>
      </div>
      <div className="flex justify-center mt-12 w-3/6 h-4/5 md:w-4/6 md:h-full md:mb-12">
        <div className="border border-2 border-primary">
          <Image src={userData.picture.large} width="256" height="256" />
        </div>
      </div>
      <div className="flex flex-col text-primary text-sm text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
        <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
          <tbody className="text-primary font-normal">
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Name
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.name.first} {userData.name.last}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Gender
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.gender}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Date of Birth
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.dob.date}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Age
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.dob.age}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Street
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {`${userData.location.street.number} ${userData.location.street.name}`}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                City
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.location.city}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                State
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.location.state}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Country
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.location.country}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Nationality
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.nat}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Post code
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.location.postcode}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Email
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.email}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Phone
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.phone}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Cell
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.cell}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Username
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.login.username}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Password
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                {userData.login.password}
              </th>
            </tr>
            <tr>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                Image URL
              </th>
              <th className="border border-primary text-left px-4 py-4 font-normal">
                <a href={userData.picture.large}>{userData.picture.large}</a>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col mt-10 justify-end h-36">
        <p className="block mb-10 text-center text-secondary text-xs">
          Made by RapidAPI DevRel Team -{" "}
          <a
            className="hover:text-lightGrey"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/user");
  const { data: value } = res;

  if (!value) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      value,
    },
  };
}
