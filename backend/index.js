const express = require("express") //exprespi inteqrasiya edirik

const app = express();


app.get('/',(req,res)=>{

    res.send("Hello world This is social media REST API");

});

app.listen(5002,()=>{// app.listen bizden port, ve callback isdeyir

    console.log("app is running");
});

