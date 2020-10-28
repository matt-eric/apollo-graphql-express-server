import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
});

userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login,
  });
  return user;
};

userSchema.pre('remove', function(next) {
  this.model('Effect').deleteMany({ userId: this._id }, next);
});

const user = mongoose.model('User', userSchema);

export default user;
