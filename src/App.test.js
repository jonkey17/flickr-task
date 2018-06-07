import React from 'react';
import {shallow, mount} from 'enzyme';

import FlickrApiResponseMock from './api/FlickrApiResponseMock';

import FlickrApiService from './api';

import App from './App';

jest.mock('./api', () => {
  return {
    getPhotos: jest.fn()
  }
});

describe('App', () => {
  beforeEach(() => {
    FlickrApiService.getPhotos.mockImplementation(() => Promise.resolve(FlickrApiResponseMock.json()));
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('calls the API service', () => {
    const component = shallow(<App />);
    expect(FlickrApiService.getPhotos.mock.calls[0][0]).toBe();
  });

  it('when getPhotos is call updates state with API response', async() => {
    const component = shallow(<App />);
    const response = FlickrApiResponseMock.json();
    await component.instance().getPhotos();
    const state = component.state();
    expect(state.items).toEqual(response.items);
  });
});
