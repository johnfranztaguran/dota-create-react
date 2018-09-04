import React, { Component } from 'react';
import './App.css';
import Loader from './components/loader.js'
import Search from './components/search';
import Header from './components/header';

class App extends Component {
  constructor(){
		super()
		this.state = {
      filterText: "",
			dataHero: []
		}
  }
  
  filterUpdate(value) {
    //whatever types searched will be pass to value and pass to filterText as new state
    this.setState({
      filterText: value
    })
  }

	componentDidMount() {
		fetch("https://api.opendota.com/api/teams/")
		  .then(response => response.json())
		  .then(dataHero => this.setState({ dataHero }));
    }

    handleDelete = teamId => {
      const dataHero = this.state.dataHero.filter(c => c.team_id !== teamId);
      this.setState({ dataHero });
    };

  render() {
    //props, bind(this) to access child component

    console.log("parent component", this.state.filterText)

    return (
      <div>
      <Header />
      <Search filterText={this.state.filterText} 
              filterUpdate={this.filterUpdate.bind(this)}
      />
        <main>
        
        <Loader 
          myData={this.state.dataHero}
          filterText={this.state.filterText}
          onDelete={this.handleDelete}
        />
        </main>
      </div>
    );
  }
}

export default App;
