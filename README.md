A 2 dimensional array of 1s and 0s represents a vertical grid -- 1s are bricks, 0s are empty.

[coordinates are row-col]

A brick will drop unless it is attached directly to the top of the grid OR directly adjacent to another brick that is safe from dropping.

An array of "hits" represents bricks that will be sequentially removed from the grid. 

When a brick is removed, any brick that rely on it for support will fall.

Return an array representing the number of bricks that will drop for each hit.

```
Example 1:
Input: 
grid = [[1,0,0,0],[1,1,1,0]]
hits = [[1,0]]
Output: [2]
Explanation: 
Erasing the brick at (1, 0) causes the bricks at (1, 1) 
and (1, 2) to drop, so we return 2.
```
Example 2:
```
Input: 
grid = [[1,0,0,0],[1,1,0,0]]
hits = [[1,1],[1,0]]
Output: [0,0]
Explanation: FIrst we erase the brick at (1,1). Then 
we remove (1,0). The brick at (1, 1) has already 
been removed, so it does not fall. Each move caused
zero bricks to fall, so we return [0, 0]
 ```

Note:

The number of rows and columns in the grid will be in the range [1, 200].
The number of erasures will not exceed the area of the grid.
It is guaranteed that each erasure will be different from any other erasure, and located inside the grid.
An erasure may refer to a location with no brick - if it does, no bricks drop.

