# Coding Challenge 3: Two Sum II

## Problem Statement
Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where 1 <= `index1` < `index2` <= `numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

## Example 1:
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

## Example 2:
```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

## Example 3:
```
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

## Constraints:
- 2 <= numbers.length <= 3 * 10^4
- -1000 <= numbers[i] <= 1000
- numbers is sorted in non-decreasing order.
- -1000 <= target <= 1000
- The tests are generated such that there is exactly one solution.

## Implementation
The Two Sum II algorithm is implemented using the two-pointer approach:
1. Initialize left pointer at the beginning and right pointer at the end of the array
2. Calculate sum of elements at both pointers
3. If sum equals target, return indices (1-indexed)
4. If sum is less than target, move left pointer right
5. If sum is greater than target, move right pointer left
6. Continue until pointers meet or solution is found

## Time and Space Complexity
- Time Complexity: O(n) - Each element is visited at most once
- Space Complexity: O(1) - Only using constant extra space regardless of input size

## Code Structure
- `TwoSum.tsx`: React Native component with modern UI design and optimized algorithm implementation

## Testing
You can test by:
1. Using the provided examples
2. Entering your own array and target values
3. Verifying the output matches expected results
