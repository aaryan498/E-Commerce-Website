import jwt from "jsonwebtoken";

const adminAuth = async(req, res, next)=>{

    try {
        const { token } = req.headers;

        if(!token){
            return res.json({success: false, message: "Unauthorized access, Please Try logging in Again."})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        if(token_decode !== (process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)){
            return res.json({success: false, message: "Unauthorized access, This part is restricted for normal users, can be accessed by admin only"})
        }
        next()
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

export default adminAuth;