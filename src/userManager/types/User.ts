import { z } from "zod";

const User = z.object({
  id: z.number(),
  username: z.string().min(5).max(30),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
});

type User = z.infer<typeof User>;

export default User;
