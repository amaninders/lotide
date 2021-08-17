const loopyLighthouse = function(range, multiples, words) {
  for (let index = range[0]; index <= range[range.length - 1]; index++) {
    let condition0 = (index % multiples[0] === 0);
    let condition1 = (index % multiples[1] === 0);
    let string = (condition0 && condition1) ? words.join() : (condition0 ? `${words[0]}` : (condition1 ? `${words[1]}` : index));
    console.log(string);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

// https://gist.github.com/amaninders/a21cd974812b20698f4e1cd34650ac27