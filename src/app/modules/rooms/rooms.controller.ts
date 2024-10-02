import { Request, Response } from "express";
import { roomServices } from "./rooms.service";


export const getAllRooms = async (req: Request, res: Response) => {
  try {
    // Call the service to get all rooms
    const rooms = await roomServices.getAllRooms();

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
