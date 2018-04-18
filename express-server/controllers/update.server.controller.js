import mongoose from 'mongoose';

import Update from '../models/update.server.model';

export const getTags = (req,res) => {
  Update.find().exec((err,tags) => {
    if(err){
    return res.json({'success':false,'message':'some error ocurred'});
    }
  return res.json({'success':true,'message':'Updates for this tag fetched successfully',tags});
  });
}

export const getUpdatesByTag = (req,res) => {
  Update.find(
    { "updateTags": { "$regex": {tag}, "$options": "i" } }).exec((err,updates) => {
      if(err){
      return res.json({'success':false,'message':'some error ocurred'});
      }
    return res.json({'success':true,'message':'Updates for this tag fetched successfully',updates});
    });
  };

export const getUpdates = (req,res) => {
  Update.find().exec((err,updates) => {
    if(err){
    return res.json({'success':false,'message':'some error ocurred'});
    }
  return res.json({'success':true,'message':'Updates fetched successfully',updates});
  });
}

export const addUpdate = (req,res) => {
  console.log(req.body);
  const newUpdate = new Update(req.body);
  newUpdate.save((err,update) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Update added successfully',update});
  })
}

export const updateUpdate = (req,res) => {
  Update.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,update) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(update);
    return res.json({'success':true,'message':'Updated successfully',update});
  })
}

export const getUpdate = (req,res) => {
  Update.find({_id:req.params.id}).exec((err,update) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(update.length){
      return res.json({'success':true,'message':'Update fetched by id successfully',update});
    }
    else{
      return res.json({'success':false,'message':'Update with the given id not found'});
    }
  })
}

export const deleteUpdate = (req,res) => {
  Update.findByIdAndRemove(req.params.id, (err,update) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':update.updateText+' deleted successfully'});
  })
}