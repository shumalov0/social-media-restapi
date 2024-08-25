
const mongoose = require("mongoose");

const connetcDB = async ()=>{

    try {
         await mongoose.connect(process.env.MONGO_URL)
         console.log('database connected successfully...')

    } catch (error) {
        console.log("data base is not conneted"+ error);
    }

}


module.exports= connetcDB;