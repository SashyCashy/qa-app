import React from 'react';
import axios from 'axios';
import QuestionsFetch from "./QuestionsFetch";
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

jest.mock('axios');

test('Should fetch users', async () => {
    const wrapper = shallow(<QuestionsFetch />);
    const wrapperInstance = wrapper.instance();
    const resp = {data: [{name: 'Bob'}]};
    //axios.get.mockResolvedValue(resp);
    //console.log(QuestionsFetch.getJSONAsync());
    const data = await wrapperInstance.getJSONAsync();
    console.log(data);
    return data;
});

test("Test for String return", () => {
    console.log(QuestionsFetch.returnString());
})