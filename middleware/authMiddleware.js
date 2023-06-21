const jwt = require('jsonwebtoken')
const User = require('../models/user')

const authMiddleware = {
    protectedRoute : async (req,res,next)=>{
        try{
            const token = req.headers.authorization || req.cookies.token;
            if(!token){
                return res.status(401).json({message:'Access denied'});
            }
            const decoded = jwt.verify(token, 'mykey');
            if(!decoded){
                return res.status(401).json({ message: 'Access denied decoded' });
            }
            const userId = decoded.userId;
            const user = await User.findById(userId);
            if(!user){
                return res.status(401).json({ message: 'Access denied user' });
            }
           
           next()
        }catch (err){
            res.status(500).json({message: 'Server error'})
        }
    },
    protectedRouteAdminRole : async (req,res,next)=>{
        try{
            const token = req.headers.authorization || req.cookies.token;
            if(!token){
                return res.status(401).json({message:'Access denied'});
            }
            const decoded = jwt.verify(token, 'mykey');
            if(!decoded){
                return res.status(401).json({ message: 'Access denied decoded' });
            }
            const userId = decoded.userId;
            const user = await User.findById(userId);
            if(!user){
                return res.status(401).json({ message: 'Access denied user' });
            }
            if(user.position!="admin"){
                return res.status(401).json({ message: 'Access denied user' });
            }
           next()
        }catch (err){
            res.status(500).json({message: 'Server error'})
        }
    },
    protectedRouteStudentRole : async (req,res,next)=>{
        try{
            const token = req.headers.authorization || req.cookies.token;
            if(!token){
                return res.status(401).json({message:'Access denied'});
            }
            const decoded = jwt.verify(token, 'mykey');
            if(!decoded){
                return res.status(401).json({ message: 'Access denied decoded' });
            }
            const userId = decoded.userId;
            const user = await User.findById(userId);
            if(!user){
                return res.status(401).json({ message: 'Access denied user' });
            }
            if(user.position!="student"){
                return res.status(401).json({ message: 'Access denied user' });
            }
           next()
        }catch (err){
            res.status(500).json({message: 'Server error'})
        }
    },
    protectedRouteLecturerRole : async (req,res,next)=>{
        try{
            const token = req.headers.authorization || req.cookies.token;
            if(!token){
                return res.status(401).json({message:'Access denied'});
            }
            const decoded = jwt.verify(token, 'mykey');
            if(!decoded){
                return res.status(401).json({ message: 'Access denied decoded' });
            }
            const userId = decoded.userId;
            const user = await User.findById(userId);
            if(!user){
                return res.status(401).json({ message: 'Access denied user' });
            }
            if(user.position!="lecturer"){
                return res.status(401).json({ message: 'Access denied user' });
            }
           next()
        }catch (err){
            res.status(500).json({message: 'Server error'})
        }
    }
}
module.exports = authMiddleware;