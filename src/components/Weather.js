import React from 'react';
import { useDispatch } from 'react-redux';
import { clearData } from '../redux/dataSlice';
function Weather({ info }) {
	const temp = Number(info.main.temp) - 273.15;
	const dispatch = useDispatch();
	return (
		<div>
			<div className='max-w-lg mx-auto text-white  h-screen'>
				<div className='flex flex-col justify-center h-full content-center items-center'>
					<div className='border-4 border-blue-900 rounded w-full p-4 shadow-2xl'>
						<p className='text-2xl'>{info.name}</p>
						<div className='w-full flex flex-wrap justify-around items-center '>
							<img
								src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`}
								height='100'
								width='100'
								alt='Weather icon'
							/>
							<p className='text-xl '>{Math.round(temp).toString()}&deg;C</p>
							{info.weather.map((item) => (
								<div key={item.id} className='text-xl text-center'>
									<p>{item.main}</p>
									<p>{item.description}</p>
								</div>
							))}
						</div>
					</div>
					<div className='flex justify-center'>
						<button
							className=' text-lg bg-blue-900 p-5 text-gray-50 rounded font-bold mt-4 outline-none'
							onClick={() => dispatch(clearData())}
						>
							Done
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Weather;
