import Product from "@/app/models/Product";
import { connectMongoDB } from "../dbConnection";

export async function getProducts() {
  try {
    connectMongoDB();
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error)
    return {
      error: "Something went wrong"
    }
  }
}