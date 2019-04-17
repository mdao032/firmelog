db.createCollection("user", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["user_id", "username", "email", "password"],
            properties: {
                user_id: {
                    bsonType: "string",
                    description: "must be a int and is required"
                },
                username: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                email: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                password: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
        }
    }
})