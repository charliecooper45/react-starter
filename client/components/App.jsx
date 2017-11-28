import React from 'react';

import keenImage from '../images/keen.png';

export default class App extends React.Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h1>Hello World</h1>
        <img src={ keenImage } alt='Commander Keen' />
			</div>
		);
	}	
};