import { createStore } from "redux";
import {Reducers} from '../Reducer/Productreducer';

export const mystore = createStore(Reducers);