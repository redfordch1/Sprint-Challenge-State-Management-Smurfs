import React, { useState } from 'react';
import { addSmurf } from '../actions/index';
import { connect } from 'react-redux';

const SmurfForm = (props) => {
	const [ smurf, setSmurf ] = useState({
		name   : '',
		age    : '',
		height : ''
	});

	const handleChange = (e) => {
		setSmurf({
			...smurf,
			[e.target.name]: [ e.target.value ]
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addSmurf(smurf);
		setSmurf({ name: '', age: '', height: '' });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder='Smurf Name' type='text' name='name' value={smurf.name} onChange={handleChange} />
			<input placeholder='Smurf Age' type='text' name='age' value={smurf.age} onChange={handleChange} />
			<input placeholder='Smurf Height' type='text' name='height' value={smurf.height} onChange={handleChange} />
			<button type='submit'>Add Smurf</button>
		</form>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs : state.smurfs
	};
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
