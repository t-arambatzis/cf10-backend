import { Schema, model, Document, Types } from "mongoose";

export interface IRole extends Document {
  _id: Types.ObjectId;
  role: String;
  description: String;
  active: boolean;
}

const RoleSchema = new Schema<IRole>(
  {
    role: { type: String, required: true, unique: true },
    description: { type: String },
    active: { type: Boolean },
  },
  {
    collection: "roles",
    timestamps: true,
  },
);

export default model<IRole>("Role", RoleSchema);
