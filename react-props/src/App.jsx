import logo from './logo.svg';
import './App.css';
import DestructFunc from './assets/DestructPara';
import Greet from './assets/Greet'
import Login from './assets/Login'
import DestructPara from './assets/DestructPara'
import Student from './assets/Student'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                
            {/* Greet Component */}
                <Greet firstName="Pearl" fullName="PearlArc" />
                <Greet firstName="RnR" fullName="Rewards and Recognition" />

            {/* Login Component */}
                <Login name="Monica" time='0' isLoggedIn={true}>
                    <p>This is a children</p>
                </Login>
                <Login name="Chandler" time={20} isLoggedIn={false} />
                <Login name="Rachel" time={30} isLoggedIn={true} />
                <Login />

            {/* DestructFunc Component */}
                <DestructFunc firstName="Pearl" fullName="PearlArc" />
                <DestructFunc firstName="RnR" fullName="Rewards and Recognition" />

            {/* DestructPara Component */}
                <DestructPara firstName="Pearl" fullName="PearlArc" />
                <DestructPara firstName="RnR" fullName="Rewards and Recognition" />

            {/* Student Component */}
                <Student name="Monica" age={20} isStudent={true}>
                    <p>This is a children</p>
                </Student>
                <Student name="Chandler" age={20} isStudent={false} />
                <Student name="Rachel" age={30} isStudent={true} />
                <Student />
            </header>
        </div>
    );
}

export default App;
