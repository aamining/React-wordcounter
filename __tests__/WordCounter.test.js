import React from 'react';
import {shallow } from 'enzyme';
import {configure} from 'enzyme'
import WordCounter from '../src/WordCounter';
import Editor from '../src/Editor';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../src/Counter'
import ProgressBar from '../src/ProgressBar'
import countWords from '../src/countWords'

configure({ adapter: new Adapter() });

describe ("When I type some words", () => {
  const target  = 10;
  const inputString  = "one two three four five"
  const wordCounter = shallow(<WordCounter targetWordCounter = { target} />);
  const textArea = wordCounter.find(Editor).dive().find('textarea')

  textArea.simulate('change', { target: { value: inputString }});
  wordCounter.update();

  it("display the correct count as a number", () => {
    const counter = wordCounter.find(Counter)
    expect(counter.prop('count')).toBe(countWords(inputString));
  });

  it("display the correct progress", () => {
    const progressBar = wordCounter.find(ProgressBar)
    expect(progressBar.prop('completion')).toBe(countWords(inputString)/target);
  });

})
