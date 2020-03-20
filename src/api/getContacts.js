import axios from 'axios';
import { v4 } from 'uuid';

const API_URL =
  'http://www.filltext.com/?firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}';
const countContacts = '10'; // запросить 10 случайных контактов.

const contactsApi = {
  getContacts: () => {
    const url = `${ API_URL }&rows=${ countContacts }`;
    return axios.get(url).then(
      res =>
        res.data.map(el => ({
          ...el,
          key: v4(), // BE returns duplicated
        })),
      e => {
        //Если сломалась ссылка.
        alert('Возникла ошибка при попытке получить данны с сервера!)');
        console.log(e);
      }
    );
  },
};

export default contactsApi