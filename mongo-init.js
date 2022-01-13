db.createUser(
    {
        user: "mern",
        pwd: "mern",
        roles: [
            {
                role: "readWrite",
                db: "merntest"
            }
        ]
    }
);