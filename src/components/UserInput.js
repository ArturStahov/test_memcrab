import React, { Component } from "react";
import styled from "styled-components";

const UserForm = styled.form`
  padding: 20px 0px 20px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid grey;
  border-radius: 0.5rem;
`;

const InputLabel = styled.label`
  width: 80%;
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  color: #000;
  margin-bottom: 10px;
`;
const Input = styled.input`
  max-width: 100px;
`;
const ButtonCreate = styled.button`
  max-width: 300px;
  height: 40px;
  margin: 0 auto;
  background-color:green;
  color:#fff;
  padding:10px 10px;
  border:none;
  border-radius:0.5rem;
  cursor: pointer;
`;

export default class UserInput extends Component {
    state = {
        inputRow: 0,
        inputCol: 0
    };

    handlerInput = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    };

    handlerSubmit = e => {
        e.preventDefault();
        const { inputRow, inputCol } = this.state;
        this.props.onUserInput(inputRow, inputCol);
        this.setState({
            inputRow: 0,
            inputCol: 0
        });
    };

    render() {
        const { inputRow, inputCol } = this.state;
        return (
            <UserForm onSubmit={this.handlerSubmit}>
                <InputLabel>
                    Input row:
                   <Input type="number" name="inputRow" value={inputRow} onChange={this.handlerInput} min="1" />
                </InputLabel>
                <InputLabel>
                    Input col:
                   <Input type="number" name="inputCol" value={inputCol} onChange={this.handlerInput} min="1" />
                </InputLabel>
                <ButtonCreate type="submit">Create table</ButtonCreate>
            </UserForm>
        );
    }
}
