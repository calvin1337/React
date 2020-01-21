function Person(props) {
    return (
    <div className="person">
     <h1>{props.name}</h1>
     <p>Your age:{props.age}</p>
    </div>
    );
    }
    
    var app = (
      <div>
      <Person name="Calvin" age="22"/>
      <Person name="John" age="14"/>
       </div>
    );
    
    ReactDOM.render(app, document.querySelector("#app"));
    
    