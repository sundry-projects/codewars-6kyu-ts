/*
  Mirror - Mirror
  Can you mirror the properties on an object?

  Given an object with properties with no value

  abc: -
  arara: -
  xyz: -
  Return a new object that have the properties with its mirrored key!

  abc: cba
  arara: arara
  zxc: cxz

  "You cannot change the original object, because if you did that the reflection would change."
*/

export const mirror = (obj: Record<string,any>): Record<string,string> => {
  const input_object_copy: Record<string, string> = {...obj};

  for (const key in input_object_copy) {
    input_object_copy[key] = key.split('').reverse().join('');
  }

  return input_object_copy;
};