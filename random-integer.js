'use strict';

const MAX = 100;
function randomInteger() {
  return ~~( Math.random() * MAX );
}
module.exports = randomInteger;
