const mongoose = require('mongoose');
exports.ConnectDB = async()=>{
    try {
           await mongoose.connect("mongodb+srv://krishna-tbh:K6pvYdjCeJtZdUGQ@mernstackkrishna.15kdm6r.mongodb.net/todo-app1")
            console.log(`the db is connect with ${mongoose.connection.host}`.blue);
            
    } catch (error) {
            mongoose.disconnect()
            process.exit(1)
    }
}