import { Request, Response } from "express";
import { roomServices } from "./rooms.service";



export const getAllRooms = async (req: Request, res: Response) => {
    try {
      // Extract query parameters from the request
      const { category, priceMin, priceMax, bedrooms, bathrooms, beds } = req.query;
  
      // Prepare the filter options
      const filters = {
        category: category as string,
        priceMin: priceMin ? parseFloat(priceMin as string) : undefined,
        priceMax: priceMax ? parseFloat(priceMax as string) : undefined,
        bedrooms: bedrooms ? parseInt(bedrooms as string) : undefined,
        bathrooms: bathrooms ? parseInt(bathrooms as string) : undefined,
        beds: beds ? parseInt(beds as string) : undefined,
      };
  
      // Call the service with filters
      const rooms = await roomServices.getAllRooms(
        filters.category,
        filters.priceMin,
        filters.priceMax,
        filters.bedrooms,
        filters.bathrooms,
        filters.beds
      );
  
      // Send the response with the list of rooms
      res.status(200).json({
        success: true,
        data: rooms,
      });
    } catch (error: any) {
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