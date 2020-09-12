import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
  process.env.MONGO_URL || '', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
