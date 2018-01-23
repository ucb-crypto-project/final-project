const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, index: true, unique: true },
  password: { type: String, required: false },
});

const User = mongoose.model('User', userSchema);

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = User;
