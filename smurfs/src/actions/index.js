import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADDSMURF = 'ADDSMURF';
export const ADDPASS = 'ADDPASS';
export const ADDMISS = 'ADDMISS';

export const getSmurfs = () => (dispatch) => {
	dispatch({ type: FETCH_SMURFS_START });
	axios
		.get('"http://localhost:3333/smurfs')
		.then((response) => {
			dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.response });
		});
};

export const addSmurf = (smurf) => (dispatch) => {
	dispatch({ type: ADDSMURF, payload: 'Adding to the village' });
	console.log('addS', smurf);
	axios
		.post('http://localhost:3333/smurfs', smurf)
		.then((res) => {
			dispatch({ type: ADDPASS, payload: res.data });
		})
		.catch((err) => {
			console.log(err);
			dispatch({
				type    : ADDMISS,
				payload : err
			});
		});
};

export default addSmurf;
