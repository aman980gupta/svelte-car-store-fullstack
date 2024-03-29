import client from "./client";
import { error } from "@sveltejs/kit";
async function connectDB() {
    try {
         // Connect the client to the server	(optional starting in v4.7)
         console.log("Pinged your deployment. You successfully connected to MongoDB!");
      return await client.connect();
      // Send a ping to confirm a successful connection
      
    } catch (err) {
      console.log({error:err})
      throw new Error(err)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  };
  export default connectDB;