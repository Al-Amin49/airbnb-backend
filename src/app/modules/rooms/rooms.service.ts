import { TRooms } from "./rooms.interface";
import { Rooms } from "./rooms.model";


const getAllRooms=async()=>{
    return await Rooms.find();
}
const addRoom = async (roomData: TRooms) => {
    const room = new Rooms(roomData);
    return await room.save();
};

export const roomServices={
    getAllRooms,
    addRoom
}