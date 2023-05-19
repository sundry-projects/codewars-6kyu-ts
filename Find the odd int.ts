/*
  Given an array of integers, find the one that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.

  Examples: 
    [7] should return 7, because it occurs 1 time (which is odd).
    [0] should return 0, because it occurs 1 time (which is odd).
    [1,1,2] should return 2, because it occurs 1 time (which is odd).
    [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

type HashType = {
  [key: string]: number
};

export function findOdd(xs: number[]): number {
  const unique_numbers: Array<number> = Array.from(new Set(xs));
  const hash: HashType = {};
  let result: number = 0;
  
  for(let i = 0; i < unique_numbers.length; i++) {
    const same_numbers = xs.filter((number) => {
      return number === unique_numbers[i];
    });

    hash[same_numbers[0]] = same_numbers.length;
  }

  for (const number in hash) {
    if (hash[number] % 2 !== 0) result = +number    
  }

  return result;
}