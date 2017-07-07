import { createStore, compose, combineReducers } from 'redux'; // compose is used for debugging here
import AdminReducer from '../Reducers/Admin';

export let initStore = () => {

  const reducer = combineReducers({
    admin: AdminReducer               // declaring all reducer into one object
    // example: user: UserReducer

  });

  const store = createStore( reducer,     // passing all reducer-- each reducer creates as an array inside this.props
    compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f is just a way to do nothing
  ) )

  return store;
}
