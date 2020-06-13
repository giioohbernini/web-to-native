import React from 'react';
import isApp from 'utils/isApp';

const welcomeType = isApp 
	? 'Your app about page' 
	: 'Your web about page';

const About = () => {
	return (
    <div>
			<h2>About - {welcomeType}</h2>
    </div>
	)
}

export default About
