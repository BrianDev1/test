import {ActionTypes} from "./ActionTypes";



export interface car{
    id: number,
    name: string,
    model: string,
}


//actions

interface fetchCarsAction{
    type: ActionTypes.fetchCars,
    payload: car[]                                 //Fetch Action
}

export type Actions = fetchCarsAction;


//Action creator
export function fetchCars(cars: car[]) {
    return {
        type: ActionTypes.fetchCars,
        payload: cars
    };
};


