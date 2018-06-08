import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

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
      tag: ''

    }

    this.onSearch = this.onSearch.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);

  }

  getPhotos(options) {
    if(!this.state.isLoading){
      this.setState({isLoading: true});
      FlickrApiService.getPhotos(options).then(res => {
        const stateItems = this.state.items.slice();
        this.setState({items: stateItems.concat(res.items)});
        this.setState({isLoading: false});
      });
    }
  }

  onSearch(text) {
    this.setState({items: [], tag: text});
    this.getPhotos({
      tag: text
    });
  }

  onLoadMore(){
    this.getPhotos({tag: this.state.tag})
  }

  showSpinner() {
    if (this.state.isLoading) {
      return <Spinner />
    }
  }

  render() {
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.onLoadMore}
        hasMore={true}>
        <div className="App">
          <SearchBar onSearch={this.onSearch} />
          <PhotoCardList items={this.state.items}/>
          {this.showSpinner()}
        </div>
      </InfiniteScroll>
    );
  }
}

export default App;
