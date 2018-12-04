/* eslint import/first: 0 */ // This polyfill has to be imported before enzyme
import './tempPolyfills';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// This file is only ever used in tests so enzyme as dev-dependency makes sense
/* eslint import/no-extraneous-dependencies: 0 */

Enzyme.configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn()
};
global.localStorage = localStorageMock;
