import bcrypt from "bcryptjs";
import client from "$db/client.js";
import { userSchema } from "$db/schema.js";
import { error, json, redirect } from "@sveltejs/kit";
const dealerDetails = {
    dealership_email:"",
    dealership_id:"",
    dealership_name:"",
    dealership_location:"",
    dealership_info:{},
    password:"",
    cars:[],
    deals:[],
    sold_vehicles:[]
}

export const actions = {
    register: async (event) => {
        const { request, fetch } = event;
        const data = await request.formData();
        const dealership_email = data.get('dealership_email');
        const dealership_id = data.get('dealership_id');
        const password = data.get('password');
        const location = data.get('location');
        console.log({dealership_email,password,location,dealership_id})
        // Check if the email already exists in the database
        const connecting = await client.connect()
        const existingUser = await connecting.db("test").collection("dealer").findOne({ dealership_email });

        if (existingUser) {
            // Email already exists, return an error
            return error(400, { message: "Email already exists" });
        }
        // Email does not exist, proceed with registration
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hashSync(password, salt);
            const collection = await client.db("test").collection("dealer")
            await collection.createIndex({dealership_email:1},{unique:true})
            const inserteDealer = await collection.insertOne({
                ...dealerDetails,
                password: hashedPassword,
                dealership_location: location,
                dealership_id,
                dealership_email    
            });
            if (inserteDealer.acknowledged===false) return error(500, { message: "can not create user" });
               return redirect(301, "/dealerLogin");
          
       
    },
};

