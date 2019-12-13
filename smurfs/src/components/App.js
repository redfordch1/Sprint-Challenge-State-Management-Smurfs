import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Village from './Village';
import { getSmurfs } from '../actions/index';
import SmurfForm from './SmurfForm';
import './App.css';

const App = ({ getSmurfs }) => {
	useEffect(
		() => {
			getSmurfs();
		},
		[ getSmurfs ]
	);

	return (
		<div className='App'>
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<Village />
			<SmurfForm />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs : state.smurfs
	};
};

export default connect(mapStateToProps, { getSmurfs })(App);
