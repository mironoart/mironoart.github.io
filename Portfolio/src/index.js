import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Main from './components/Main';

ReactDOM.render(
    
        <BrowserRouter > 
            <Main /> 
        </BrowserRouter>,
   
    document.getElementById('root')
);



/*
import React from 'react';
import ReactDOM from 'react-dom';

//CREATING ACTION
const addMessage = {
    type: 'ADD_MESSAGE',
    payload: "You Too", 
  };
  
  //CREATING REDUCER
  const initialState = {
    messages: ['Hello'],
  }
  function reducer(state = initialState, action) {
    if(action.type === 'ADD_MESSAGE'){
        return {
          messages:state.messages.concat(action.payload)
        }
    }else if( action.type === 'DELETE_MESSAGE'){
        return {
           messages:[
            ...state.messages.slice(0, action.index),
            ...state.messages.slice(action.index + 1,state.messages.length),
          ],
        }
    }else return state
  }
  
  //CREATING STORE
  function createStore(reducer){
    let state = initialState;
    
    const getState = () => state; //equivalent 
                                  //{return state}
    const listeners = [];
    const subscribe = (listener) => (
      listeners.push(listener) 
    );
    
    const dispatch = (action) =>{
      state = reducer(state, action);
      listeners.forEach(l => l());
    };
    
    return {
      subscribe,
      getState,
      dispatch,
    };
  }
  
  //TRY OUT
  const store = createStore(reducer);
  store.dispatch(addMessage);
  
  
  
  
  //CONNECTING REDUX TO REACT
  
  
  
  class App extends React.Component {
       
    componentDidMount(){
      store.subscribe( () => this.forceUpdate() )
    }
    
    
    render() {
      const messages = store.getState().messages;
      
      return (
        <div className = 'ui-segment' >
          <MessageView messages = {messages} />
          
          <MessageInput />
        </div>
      );
  
      } 
  } 
  
  class MessageInput extends React.Component {
    state = {
      value: '',
    }
  
    onChange = (e) => {
      this.setState({
        value: e.target.value,
      })
    }
  
  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MESSAGE',
      payload:this.state.value,
    });
    console.log(store.getState().messages)
    
  }
  
  render(){
  return(
  <div className='ui input'>
    <input 
      onChange = {this.onChange}
      value = {this.state.value}
      type = 'text'
     />
    <button 
      onClick ={this.handleSubmit}
      className ='ui primary button'
      type = 'submit'
     > Submit </button>
  </div>
  );
  }
  }
  
  class MessageView extends React.Component {
    
    handleClick = (index) => {
      console.log(index)
      store.dispatch({
        type: 'DELETE_MESSAGE',
        index: index,
      });
    };
  
  render() { 
    console.log(this.props.messages)
    const messages = this.props.messages.map( (message, index) => (
      <div className = 'comment'
           key = {index}
           onClick ={() => this.handleClick(index)}
      > {message}
      </div>
     
  ));
    
    return (
      <div
        className = 'ui comments'>
        {messages}
      </div>
    );
  }
  }
  
  
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
  

  */

