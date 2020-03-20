import React from 'react'
import {Modal, Input, Form, Button} from 'antd'

const layout = {
  labelCol: { span: 6 }, wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 10 },
};

const CreateContact = ({isContactCreate, closeModal, addContact}) => {
  const onFinish =  values => {
    addContact(values);
    closeModal()
  };

  const paramsArr = ['firstName', 'lastName', 'phone', 'email'];

  return (
    <Modal
      title="Создать контакт"
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
                <Input />
              </Form.Item>
            )
          })}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Form.Item>
        </Form>
    </Modal>
  )
};

export default CreateContact