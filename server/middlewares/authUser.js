const User = require("../models/userModel");

const middleware = (req,res,next) => {
    console.log('middleware')
    next();
}
exports.middleware = middleware;

// exports.isAuthenticated = async (req, res, next) => {
//     const {token} = req.params;
//     if(!token){
//         return next (new ErrorResponse('You must be logged in', 401));
//     }
//     try{
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);
//         req.user = await User.findNyId(decoded.id);
//         next();
//     } catch (error){
//         return next (new ErrorResponse("You must be logged in", 401));
//     }
// }

// exports.isAdmin = async (req, res, next) => {
//     if (req.user.role === 0 ){
//         return next (new ErrorResponse("Access denied, you must be admin", 401));
//     }
//     next();
// }