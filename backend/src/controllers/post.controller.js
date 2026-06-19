import {Post} from "../models/post.model.js";


const createPost=async(req,res)=>{
    try {

        const{name,description,age}=req.body;

        if(!name||!description||!age){
            return res.status(400).json({
                message:"All fileds are required"
            });

       
        }

         const post=await Post.create({name,description,age});
        res.status(201).json({
            messgae:"Post created successful ",post
        });


        
    } catch (error) {

        res.status(500).json({
            message:"Internal Server error",error
        });
        
    }


}

const getPosts=async(req,res)=>{
    try {
        const getposts=await Post.find();
        res.status(200).json(getposts);
        
    } catch (error) {
         res.status(500).json({
            message:"Internal Server error",error
        });
    }
}

const updatePost=async(req,res)=>{
    try {

        // basic validaiton to check if the body is empty
        
        //(name: x, description: y,age: 2) → [name, description, age]

        if(Object.keys(req.body).length ==0 ){
            return res.status(400).json({
                messgae:"no data provided for update"
            });
        }

        const post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!post) return res.status(404).json({
            message:"post not found"
        });

        res.status(200).json({
            message:"Post updated successfully",post
        });
        
    } catch (error) {
        res.status(500).json({
            message:"Internal Server error",error
        });
    }
}

    const deletePost=async(req,res)=>{
        try {

            const deleted=await Post.findByIdAndDelete(req.params.id);
            if(!deleted) return res.status(404).json({
                message:"posts not found"
            });


            res.status(200).json({
                message:"post has been delted succesfully",deleted
            })
            
        } catch (error) {
            res.status(500).json({
            message:"Internal Server error",error
        });
            
        }
    }

export{

    createPost,
    getPosts,
    updatePost,
    deletePost
}