import { model, Schema } from 'mongoose'
import type { UserAuthType } from '../../@types/auth/authTypes'

export const UseModel = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      unique: true,
      math: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/],
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

export const UseModelSchema = model<UserAuthType>('credential-users', UseModel)
