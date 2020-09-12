import mongoose, { Document, Schema } from 'mongoose';

export interface Pet extends Document {
  name: string;
  animal: 'cachorro' | 'gato';
}

const PetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    animal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Pet>('Pet', PetSchema);
