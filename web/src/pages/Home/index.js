import React from 'react';
import isApp from 'utils/isApp';

const welcomeType = isApp 
	? 'Your app home page' 
	: 'Your web home page';

const Home = () => {
	return (
    <div>
			<h2>Home - {welcomeType}</h2>
    </div>
	)
}

export default Home 
