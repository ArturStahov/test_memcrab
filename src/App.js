import React, { Component } from 'react'
import uniqid from 'uniqid'
import UserInput from './components/UserInput'
import RenderTable from './components/RenderTable'

export default class App extends Component {

    state = {
        matrix: [],
    }

    _getRandomIntAmount = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    _createItem = () => {
        return {
            amount: this._getRandomIntAmount(0, 999),
            id: uniqid(),
        }
    }

    _createMatrix = (numberRow, numberCol) => {
        const arr = new Array(numberRow);
        for (let i = 0; i < numberRow; i++) {
            arr[i] = new Array(numberCol);
        }

        for (let i = 0; i < numberRow; i++) {

            const total = {
                amount: 0,
                id: uniqid(),
            }
            for (let j = 0; j < numberCol; j++) {
                arr[i][j] = this._createItem();
                total.amount += arr[i][j].amount;
            }
            arr[i].push(total)
        }
        this.setState({
            matrix: [...arr]
        })
    }

    _handlerUserInput = (numberRow, numberCol) => {
        this._createMatrix(numberRow, numberCol)
    }


    _handlerUserClick = (idItem) => {
        // this.setState((prevState) => {
        //     return {
        //         matrix: prevState.matrix.map(elem => {
        //             return elem.map(e => {
        //                 if (e.id === idItem) {
        //                     return {
        //                         ...e,
        //                         amount: e.amount + 1
        //                     }
        //                 }
        //             })
        //         })
        //     }
        // })
    }

    render() {
        const { matrix } = this.state
        return (
            <>
                {
                    matrix.length > 0
                        ? <RenderTable arrItems={matrix} onUserClick={this._handlerUserClick} />
                        : <UserInput onUserInput={this._handlerUserInput}
                        />}
            </>
        )
    }
}