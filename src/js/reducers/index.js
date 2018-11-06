
import {
	FETCH_PRODUCTS_BEGIN,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
	UPDATE_BUDGET, UPDATE_SPEND, UPDATE_SELECTION, CHANGE_SCREEN
  } from '../actions/index.js';
  
  const initialState = {
		data: [],
		loading: false,
		error: null,
		screen: "welcome",
		budget: 1500000000,
		spent: 0,
		step: "step0",
		selection: [
			0: {},
			1: {},
			2: {},
			3: {},
			4: {},
			5: {},
			6: {},
			7: {}
		],
		update: function() {
			console.log("test");
		}
  };
  
  export default function productReducer(state = initialState, action) {
	switch(action.type) {
	  case FETCH_PRODUCTS_BEGIN:
		return {
		  ...state,
		  loading: true,
		  error: "Still Loading"
		};
  
	  case FETCH_PRODUCTS_SUCCESS:
		return {
		  ...state,
		  loading: false,
			data: action.payload.leagues,
			error: ""
		};
  
	  case FETCH_PRODUCTS_FAILURE:
		return {
		  ...state,
		  loading: false,
		  error: action.payload.error,
		  data: []
		};

		case UPDATE_BUDGET:
		return {
		  ...state,
		  budget: action.payload.budget
		};

		case UPDATE_SPEND:
		return {
		  ...state,
		  spent: action.payload.spent
		};

		case UPDATE_SELECTION:
		return {
		  ...state,
		  selection: action.payload.selection
		};

		case CHANGE_SCREEN:
		return {
		  ...state,
		  screen: action.payload.screen
		};
  
	  default:
		// ALWAYS have a default case in a reducer
		return state;
	}
  }