export default function(state = {}, action) {
  Object.freeze(state)
  switch (action.type) {
    default:
      return state;
  }
}
