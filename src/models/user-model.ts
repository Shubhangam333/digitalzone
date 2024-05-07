import mongoose, { Document, Schema, Types } from "mongoose";
import bcrypt from "bcryptjs";

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  profilePicture?: string;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    profilePicture: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Check if model is already compiled, if yes delete it
if (mongoose.models && mongoose.models["users"]) {
  mongoose.deleteModel("users");
}

const UserModel = mongoose.model<UserDocument>("users", userSchema);
export default UserModel;
