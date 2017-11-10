import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import BucketList from './BucketList';

Enzyme.configure({ adapter: new Adapter() });

describe('<BucketList />', () => {
  it('should render an input', () => {
    const bucketList = shallow(
      <BucketList />
    )
    expect(bucketList.contains('#adventureInput'))
  })
  it('should render a button', () => {
    const bucketList = shallow(
      <BucketList />
    )
    expect(bucketList.contains('button'))
  })
})
