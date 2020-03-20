import React from 'react';
import {Table} from "antd";

const columns = [
  {
    title: 'FirstName',
    dataIndex: 'firstName',
    key: 'FirstName',
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    key: 'LastName',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'Phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'Email',
  },
];

const TableContacts = ({contacts, deleteContact, changeContact}) => {
  const buttonDelete = {
      dataIndex: '',
      render: (record) => <a onClick={() => deleteContact(contacts,record.key)}>Удалить</a>,
    };
  const renderChangeContact = {
    dataIndex: '',
    render: (record) => <a onClick={() => changeContact(record)}>Изменить</a>,
  }
  return (
    <Table dataSource={contacts} columns={[...columns, buttonDelete, renderChangeContact]} />
  )
};

export default TableContacts

