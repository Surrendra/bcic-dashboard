import axiosClient from "@/lib/axiosClient";
import { User } from "@/models/user.model";

export const userService = {
    async createUser(data:User) {
        const res = await axiosClient.post("user",data);
        return res.data;
    }
}