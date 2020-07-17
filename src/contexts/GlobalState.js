import React, { Component, createContext, useReducer } from 'react';

// Create Context
export const GlobalContext = createContext();

// Initial State
// const initialState = {
//     transactions : [
//         { id: 1, text: 'Flower', amount: -20},
//         { id: 2, text: 'Salary', amount: 300},
//         { id: 3, text: 'Book', amount: -10},
//         { id: 4, text: 'Camera', amount: 150},
//     ]
// }

export class GlobalProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactions : [],
        }
        this.deleteTransaction = this.deleteTransaction.bind(this);
        this.addTransaction = this.addTransaction.bind(this);
    }

    componentDidMount(){
        this.setState({
            transactions : JSON.parse(localStorage.getItem("transactions")) || [] ,
        })
    }

    deleteTransaction(id){
        const {transactions} = this.state;
        const newTransactions = transactions.filter(transaction => transaction.id !== id);
        this.setState(() => {
            localStorage.setItem("transactions",JSON.stringify(newTransactions))
            return {
                transactions : newTransactions,
            }
        })
    }
    addTransaction(transaction){
        const newTransactions = [...this.state.transactions,transaction];
        this.setState(() => {
            localStorage.setItem("transactions",JSON.stringify(newTransactions))
            return {
                transactions : newTransactions ,
            }
        })
        
    }


    
    render() {
        return (
            <GlobalContext.Provider value={{...this.state,deleteTransaction:this.deleteTransaction,addTransaction:this.addTransaction}}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

// // Create Context
// export const GlobalContext = createContext(new GlobalProvider().state);