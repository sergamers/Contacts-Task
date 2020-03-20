import React from 'react'
import {Modal, Input, Form, Button} from 'antd'

const layout = {
  labelCol: { span: 6 }, wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 10 },
};

const ChangeContact = ({isContactCreate, closeModal, changeContact, prevContact}) => {
  const onFinish =  values => {
    changeContact({...values, key: prevContact.key});
    closeModal()
  };

  const paramsArr = ['firstName', 'lastName', 'phone', 'email'];
  const prev = Object.values(prevContact);
  return (
    <Modal
      title="Изменить контакт"
      visible={isContactCreate}
      onCancel={closeModal}
      footer={null}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {paramsArr.map((el, index) =>  {
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
              <Input placeholder={prev[index]}/>
            </Form.Item>
          )
        })}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" >
            Изменить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
};

export default ChangeContact