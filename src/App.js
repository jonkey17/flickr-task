import React, { Component } from 'react';
import logo from './logo.svg';

import FlickrApiService from './api';

import SearchBar from './components/SearchBar';
import PhotoCardList from './components/PhotoCardList';
import Spinner from './components/Spinner';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoading: false,

    }

    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos(options){
    this.setState({isLoading: true});
    FlickrApiService.getPhotos(options).then(res => {
      this.setState({items: res.items});
      this.setState({isLoading: false});
    });
  }

  onSearch(text) {
    this.setState({items: []});
    this.getPhotos({
      tag: text
    });
  }

  showSpinner() {
    if (this.state.isLoading) {
      return <Spinner />
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch} />
        <PhotoCardList items={this.state.items}/>
        {this.showSpinner()}
      </div>
    );
  }
}

export default App;
