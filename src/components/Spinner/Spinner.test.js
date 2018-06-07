import React from 'react';
import Spinner from './';
import {shallow} from 'enzyme';


describe('Spinner', () => {

  it('renders wihtout crashing', () => {
    shallow(<Spinner />);
  });

});
