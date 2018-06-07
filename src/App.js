import React, { Component } from 'react';
import logo from './logo.svg';

import FlickrApiService from './api';

import PhotoCard from './components/PhotoCard';
import PhotoCardList from './components/PhotoCardList';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos(options){
    FlickrApiService.getPhotos(options).then(res => {
      this.setState({items: res.items});
    });
  }

  render() {
    return (
      <div className="App">
        <PhotoCardList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
