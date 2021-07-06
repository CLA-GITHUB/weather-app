import React, { useEffect } from 'react';
import { Particle } from 'jparticles';
import '../particles.css';
function Particles({ children }) {
	useEffect(() => {
		new Particle('#particles');
	});
	return (
		<div id='particles'>
			<div id='body'>{children}</div>
		</div>
	);
}

export default Particles;
