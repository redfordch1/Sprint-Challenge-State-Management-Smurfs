import { FETCH_SMURFS_SUCCESS, FETCH_SMURFS_START, FETCH_SMURFS_FAILURE, ADDSMURF, ADDPASS, ADDMISS } from '../actions';

const initialState = {
	smurfs  : [],
	message : ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURFS_START:
			return {
				...state,
				message : action.payload
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				smurfs  : action.payload,

				message : ''
			};
		case FETCH_SMURFS_FAILURE:
			return {
				...state,
				message : action.payload
			};
		case ADDSMURF:
			return {
				...state,
				message : action.payload
			};
		case ADDPASS:
			return {
				...state,
				message : 'Smurf Added',
				smurfs  : action.payload
			};
		case ADDMISS:
			return {
				...state,
				message : action.payload
			};
		default:
			return state;
	}
};

export default reducer;
