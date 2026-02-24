//registration

import User from "../Model/User.js";
import bcrypt from 'bcrypt'

export const registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        const salt= await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt)
        const newUser=new User({name,email,password:hashPassword})
        await newUser.save()


        req.session.isLoggedIn=true;
        req.session.userId=newUser._id;
        return res.json({message:"Account created Succesfully",
            user:{_id:newUser._id,
                name:newUser.name,
                email:newUser.email
            }
        })
    } catch (error) {
        console.error("🔥 Error in register controller:", error);
    res.status(500).json("Internal Server Error");
    }
}

//login

export const login=async(req,res)=>{
      try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not exists"})
        }

        const isPasswordCorrect=await bcrypt.compare(password,user.password)
            if(!isPasswordCorrect){
                return res.status(400).json({message:'Invalid email or Password'});
            }

        req.session.isLoggedIn=true;
        req.session.userId=user._id;

        return res.json({message:"Login Succesfull",
            user:{_id:user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        console.error("🔥 Error in Login controller:", error);
        res.status(500).json("Internal Server Error");
    }
}

//logout user

export const logoutUser = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }

    res.clearCookie("connect.sid"); // important
    return res.status(200).json({
      message: "Logout successful",
    });
  });
};
//verify controller for user

export const verify=async(req,res)=>{
     try {
    const {userId} = req.session;
    const user = await User.findById(userId).select("-password")
    if(!user){
      return res.status(400).json({message:"Invalid user"})
    } 
    return res.status(200).json({user});
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
}