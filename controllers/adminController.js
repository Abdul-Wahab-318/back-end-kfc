let adminSchema = require('../schema/adminSchema')

exports.registerAdmin = async (req,res)=>{
    try{

        if(req.body.secret !== "kfcadmin123")
        {
            res.status(400).json({
                message : "admin secret is incorrect"
            })
        }

        let admin = await adminSchema.create(req.body)
        res.admin = admin
        let token = admin.getJwtToken()
        console.log(token)
        res.status(200).cookie('token',token , {httpOnly:true}).json({
            message: "admin created",
            admin
        })

    }   
    catch(error){
        console.log(error)
        res.status(400).json({
            error 
        })
    }
}

exports.loginAdmin = async (req,res)=>{
    try{
        let {email , password } = req.body
        if(!email || !password)
        {
            res.status(400).json({
                message: "email or password is missing"
            })
        }
        let admin = await adminSchema.findOne({email})
        console.log(admin)
        let isMatched = await admin.comparePassword(password)
        console.log(isMatched , "!!!!!!!!!")
        if(!isMatched)
        {
            res.status(400).json({
                message: "email or password is incorrect"
            })
        }
        req.admin = admin
        let token = admin.getJwtToken()
        res.status(200).cookie('token',token,{httpOnly:true}).json({
            message: 'logged in',
            admin,
            token
        })
    }
    catch(error)
    {
        res.status(400).json({
            message: 'not yeet',
            error
        })
    }
}

exports.logoutAdmin = async (req,res)=>{
    try{
        res.clearCookie("token")
        req.admin = null
        res.status(200).json({
            message: "logged out"
        })
    }
    catch(err){

    }
}