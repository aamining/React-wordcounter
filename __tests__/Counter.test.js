import React from 'react'
import renderer from 'react-test-renderer'
import Counter from '../src/Counter'
describe('A counter', ()=> {
  it ('displays the count', () => {
    const counter = renderer.create(<Counter legend = "count count={34}" />)
    expect(counter.toJson).toMatchSnapshot();

  });
});
