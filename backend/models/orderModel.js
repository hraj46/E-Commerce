// // models/orderModel.js
// import mongoose from "mongoose";

// const orderSchema = mongoose.Schema(
//   {
//     orderValue: { type: Number },
//     status: { type: String, default: "Pending" },
//     email: { type: String },
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     items: [{ type: Object }],
//     shippingDetails: {
//       name: String,
//       number: String,
//       address: String,
//       landmark: String,
//       city: String,
//       state: String,
//       country: String,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Order", orderSchema);


import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  productName: String,
  imgUrl: String,
  price: Number,
  qty: Number,
  size: String, 
});

const orderSchema = mongoose.Schema(
  {
    orderValue: { type: Number },
    status: { type: String, default: "Pending" },
    email: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [itemSchema], 
    shippingDetails: {
      name: String,
      number: String,
      address: String,
      landmark: String,
      city: String,
      pincode:String,
      state: String,
      country: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
