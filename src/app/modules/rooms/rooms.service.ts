import { Rooms } from "./rooms.model";


const getAllRooms=async()=>{
    return await Rooms.find();
}

export const roomServices={
    getAllRooms
}