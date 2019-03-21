import { TEST_SAGA } from '../actions/types';

const initialState = {
	test: {}
}
export default function(state = initialState, action){
	switch(action.type){		

		 case TEST_SAGA:
		 return{
		 	...state,		 	
		 	test: action.test
		 }	

		default:
			return state;
	}
}