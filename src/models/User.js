import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["branch", "owner"],
  },
  branchName: {
    type: String,
    required: function () {
      return this.role === "branch";
    },
  },
});

const User = models.User || model("User", userSchema);

export default User;
