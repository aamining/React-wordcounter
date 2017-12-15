import countWords from '../src/countWords';

describe ("the count function",()=>{
it ("the counting function",()=>{
  expect (countWords ("one twe three")).toBe(3);
});


it ("counts an empty string",()=>{
  expect (countWords ("")).toBe(0);
});

it ("counts the correct number of words",()=>{
  expect (countWords ("$ one % twe three")).toBe(3);
});

it ("counts the correct number of words",()=>{
  expect (countWords ("one twe three")).toBe(3);
});

})
