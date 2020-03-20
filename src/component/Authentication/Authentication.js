import React, { Component } from 'react'
import './Authentication.css'
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux'
import { setToken } from '../../store/auth/actions'


const layout = {
  labelCol: { span: 8 }, wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

class Authentication extends Component {
  render() {
    const {setToken} = this.props;
    const onFinish =  async values => {
         setToken(values)
    };
    const onFinishFailed = () => message.warning('Заполните все поля');
    const validateArr = ['username', 'password'];
    return (

      <div className='container-auth'>
        <h2>Authentication in App</h2>
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          {validateArr.map((el, index) =>  {
            let input = <Input />;
            if(el === 'password') {
              input = <Input.Password />
            }
            return (
              <Form.Item
                label={el[0].toUpperCase() + el.substring(1)}
                name={el}
                key={el + index}
                rules={[
                  {
                    required: true,
                    message: `Please input ${el} contact!`,
                  },
                ]}
              >
                {input}
              </Form.Item>
            )
          })}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Enter
            </Button>
          </Form.Item>
        </Form>
        <div className='about'>
          <h3>About</h3>
          <p>Тестовое задание. <br/>
            Аутентификация осуществляется с помощью "Mock'a".<br/>
            Контаты получаются c сервиса FillText.com(10).<br/>
            Представление списка контактов ввиде таблицы.<br/>
            Есть возможность: <strong>поиска/сортировки, удаления, добавления, изменения</strong> контактов.<br/><br/>
            Username: qwerty, password: 1111
          </p>
        </div>
      </div>
    );
  }
}

const mapStateFromProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  setToken,
};

export default connect(mapStateFromProps,mapDispatchToProps)(Authentication);

