"use server";

import { connectDB } from "@/config/db-config";
import UserModel from "@/models/user-model";

connectDB();

export const register = async (values: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const { name, email, password } = values;
    let user = await UserModel.findOne({ email });
    if (user) {
      return { error: "User already exists." };
    }

    user = new UserModel({ name, email, password });
    await user.save();

    return JSON.parse(
      JSON.stringify({ message: "Registration Succesfull, Please Login." })
    );
  } catch (error: any) {
    return { error: error.message };
  }
};
