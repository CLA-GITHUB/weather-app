import axios from 'axios';
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../redux/dataSlice';

function Form(props) {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const toast = useToast();
	const getWeatherData = (e) => {
		e.preventDefault();
		axios
			.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${process.env.REACT_APP_ACCESS_TOKEN}`)
			.then((result) => {
				if (result.status === 200) {
					dispatch(fetchWeatherData(result.data));
					toast({
						title: 'Request successful',
						status: 'info',
						duration: 5000,
						isClosable: true,
						variant: 'subtle'
					});
				}
				if (result.status !== 200) {
					toast({
						title: 'An error occured while preparing data',
						status: 'error',
						duration: 5000,
						isClosable: true
					});
				}
			})
			.catch((err) =>
				toast({
					title: 'An error occured while preparing data',
					status: 'error',
					duration: 5000,
					isClosable: true,
					variant: 'subtle'
				})
			);
	};
	return (
		<div className='h-full flex flex-col justify-center items-center'>
			<form className='w-96'>
				<input
					className='py-3 px-1 w-full bg-transparent text-center rounded mb-4 outline-none text-gray-50 text-3xl shadow-2xl'
					placeholder='Enter a location'
					value={text}
					onChange={(e) => {
						setText(e.currentTarget.value);
					}}
				/>
				<div className='flex justify-center'>
					<button
						className=' text-lg bg-blue-900 p-5 text-gray-50 rounded font-bold mt-4 outline-none'
						onClick={(e) => getWeatherData(e)}
					>
						Check
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
