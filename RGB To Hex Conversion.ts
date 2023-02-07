/*

The rgb function is incomplete. 
Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

  rgb(255, 255, 255) // returns FFFFFF
  rgb(255, 255, 300) // returns FFFFFF
  rgb(0,0,0) // returns 000000
  rgb(148, 0, 211) // returns 9400D3

*/

function componentToHex(color: number): string {
  if(color < 0) return '00';
  if(color > 255) return 'FF';
  
  const hex = color.toString(16).toUpperCase();
  
  return (
    hex.length == 1 
      ? "0" + hex 
      : hex
  )
}

export function rgb(r: number, g: number, b: number): string {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}