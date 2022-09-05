function parse(data: string): number[] {
  const commands: string[] = data.split('')
  const result: number[] = [];
  let number: number = 0;

  commands.map((e) => {
    switch (e) {
      case 'i': number++; break
      case 'd': number--; break
      case 's': number = number ** 2; break
      case 'o': result.push(number); break
    }
  })

  return result;
}