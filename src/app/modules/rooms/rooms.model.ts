import { model, Schema } from "mongoose";
import { TRooms } from "./rooms.interface";

const roomsSchema = new Schema<TRooms>({
  location: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  pricePerNight: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  guests: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  beds: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: [String], required: true },
  ratings: { type: Number, required: true },
});

export const Rooms = model<TRooms>("Rooms", roomsSchema);
