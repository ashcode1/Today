import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  updateText: String,
  updateDesc: String,
  updateTags: [String]
});

export default mongoose.model('Update', Schema);
      