// DOM Manipulation
import React from 'react';
import {shallow,configure} from 'enzyme';
import Question from './Question';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
test('Question after loading the content', () => {
    const quesWrapper = shallow(<Question />);
    expect(quesWrapper.text()).toEqual('Loading.....');
    expect(quesWrapper.find('.loading').length).toEqual(1);
});