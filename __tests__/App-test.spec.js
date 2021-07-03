/**
 * @format
 */
import React from 'react';
import { shallow } from 'enzyme';
import {expect, it, describe} from '@jest/globals';
import App from '../src/App';


it('renders correctly', () => {
  shallow(<App />);
});
