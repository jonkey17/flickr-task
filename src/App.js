import React, { Component } from 'react';
import logo from './logo.svg';

import FlickrApiService from './api';

import SearchBar from './components/SearchBar';
import PhotoCard from './components/PhotoCard';
import PhotoCardList from './components/PhotoCardList';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }

    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos(options){
    FlickrApiService.getPhotos(options).then(res => {
      this.setState({items: res.items});
    });
  }

  onSearch(text) {
    this.getPhotos({
      tag: text
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch} />
        <PhotoCardList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
