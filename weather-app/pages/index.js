import { useState } from 'react';

export default function Home() {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState(null);

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">
					Welcome to{' '}
					<a className="text-blue-600" href="https://nextjs.org">
						Next.js!
					</a>
				</h1>

	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<div>
				<h2 className="font-raleway text-5xl font-extrabold mb-10">
					Weather App
				</h2>
			</div>
			<div className="flex">
				<input
					type="text"
					placeholder="City..."
					className="outline-indigo mr-6 rounded-sm pl-4 w-64 font-raleway"
					onChange={e => setCity(e.target.value)}
				/>
				<button className="outline-none border-none font-bold font-raleway px-12 py-2 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white">
					Search
				</button>
			</div>
			{weather && (
				<div className="mt-10">
					<p className="font-raleway text-2xl font-semibold">
						Temperature: {weather}
					</p>
				</div>
			)}
		</div>
	);
}
