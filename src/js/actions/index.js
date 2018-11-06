
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const UPDATE_BUDGET = 'UPDATE_BUDGET';
export const UPDATE_SPEND = 'UPDATE_SPEND';
export const UPDATE_SELECTION = 'UPDATE_SELECTION';
export const CHANGE_SCREEN = 'CHANGE_SCREEN';



export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = leagues => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { leagues }
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch('https://api.myjson.com/bins/1bk3io')
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json.leagues));
          return json.leagues;
        })
        .catch(error => dispatch(fetchProductsError(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }


export const updateBudget = budget => ({
    type: UPDATE_BUDGET,
    payload: { budget }
});

export const updateSpend = spent => ({
  type: UPDATE_SPEND,
  payload: { spent }
});

export const updateSelection = selection => ({
  type: UPDATE_SELECTION,
  payload: { selection }
});

export const changeScreen = screen => ({
  type: CHANGE_SCREEN,
  payload: { screen }
});


export function removeSelection (thisSelection) {
  return dispatch => {
     console.log(thisSelection);

  };
}