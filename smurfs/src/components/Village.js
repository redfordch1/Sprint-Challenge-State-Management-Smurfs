import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const Village = (props) => {
	return (
		<div className='AllVillage'>
			<div className='Village__'>
				{props.smurfs.map((item) => {
					return (
						<div className='Smurf_Card' key={item.id}>
							<p>Name: {`${item.name} Smurf`}</p>
							<p>Age: {item.age}</p>
							<p>Height: {item.height}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs : state.smurfs
	};
};

export default connect(mapStateToProps, {})(Village);
