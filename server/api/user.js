const Router = require("koa-router");
const mongoose = require("mongoose");

let router = new Router();
router.get("/", async ctx => {
  ctx.body = "这是用户操作首页";
});

router.post("/Register", async ctx => {
  /* console.log(ctx.request.body);
    ctx.body = ctx.request.body; */
  let User = mongoose.model("user"); //对应数据库中的集合
  let newUser = new User(ctx.request.body); //获取到前端界面输入的数据
  await newUser
    .save()
    .then(() => {
      ctx.body = {
        code: 200,
        message: "注册成功"
      };
    })
    .catch(error => {
      ctx.body = {
        code: 500,
        message: error
      };
    });
});
router.post("/Login", async ctx => {
  let loginUser = ctx.request.body;
  console.log(loginUser);
  let userName = loginUser.userName;
  let password = loginUser.password;
  //引入user中的model
  const user = mongoose.model("user"); //获取数据库中的对应集合
  await user
    .findOne({ userName: userName })
    .exec()
    .then(async result => {
      //从集合中查找对应的一条数据
      console.log(result);
      if (result) {
        let newUser = new user();
        await newUser
          .comparePassword(password, result.password)
          .then(isMatch => {
            //对比用户输入的密码与数据库中的密码是否一致
            ctx.body = {
              code: 200,
              message: isMatch
            };
          })
          .catch(error => {
            console.log(error);
            ctx.body = {
              code: 500,
              message: error
            };
          });
      } else {
        ctx.body = {
          code: 200,
          message: "用户名不存在"
        };
      }
    })
    .catch(error => {
      console.log(error);
      ctx.body = {
        code: 500,
        message: error
      };
    });
});
module.exports = router;
