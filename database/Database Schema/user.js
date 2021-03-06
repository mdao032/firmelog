db.createCollection("user", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["username", "email", "password"],
            properties: {
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