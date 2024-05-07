"use server";

import { connectDB } from "@/config/db-config";
import { generateToken } from "@/helpers/auth";
import UserModel from "@/models/user-model";
import { cookies } from "next/headers";
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

export const login = async (values: { email: string; password: string }) => {
  try {
    const { email, password } = values;
    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
      return { error: "User does not exist." };
    }

    const isPassMatched = await user.matchPassword(password);
    if (!isPassMatched) {
      return { error: "Invalid email or password" };
    }

    const token = generateToken(user._id);
    cookies().set("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
    });
    // expires: Date.now() - 24 * 60 * 60 * 1000,
    const userObject = user.toObject();
    const { password: userPassword, ...rest } = userObject;

    return JSON.parse(JSON.stringify({ user: rest, token }));
  } catch (error: any) {
    return { error: error.message };
  }
};
