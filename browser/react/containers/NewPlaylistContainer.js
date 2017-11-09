import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

class FormContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      dirty: false,
      warning: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      dirty: true
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const addPlaylist = this.props.addPlaylist;
    addPlaylist(this.state.inputValue);

    const dirty = this.state.dirty;
    const inputValue = this.state.inputValue;

    let warning;

    if (!inputValue && dirty){
      warning = 'You must enter a name';
      this.setState({ warning });
    } else if (inputValue.length > 16) {
      warning = 'Name must be less than 16 characters';
      this.setState({ warning });
    }else{
      warning = '';
      this.setState({ warning });
    }
    this.setState({ inputValue: '' });

  }

  render () {

    return (
      <NewPlaylist
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.inputValue}
        warning={this.state.warning}
      />
    );
  }
}

export default FormContainer;
