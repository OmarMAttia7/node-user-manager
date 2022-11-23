import { z } from "zod";

const UserSchema = z.object({
  username: z
    .string()
    .min(5, "username can't be less than 5 characters")
    .max(30, "username can't be more than 30 characters"),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;

export default UserSchema;
