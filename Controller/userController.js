const User = require('../models/User');

async function addUser(req , res){
    try{
     await User.create(req.body);
      res.status(200).json({message: 'User has been created'});
    }catch(error){
        console.log('can\'t add User: ',error.message);
        res.status(401).json({message: 'Can\'t add User',error: error.message });
    }
};
async function getAllUsers(req,res){
    try {
        const users = await User.find();
        res.status(200).json({Users: users});
    } catch (error) {
        console.log('Can\'t get data :', error.message);
        res.status(401).json({message: 'Can\'t get Users',error: error.message });
        
    }

};
module.exports= {
    addUser,
    getAllUsers

}