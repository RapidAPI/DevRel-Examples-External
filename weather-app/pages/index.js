import { useState } from 'react';
import axios from 'axios';

export default function Home() {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState(null);
	const [minTemp, setMinTemp] = useState('');
	const [maxTemp, setMaxTemp] = useState('');
	const [err, setErr] = useState(false);

	/**
	 *
	 * fetch weather information of the given city
	 */
	const getWeather = () => {
		// resetting states
		setErr(false);
		setTemp(null);

		const options = {
			method: 'GET',
			url: 'https://community-open-weather-map.p.rapidapi.com/weather',
			params: { q: `${city}`, units: 'metric' },
			headers: {
				'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
				'x-rapidapi-key': process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY
			}
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				const { data } = response;
				const newTemp = Math.ceil(data.main.temp);
				const newMinTemp = Math.ceil(data.main.temp_min);
				const newMaxTemp = Math.ceil(data.main.temp_max);

				setTemp(newTemp);
				setMinTemp(newMinTemp);
				setMaxTemp(newMaxTemp);
			})
			.catch(function (error) {
				console.error(error);
				setErr(true);
			});
	};

	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<div>
				<h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl">
					Weather App
				</h2>
			</div>
			<div className="flex sm:flex-col">
				<input
					type="text"
					placeholder="City..."
					className="outline-indigo mr-6 rounded-sm pl-4 w-64 font-raleway sm:mr-0 sm:mb-4 sm:py-1"
					onChange={e => setCity(e.target.value)}
				/>
				<button
					onClick={getWeather}
					className="outline-none border-none font-bold font-raleway px-12 py-2 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white"
				>
					Search
				</button>
			</div>
			{temp && (
				<div className="mt-10 flex flex-col justify-start bg-indigo-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
					<div className="flex mb-4">
						<p className="w-64 sm:w-41">Temperature:</p>
						<p>{temp} ° C</p>
					</div>
					<div className="flex mb-4 sm:w-41">
						<p className="w-64">Temperature Min:</p>
						<p>{minTemp}° C</p>
					</div>
					<div className="flex">
						<p className="w-64 sm:w-41">Temperature Max:</p>
						<p>{maxTemp}° C</p>
					</div>
				</div>
			)}
			{err && (
				<div className="mt-10 bg-red-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
					<p>Couldn't fetch weather results.</p>
				</div>
			)}
		</div>
	);
}
