import { TRooms } from "./rooms.interface";
import { Rooms } from "./rooms.model";


const getAllRooms=async(category:string)=>{
    if (category) {
        // If a category is provided, return rooms matching the category
        return await Rooms.find({ category });
    } else {
        // If no category is provided, return all rooms
        return await Rooms.find();
    }
}
const addRoom = async (roomData: TRooms) => {
    const room = new Rooms(roomData);
    return await room.save();
};

export const roomServices={
    getAllRooms,
    addRoom
}