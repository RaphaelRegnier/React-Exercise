export default function(state, action) {
  // compute and return new state, state here is flats
  if(state === undefined){
    return []
  }
  // TODO: handle actions
  if(action.type === 'SET_FLATS') {
    return action.payload;
  } else {
    return state;
  }

  // switch(action.type) {
  //   case 'SET_FLATS'
  //     return action.payload;
  //   default:
  //     return state;
  // }
}

// const flatsReducer = (state, action) => {
//   if (state === undefined) {
//     // Reducer initialisation
//     return [];
//   }
