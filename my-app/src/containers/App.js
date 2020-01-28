import React, { Component } from 'react';
import styles from './App.module.css';
// import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"
import withClass from "../hoc/WithClass"
import Aux from "../hoc/Aux"
import AuthContext from "../context/auth-context"

class App extends Component {
  
  constructor(props){
  super(props);
  console.log("[App.js] constructor");
  
  }


  state = {
    persons: [
      { id:"ijjok",name: 'Calvin', age: 22 },
      { id:"asdfg",name: 'Manu', age: 29 },
      { id:"asdsa",name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFrom Props", props)
    return state;  
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("[app.js] should componentUpdate")
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate")
  }

  nameChangedHandler = ( event, id) => {

      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons : persons,
        changeCounter: prevState.changeCounter + 1
      }
    })

  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }


  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () =>  {
    this.setState({authenticated: true});
  };

  render() {
    
    console.log("[app.js] render")

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
          />
        </div> 
        
      );
      
        }


    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        <AuthContext.Provider 
        value={{
        authenticated: this.state.authenticated, 
        login: this.loginHandler
        }}>
        {this.state.showCockpit ? ( 
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons} 
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler} 
        />
         ) : null}
        {persons}

        </AuthContext.Provider>
        
      </Aux> 
        ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


export default withClass(App, styles.App);


/// Radium allows you to use inline styles with features like media queries