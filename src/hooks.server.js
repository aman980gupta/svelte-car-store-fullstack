
// export async function load({locals}){
// 	const user =await locals?.user
// 	console.log(user)
// 	return user;
// }

import { redirect } from '@sveltejs/kit';
import client from '$db/client';


export  async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/about')) {
		return new Response('custom response');
	}
	const userFromLocals = event.locals.user;
	//const userToken = event.cookies.get("token")
	if(userFromLocals) console.log(userFromLocals)
	const token =await event.cookies.get("token");
	//console.log(token)
    if(!token) return await resolve(event)
	// const connection = await client.connect();
	// const useFromDatabase = await connection.db("demo").collection("users").findOne({token})
	// if(useFromDatabase) {
	// 	console.log(useFromDatabase)
	// 	const [password,...userWithoutPassword] = useFromDatabase;
	// 	event.locals.user = userWithoutPassword;
	// 	return  await resolve(event)
	// }

	const response = await resolve(event);
    const data = await response;
	//const cokkie = await data.
    //console.log(data) throw redirect(301,"/login")
	return data
}