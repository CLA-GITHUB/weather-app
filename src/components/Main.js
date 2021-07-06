import React, { useEffect } from 'react';
import Layout from './Layout';
import { Particle } from 'jparticles';
import '../particles.css';
import Form from './Form';
import { useSelector } from 'react-redux';
import Weather from './Weather';
function Main() {
	useEffect(() => {
		new Particle('#particles', {
			// Set range to 0, the particles are not connected
			range: 0,
			num: 0.1,
			minSpeed: 0.1,
			maxSpeed: 0.02,
			minR: 0.2,
			maxR: 1.2
		});
	});
	const weatherData = useSelector((state) => state.weatherData.weatherData);
	return (
		<Layout>
			<div id='particles' style={{ backgroundColor: '#0C2340' }}></div>
			{Object.keys(weatherData).length === 0 && (
				<div className='h-screen w-screen'>
					<Form />
				</div>
			)}

			{Object.keys(weatherData).length !== 0 && <Weather info={weatherData.data} />}
		</Layout>
	);
}

export default Main;
