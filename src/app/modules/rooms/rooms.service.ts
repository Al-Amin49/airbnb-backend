import { TRooms } from "./rooms.interface";
import { Rooms } from "./rooms.model";


const getAllRooms = async (
    category?: string,
    priceMin?: number,
    priceMax?: number,
    bedrooms?: number,
    bathrooms?: number,
    beds?: number
  ) => {
    // Initialize a query object
    const query: any = {};
  
    // If a category is provided, add it to the query
    if (category) {
      query.category = category;
    }
  
    // If a price range is provided, add it to the query
    if (priceMin || priceMax) {
      query.price = {};
      if (priceMin) query.price.$gte = priceMin; // Greater than or equal to
      if (priceMax) query.price.$lte = priceMax; // Less than or equal to
    }
  
    // If a number of bedrooms is provided, add it to the query
    if (bedrooms) {
      query.bedrooms = bedrooms;
    }
  
    // If a number of bathrooms is provided, add it to the query
    if (bathrooms) {
      query.bathrooms = bathrooms;
    }
  
    // If a number of beds is provided, add it to the query
    if (beds) {
      query.beds = beds;
    }
  
    // Return the results based on the constructed query
    return await Rooms.find(query);
  };
  
const addRoom = async (roomData: TRooms) => {
    const room = new Rooms(roomData);
    return await room.save();
};

export const roomServices={
    getAllRooms,
    addRoom
}