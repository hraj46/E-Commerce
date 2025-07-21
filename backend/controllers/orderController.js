import orderModel from "../models/orderModel.js";

const newOrder = async (req, res) => {
  try {
    const body = req.body;
    const result = await orderModel.create(body);
    res.status(201).json(result);
  } catch (err) {
    console.log("Error creating new order:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const showOrders = async (req, res) => {
  try {
    const id = req.params.id; // email passed from frontend
    const result = await orderModel.find({ email: id });
    res.status(200).json(result);
  } catch (err) {
    console.log("Error fetching user orders:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};


const showAllOrders = async (req, res) => {
  try {
    const { status = "", page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;

    const query = status ? { status: { $regex: status, $options: "i" } } : {};

    const [orders, count] = await Promise.all([
      orderModel
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      orderModel.countDocuments(query),
    ]);

    const total = Math.ceil(count / limit);

    const formattedOrders = orders.map((order) => ({
      _id: order._id,
      email: order.email,
      status: order.status,
      orderValue: order.orderValue,
      createdAt: order.createdAt,
      shippingName: order.shippingDetails?.name || "N/A",
      shippingAddress: `${order.shippingDetails?.address || ""}, ${order.shippingDetails?.city || ""},${order.shippingDetails?.pincode||""}, ${order.shippingDetails?.state || ""}`,
      items: order.items,
    }));

    res.status(200).json({ orders: formattedOrders, total });
  } catch (err) {
    console.log("Error fetching all orders:", err);
    res.status(500).json({ message: "Something went wrong in showAllOrders" });
  }
};


const updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    const result = await orderModel.updateOne(
      { _id: id },
      { $set: { status } }
    );
    res.status(200).json(result);
  } catch (err) {
    console.log("Error updating order status:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { newOrder, showOrders, showAllOrders, updateOrder };
