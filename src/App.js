import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import { createContext, useState } from 'react'

export const UserContext = createContext()

function App() {
    const [user, setUser] = useState(
        {
            avatar: 'https://source.unsplash.com/random/400x400/?face',
            name: 'somebody',
            followers: 1234,
            following: 123
        }
    )
    return (

        <div className="App">
            <UserContext.Provider value={user}>
                <Nav/>
                <Body/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
