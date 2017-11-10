import React, {Component} from 'react';
import {render} from 'react-dom';

import styles from './index.css';

import ReactImage from './assets/react.svg';

export default class App extends Component {
	render() {
		return <div>
			Hello!
			<img src={ReactImage} alt="React"/>
		</div>;
	}
}

render(<App/>, document.getElementById('root'));
