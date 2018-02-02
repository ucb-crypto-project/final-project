const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, index: true, unique: true },
  password: { type: String, required: false },
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(8, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) {
        return next(error);
      }
      console.log('HASH: ', hash);
      user.password = hash;
      console.log('USER.PASSWORD: ', user.password);
      next();
    });
  });
});

const User = mongoose.model('User', userSchema);

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

// User.prototype.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };


module.exports = User;
