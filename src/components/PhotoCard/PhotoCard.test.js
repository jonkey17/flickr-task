import React from 'react';
import {shallow} from 'enzyme';

import FlickrApiResponseMock from '../../api/FlickrApiResponseMock';

import PhotoCard from './';

describe('PhotoCard', () => {
  let item;

  beforeEach(() =>{
    item = FlickrApiResponseMock.json().items[0];
  });

  it('renders without crashing', () => {
    shallow(<PhotoCard />);
  });

  it('renders null if no props', () => {
    const component = shallow(<PhotoCard />);
    expect(component.type()).toBeNull();
  });

  describe('When props are passed', () => {
    test('it renders', () => {
      const component = shallow(<PhotoCard item={item} />);
      expect(component.type()).not.toBeNull();
    });

    test('creates a img with the proper path', () => {
      const component = shallow(<PhotoCard item={item} />);
      const image = component.find('img');
      expect(image.props().src).toBe('https://farm2.staticflickr.com/1727/28768200058_aaac6fe4f7_m.jpg');
    });

    test('creates a div with the proper description', () => {
      const component = shallow(<PhotoCard item={item} />);
      const desc = component.find('.Description');
      expect(desc.html()).toBe('<div class=\"Description\"><div class=\"Subtitle\">Description:</div><div><p>Kielder Water England, Europes biggest reservoir and home to zillions of aggressive midges lol</p></div></div>');
    });
  });
});