"use client";

import { useState } from "react";
import Box from "../components/box";
import { TextInput } from "../components/input";
import { ButtonSubmit, ButtonBack } from "../components/button";

export default function UserPage() {
    const [email, setEmail] = useState("");
    const [fullName, setFullname] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-8 gap-4">
        <div className="col-span-12 md:col-span-6 md:col-start-2">
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
              <ButtonBack text="Back" />
              <ButtonSubmit text="Save" />
            </div>
          </Box>
        </div>
      </div>
    );
}