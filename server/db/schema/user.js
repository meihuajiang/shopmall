const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10; //加盐十位，范围是0-99

//创建userSchema
const userSchema = new Schema({
  userId: { type: ObjectId },
  userName: { unique: true, type: String }, //unique表示不重复
  password: { type: String },
  createAt: { type: Date, default: Date.now() }, //default表示默认值
  lastLoginAT: { type: Date, default: Date.now() }
});
userSchema.pre("save", function(next) {
  //每次保存的时候，，进行bcrypt加盐密码处理
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });
});
userSchema.methods = {
  //实现登录验证时的密码验证
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch);
        else reject(err);
      });
    });
  }
};

//发布模型
mongoose.model("user", userSchema); //这里的user对应数据库中的集合
