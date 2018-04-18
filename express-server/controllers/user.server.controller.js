import mongoose from 'mongoose';

import User from '../models/user.server.model';

// export const signUp = (req,res) => {
//   if (req.body.email &&
//     req.body.username &&
//     req.body.password) {
//     const userData = {
//       email: req.body.email,
//       username: req.body.username,
//       password: req.body.password
//     }
//     User.create(userData, function (err, user) {
//       if (err) {
//         return res.json({'success':false,'message':'Some Error'});
//       } 
//         return res.json({'success':true,'message':'User added successfully',user});
      
//     })
//   }
// }

// export const getUsers = (req,res) => {
//   Update.find().exec((err,users) => {
//     if(err){
//     return res.json({'success':false,'message':'some error ocurred'});
//     }
//   return res.json({'success':true,'message':'Updates fetched successfully',users});
//   });
// }


