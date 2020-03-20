import * as ProductAction from './room.action'


 export const initialstate=[]
let test:any[]=new Array();
export function reducer(state=[],action:ProductAction.Actions)
{
     switch(action.type)
     {
         case ProductAction.Add_Room:
             console.log(action.payload)
            //  let test:Product[];
              return [...state,action.payload]


            //  return[...state,action.payload]   

         case ProductAction.Remove_Room:
              console.log(action.payload)
              return state.filter((data,index)=>index!=action.payload)
         default:
             return state;
     }
}