const fallingBricks = require('./falling-bricks.js');
const assertions = [
  [[1], [1], "test assertion -- should pass"],
  [ fallingBricks([ 
      [1,0,0,0] , 
      [1,1,1,0] ], 
      [[1,0]]
    ), 
    [ 2 ],
    "removing a brick should cause attached bricks to fall" ],
  [ fallingBricks([ 
    [1,0,0,0] , 
    [1,1,0,0] ], 
    [[1,1], [1,0]]
  ), 
  [ 0, 0 ],
  "bricks that have already been removed should not fall" ],
]

const batch_assert = arr => arr.reduce((failure_count, test) => {
  const [expression, expected_outcome, description] = [...test];
  if (JSON.stringify(expression) === JSON.stringify(expected_outcome)) {
    console.log("💗 - " + description)
  } else {
    failure_count++;
    console.log(
      "💔 - " + description + ":\n",
      "  expected " + JSON.stringify(expected_outcome) + ",\n", 
      "  got " + JSON.stringify(expression) + "."
    );
  }
  return failure_count;
}, 0);


const failure_count = batch_assert(assertions);
console.log('tests completed with', failure_count, failure_count !== 1 ? "failures" : "failure")
return failure_count;