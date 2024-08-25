// app.get('/',(req,res)=>{

//     res.send("Hello world This is social media REST API");

// });


// const posts=[
//     {
//         id:1,
//         title:"First Post",
//         content:"This is first post content"
//     },
//     {
//         id:2,
//         title:"Second Post",
//         content:"This is Second post content"
//     },

// ]


// app.get("/posts",(req,res)=>{
//     res.json(posts)
// })


// app.get("/posts/:id",(req,res)=>{ //her hansisa obyektin id sini request atmaq ucun /:id yaziriq
//     const postId=parseInt(req.params.id);
//     const post= posts.find((p)=>{
//         return p.id===postId
//     })

//     if(!post){
//         return res.status(404).json({error:"post not found"})
//     }
    
//     res.send(post)
// });

//   app.post("/posts",(req,res)=>{

//     const title = "new post"
//     const content = "new content"
//     const newPost = {id:posts.length+1,title,content}

//     posts.push(newPost);

//     res.status(201).json(newPost)
// })
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./database/db");
const express = require("express"); 

// .env dosyasını yükleyin

const app = express();

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(process.env.PORT)
    console.log("App is running on port " );
});
