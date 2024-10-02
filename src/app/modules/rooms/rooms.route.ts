import express from 'express';
import { RoomsControllers } from './rooms.controller';


const router = express.Router();
router.get('/', RoomsControllers.getAllRooms);

export const RoomsRoutes=router;






export const OrderRoutes = router;
