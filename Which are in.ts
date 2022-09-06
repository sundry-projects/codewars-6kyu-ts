function inArray(a1: string[], a2: string[]): string[] {
  let result: string[] = [];

  for (let i = 0; i < a1.length; i++) { 
    for (let j = 0; j < a2.length; j++) {
      if(a2[j].includes(a1[i]) === true){
          result.push(a1[i]);
      }
    }
  }
  result = [...new Set(result)];
  return result.sort();
}