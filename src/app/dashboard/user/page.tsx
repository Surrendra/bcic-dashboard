"use client";

import { useState } from "react";
import Box from "../components/box";
import { TextInput } from "../components/input";
import { ButtonSubmit, ButtonBack } from "../components/button";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function UserPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [fullName, setFullname] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    const handleSubmit = async () => {
      try {
        setLoading(true);
        if (!email || !fullName || !username || !password) {
          alert("Please fill all required fields !");
          setLoading(false);
        }
        const response = await axios.post("",{
          email,
          fullName,
          username,
          password
        });
        console.log(response);
        if (response.status === 200 || response.status == 201) {
          
          alert("User Created Successfully !");
        }
        setLoading(false);
        
      } catch (error: any) {
        console.error(error);
        alert(error.response?.data?.message || "Something went wrong");
        setLoading(false);
      }
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-8 gap-4">
        <div className="col-span-12 md:col-span-12 lg:col-span-6 lg:col-start-2">
          <Box title="Create New User">
            <TextInput
              placeholder="Please Input your mail"
              required={false}
              label="User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              placeholder="Please Input your Full Name"
              required={false}
              label="User Full Name"
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
            />
            <TextInput
              placeholder="Please Input your Username"
              required={false}
              label="User Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextInput
              placeholder="Please Input your Password"
              required={false}
              label="User Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between pt-4">
              <ButtonBack text={loading ? "Processing.." : "Save"} onClick={router.back} />
              <ButtonSubmit text="Save" onClick={handleSubmit} disabled={loading} />
            </div>
          </Box>
        </div>
      </div>
    );
}