import express from 'express';
import { RoomsControllers } from './rooms.controller';


const router = express.Router();
router.get('/', RoomsControllers.getAllRooms);
router.post('/', RoomsControllers.addRoom)

export const RoomsRoutes=router;






export const OrderRoutes = router;
