import type { Document } from 'mongoose';

export interface UserAuthType extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
