import React from 'react';
import { players } from './players';
import PlayersList from './PlayersList';
import SearchBox from './SearchBox';
import './App.css';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            players: players,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        };

    render() {
        const filterPlayers = this.state.players.filter(player => {
            return player.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>Liverpool squad</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <PlayersList players={filterPlayers}/>
            </div>
    
        );
    }
}

export default App;