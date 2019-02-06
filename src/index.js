const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "PLUSFIVE" action every time the +5 button is pressed
const plusFiveButton = document.getElementById('plusfive');
plusFiveButton.addEventListener('click', e => dispatch({ type: "ADD", value: 5 }));

// Dispatch the "MINUSFIVE" action every time the -5 button is pressed
const minusFiveButton = document.getElementById('minusfive');
minusFiveButton.addEventListener('click', e => dispatch({ type: "ADD", value: -5 }));

// Dispatch the "coloroption" action every time a color option is selected
const colorOption = document.getElementById('coloroption');
colorOption.addEventListener('change', e => dispatch({ type: "COLOROPTION" }));

// Dispatch the "userinput" action every time a user submits text
const addCounter = document.getElementById('addcounter');
addcounter.addEventListener('click', e => dispatch({ type: "ADDCOUNTER" }));

// force an initial render
dispatch({type: 'INIT'})