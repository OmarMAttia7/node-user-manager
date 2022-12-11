import {
  number as zNumber,
  object as zObject,
  string as zString,
  infer as zInfer,
} from "zod";

const UserSchema = zObject({
  id: zNumber().optional(),
  username: zString()
    .min(5, "username can't be less than 5 characters")
    .max(30, "username can't be more than 30 characters")
    .regex(
      /[a-zA-Z0-9_.]+/g,
      "username should only have letters, numbers, and underscore"
    ),
  first_name: zString().min(2).max(50),
  last_name: zString().min(2).max(50),
  email: zString().email(),
});

export type User = zInfer<typeof UserSchema>;

export default UserSchema;
