import React, {PureComponent} from "react"
import Person from "./Person/Person"


class Persons extends PureComponent{

    // static getDerivedStateFromProps(props, state){
    // console.log("[Persons.js] getDerivedStateFromProps")
    // return state;
    //}


    /*
  shouldComponentUpdate(nextProps, nextState){
    console.log(["Persons.js] shouldComponentUpdate"])
    if( nextProps.persons !== this.props.persons || 
        nextProps.changed !== this.props.changed || 
        nextProps.clicked !== this.props.clicked){
    return true;
    } else {
    return false;
    }
    
  }
*/
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate")
    return { message: "Snapshot!"}
  }

  // Hook that will be used most often 
componentDidUpdate(prevProps, prevState, snapshot){
  console.log("[Persons.js] ")
  console.log(snapshot);
}


componentWillUnmount(){
  console.log("[Person.js] componentWillUnmount")
}

  render(){
        console.log(["Persons.js] rendering"])
        return this.props.persons.map((person, index) => {
        return ( 
        <Person 
        click={() => this.props.clicked(index)}
        key={person.id}
        name={person.name} 
        age={person.age} 
        changed={(event) => this.props.changed(event, person.id)}
        ></Person>
        )
      });
    }
  }
  
      export default Persons;