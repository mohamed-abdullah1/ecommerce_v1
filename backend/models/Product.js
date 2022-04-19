const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    reviews: [ReviewSchema],
    sizes: { type: Array },
    colors: { type: Array },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 5 },
    countInStock: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
