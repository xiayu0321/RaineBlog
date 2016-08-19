import mongoose  from 'mongoose';

module.exports = {
  connect:function () {
    mongoose.connect('mongodb://localhost/RaineBlog');
  },
  close:function () {
    mongoose.connection.close();
  }
}
