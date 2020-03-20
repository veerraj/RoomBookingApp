import { Action } from '@ngrx/store';


export const Add_Room="ADD_ROOM";

export const Remove_Room="REMOVE_ROOM";

export class AddRoom implements Action{
    readonly type=Add_Room;

    constructor(public payload:any[]){}
}

export class RemoveRoom implements Action{
    readonly type=Remove_Room;

    constructor(public payload:number){}
}
export type Actions= AddRoom | RemoveRoom;