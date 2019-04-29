db.createCollection("annonce", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "available", "timestampCreation", "timestampUpdate",
                        "product"],
            properties: {
                title: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                available: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                timestampCreation: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                timestampUpdate: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                product: {
                    bsonType: "object",
                    required: ["name", "description", "price", "availability_place", "delivery_places", "deliveryMethod"],
                    properties: {
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
        }
    }
})