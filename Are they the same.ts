/*
  Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
  with the same multiplicities (the multiplicity of a member is the number of times it appears). 
  "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

  Examples
    Valid arrays
      a = [121, 144, 19, 161, 19, 144, 19, 11]  
      b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

      comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 
      361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

      a = [121, 144, 19, 161, 19, 144, 19, 11] 
      b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
    Invalid arrays
      If, for example, we change the first number to something else, comp is not returning true anymore:

      a = [121, 144, 19, 161, 19, 144, 19, 11]  
      b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

      comp(a,b) returns false because in b 132 is not the square of any number of a.

      a = [121, 144, 19, 161, 19, 144, 19, 11]  
      b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

      comp(a,b) returns false because in b 36100 is not the square of any number of a.

  Remarks
    a or b might be null or None
    If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if(!a1 || !a2) return false;
  
  const roots_a2: number[] = a2.map((num) => { return Math.sqrt(num) }).sort();
  const sorted_a1: number[] = a1.sort();

  const result:boolean = sorted_a1.length == roots_a2.length && sorted_a1.every((v, i) => roots_a2[i] == v)

  return result;
}