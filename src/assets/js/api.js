const BASEURL = "https://www.easy-mock.com/mock/5c6e0cdaf26d7049ecf044ff/demo/";
const LOCALURL = "http://localhost:3000/";
const URL = {
  shoppingMain: BASEURL + "Home", //首页请求接口
  register: LOCALURL + "user/Register", //注册请求接口，user要跟刚刚的引号对应
  login: LOCALURL + "user/Login" //用户登录接口
};
export default URL;
