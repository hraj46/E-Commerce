// routes/orderRoutes.js
import express from "express";
import {
  newOrder,
  showOrders,
  showAllOrders,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", newOrder);

router.get("/user/:id", showOrders);

router.get("/all", showAllOrders);

router.patch("/:id", updateOrder);

export default router;
