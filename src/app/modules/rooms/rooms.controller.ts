import { Request, Response } from "express";
import { roomServices } from "./rooms.service";



export const getAllRooms = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    // Call the service to get all rooms
    const rooms = await roomServices.getAllRooms(category as string);

    // Send the response with the list of rooms
    res.status(200).json({
      success: true,
      data: rooms,
    });
  } catch (error:any) {
    // Handle errors and send a response with a 500 status code
    res.status(500).json({
      success: false,
      message: "Failed to fetch rooms",
      error: error.message,
    });
  }
};


export const addRoom = async (req: Request, res: Response) => {
    try {
        const roomData = req.body;
        const newRoom = await roomServices.addRoom(roomData);

        res.status(201).json({
            success: true,
            message: "Room added successfully",
            data: newRoom,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: "Failed to add room",
            error: error.message,
        });
    }
};

export const RoomsControllers={
    getAllRooms,
    addRoom
}