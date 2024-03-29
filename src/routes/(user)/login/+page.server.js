/** @type {import('./$types').Actions} */
import bcrypt from "bcryptjs";
import client from "../../../db/client";
import { userSchema } from "../../../db/schema";
import { error, redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "$env/static/private"
import { tokenFromStore } from "$lib/store/store";

export const actions = {
    login: async (event) => {
        const { request, cookies } = event;
        const data = await request.formData();
        const user_email = data.get('user_email');
        const user_password = data.get('password');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user_password, salt)
        //console.log({ user_email, user_password, hashedPassword })
        const connection = await client.connect();
        const user = await connection.db("test").collection("users").findOne({ user_email });
        if (!user) return { success: false, error: true, message: "no user fount", user }
        const passwordMatched = await bcrypt.compareSync(user_password, user.password)
        if (!passwordMatched) return { success: false, error: true, message: "password is wrong", user }
        const { password, ...userWithoutPassword } = user
        const token = jwt.sign(userWithoutPassword, JWT_SECRET, { expiresIn: "24h" })
        event.locals.user = userWithoutPassword
        event.locals.userToken = token
        await cookies.set("token",token,{
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            
            maxAge: 60 * 60 * 24 * 30
        } );
        
        //console.log()
        //await connection.db("test").collection("users").updateOne({})
        return redirect(300, "/");



    },
};