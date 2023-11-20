import {User} from "./models";
import {connectToDB} from "@/app/lib/utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i")
  try {
    await connectToDB()
    const users = await User.find({username: {$regex: regex}})
    return users
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch users!")
  }
}