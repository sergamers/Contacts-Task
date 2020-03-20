import {v4} from 'uuid';
const userBase = [{
  username: 'user',
  password: '222'
}, {
  username: 'qwerty',
  password: '1111'
}];

const mockApi = {
  checkUser: ({username, password}) => new Promise((res, rej) => {
    setTimeout(() => {
      const user = userBase.find(el => el.password === password && el.username === username);
      if (user) {
        return  res({...user, token: v4()});
      }
       rej('Неверный логин или пароль');
    }, 1500);
  })
};

export default mockApi

