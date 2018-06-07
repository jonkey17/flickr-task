import React from 'react';
import {shallow} from 'enzyme';

import FlickrApiResponseMock from '../../api/FlickrApiResponseMock';

import PhotoCardList from './';

describe('PhotoCardList', () => {
  let items;

  beforeEach(() => {
    items = FlickrApiResponseMock.json().items;
  });

  it('renders without crashing', () => {
    shallow(<PhotoCardList />);
  });

  it('renders MovieListItem children', () => {
    const component = shallow(<PhotoCardList items={items}/>);
    expect(component.find('PhotoCard').length).toBe(20);
  });
});