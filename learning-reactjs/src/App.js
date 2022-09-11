import "./App.css"
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import User from "./components/User";

function App() {
    return (
    <div>
     <h1>Hello!</h1>
     <HelloWorld />
     <SayMyName name="Gustavo"/>
     <User name="Gustavo" idade="16" photo="./img/My.jpg" />
    </div>
    )
}

export default App;