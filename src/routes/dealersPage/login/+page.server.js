/** @type {import('./$types').Actions} */
import bcrypt from "bcryptjs";
import client from "$db/client";
import { userSchema } from "$db/schema";
import { error, redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "$env/static/private"
import { tokenFromStore } from "$lib/store/store";

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
    login: async (event) => {
        const { request, cookies } = event;
        const data = await request.formData();
        const dealer_email = data.get('dealer_email');
        const dealer_password = data.get('password');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(dealer_password, salt)
        //console.log({ user_email, user_password, hashedPassword })
        const connection = await client.connect();
        const dealerFromDatabase = await connection.db("test").collection("dealer").findOne({ dealer_email });
        if (!dealerFromDatabase) return { success: false, error: true, message: "no dealer fount",}
        const passwordMatched = await bcrypt.compareSync(dealer_password, dealerFromDatabase.password)
        if (!passwordMatched) return { success: false, error: true, message: "password is wrong" }
        const { password, ...dealerWithoutPassword } = dealerFromDatabase
        const token = jwt.sign(dealerWithoutPassword, JWT_SECRET, { expiresIn: "24h" })
        event.locals.dealer = dealerWithoutPassword
        event.locals.dealerToken = token
        await cookies.set("dealerToken",token,{
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30
        } );
        
        //console.log()
        //await connection.db("test").collection("users").updateOne({})
        return redirect(301, "/about");



    },
};