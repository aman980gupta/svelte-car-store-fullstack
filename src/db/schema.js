 export const userSchema = {
    bsonType: "object",
    required: ["user_email", "user_location", "vehicle_info", "password","token"],
    properties: {
        user_email: {
            bsonType: "string"
        },
        user_location: {
            bsonType: "string",
            default: null
        },
        vehicle_info: {
            bsonType: "array",
            items: {
                bsonType: "string",
                default: null
            }
        },
        password: {
            bsonType: "string"
        },
        user_info: {
            bsonType: "object" ,
            default: {}
        },
        token:{
            bsonType:"string",
            default: null
        }
    }
};