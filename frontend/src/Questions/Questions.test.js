import React from 'react';
import renderer from 'react-test-renderer';
import QuestionsFetch from './QuestionsFetch';
import Questions from './Questions';
import axios from 'axios';


test('Link changes the class when hovered', () => {

    const wrapper = renderer.create(<Questions />);
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

 });





/*test('should fetch users', () => {
  const resp = {data: [{name: 'Bob'}]};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(users => expect(users).toEqual(resp.data));
});*/