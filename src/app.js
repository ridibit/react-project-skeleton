import React, {Component} from 'react';
import {render} from 'react-dom';

import styles from './index.css';

export default class App extends Component {
	render() {
		return <div>Hello!</div>;
	}
}

render(<App/>, document.getElementById('root'));
