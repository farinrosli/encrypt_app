import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCrypto from "simple-crypto-js";
import './index.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      plaintext: '',
      encrypt_text: '',
      randomkey: ''
     };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    const min = 11;
    const max = 99;
    const rand = min + Math.random() * (max - min);
    var _secretKey = rand.toString();
    var simpleCrypto = new SimpleCrypto(_secretKey);
    var cipherText = simpleCrypto.encrypt(this.state.plaintext);
    
    this.setState({encrypt_text: cipherText});
    this.setState({randomkey: _secretKey});
  }
  myChangeHandler = (event) => {
    this.setState({plaintext: event.target.value});
  }
  render() {
    return (
      <section>
      <form onSubmit={this.mySubmitHandler}>

      <input
        type='text'
        onChange={this.myChangeHandler}
        placeholder="Enter text here"
      />
      
      <input
        type='submit'
      />
      <p>Encrypted Text:</p>
      {this.state.encrypt_text}
      <p>Random Key Generated:</p>
      {this.state.randomkey}
      </form>
      </section>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));