import React, { Component } from 'react'
import './PersonalArea.css'
import { Button, Input } from 'antd'
import Table from '../ContactTable/ContactTable'
import { connect } from "react-redux";
import { addContact, getContacts,deleteContact, pathContact } from '../../store/contacts/actions'
import { closeApp } from '../../store/auth/actions'
import CreateContact from '../CreateContact/CreateContact'
import { v4 } from 'uuid'
import ChangeContact from "../ChangeContact/ChangeContact";


class PersonalArea extends Component {
  state = {
    value: '',
    isLoading: false,
    isContactCreate: false,
    isContactChange: false,
    contactForChange: null
  };

  componentDidMount() {
    const { getContacts } = this.props;
    this.setState({isLoading: true});
    getContacts().finally(() => this.setState({isLoading: false}));
  }

  handleChangeInput = ({target: { value }}) => {
    this.setState({ value })
  };

  handleCloseApp = () => {
    const { closeApp } = this.props;
    closeApp()
  };

  handleAddContact = (contact) => {
    const { addContact } = this.props;
    addContact({...contact, key: v4()})
  };

  handleOpenContactCreate = () => {
    this.setState({
      isContactCreate: !this.state.isContactCreate
    })
  };

  handleDeleteContact = (contacts, key) => {
    const { deleteContact } = this.props;
    deleteContact(contacts, key)
  };

  handleShowContact = (contactForChange) => {
    this.setState({
      isContactChange: !this.state.isContactChange,
      contactForChange: contactForChange
    })
  };

  handleCloseContact = () => {
    this.setState({
      isContactChange: !this.state.isContactChange,
      contactForChange: null
    })
  };

  handleChangeContact = (newContact) => {
    const {pathContact,contacts} = this.props;
    pathContact(contacts,newContact);
  };

  filterContacts = () => {
    const { contacts } = this.props;
    const { value } = this.state;
    const searchPhrase = value.toLowerCase();
    return searchPhrase
      ? contacts.filter(user =>
        Object.values(user).some(el =>
          el
            .toString()
            .toLowerCase()
            .includes(searchPhrase)
        )
      )
      : contacts
  };

  render () {
    const {user}  = this.props;
    const filteredContacts = this.filterContacts();
    const {isLoading, isContactCreate,isContactChange,contactForChange} = this.state;
    return (
      <div className='container-user'>
        <div className='header-ui'>
          <Button type="primary" onClick={this.handleOpenContactCreate}>Добавить контакт</Button>
          <h2>Логин: <strong>{user.username.toUpperCase()}</strong></h2>
          <Button type="primary" danger onClick={this.handleCloseApp}>Выход из аккаунта</Button>
        </div>
        {isContactCreate && <CreateContact isContactCreate={isContactCreate}
                                           closeModal={this.handleOpenContactCreate}
                                           addContact={this.handleAddContact}
        />}

        {isContactChange && <ChangeContact isContactCreate={isContactChange}
                                           closeModal={this.handleCloseContact}
                                           changeContact={this.handleChangeContact}
                                           prevContact={contactForChange}
        />}
        <Input
          placeholder="Search contact"
          value={this.state.value}
          onChange={this.handleChangeInput} />
        {isLoading ? 'isLoading' : <Table contacts={filteredContacts} deleteContact={this.handleDeleteContact} changeContact={this.handleShowContact}/>}
      </div>
    )
  }
}


const mapStateToProps = ({contacts, user}) => ({contacts, user});

const mapDispatchToProps = {
  getContacts,closeApp,addContact,deleteContact,pathContact
};

export default connect(mapStateToProps,mapDispatchToProps)(PersonalArea);