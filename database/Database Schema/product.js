db.createCollection("product", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["product_id", "name", "description", "price", "availability_place", "delivery_places", "deliveryMethod"],
            properties: {
                product_id: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                description: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                price: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                availability_place: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                delivery_places: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                deliveryMethod: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }

            }
        }
    }
})