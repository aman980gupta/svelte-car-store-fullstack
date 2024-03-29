import bcrypt from "bcryptjs";
import client from "$db/client.js";
import { userSchema } from "$db/schema.js";
import { error, json, redirect } from "@sveltejs/kit";


export const actions = {
    register: async (event) => {
        const { request, fetch } = event;
        const data = await request.formData();
        const user_email = data.get('user_email');
        const password = data.get('password');
        const location = data.get('location');
        console.log({user_email,password,location})
        // Check if the email already exists in the database
        const connecting = await client.connect()
        const existingUser = await connecting.db("test").collection("users").findOne({ user_email });

        if (existingUser) {
            // Email already exists, return an error
            return error(400, { message: "Email already exists" });
        }
        // Email does not exist, proceed with registration
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hashSync(password, salt);
            const insertedUser = await client.db("test").collection("users").insertOne({
                user_email,
                password: hashedPassword,
                user_location: location,
                token: null,
                user_info: null,
                
            });
            if (insertedUser.acknowledged===false) return error(500, { message: "can not create user" });
               return redirect(301, "/login");
          
       
    },
};

