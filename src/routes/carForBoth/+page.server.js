import client from "$db/client";
import { error, json } from "@sveltejs/kit";
import { tokenFromStore } from "$lib/store/store.js";

export async function load({ locals,fetch }) {
    const getMoviesFromDatabase = async()=>{
        const connection = await client.connect()
        const moviesFromDatabase = await connection.db("sample_mflix").collection("movies").find({}).limit(12).toArray()
        const movies = await moviesFromDatabase
        return JSON.parse(JSON.stringify(movies));
    }
    const movies =await getMoviesFromDatabase()
  return{ movies};
  
}