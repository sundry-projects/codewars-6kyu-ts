/*
  Task:
    This kata requires you to write an object that receives a file path and does operations on it.

  const fm = new FileMaster('/Users/person1/Pictures/house.png');
    fm.extension(); // output: 'png'
    fm.filename(); // output: 'house'
    fm.dirpath(); // output: '/Users/person1/Pictures/'
*/

export class FileMaster {
  private filepath: string;
  private path_separator: string

  constructor(filepath: string) {
    this.filepath = filepath;
    this.path_separator = '/'
  }
  
  extension() {
    const splitted_path: Array<string> = this.filepath.split(this.path_separator);
    const file: Array<string> = splitted_path[splitted_path.length - 1].split('.');
    const file_last_extension: string = file[file.length - 1];

    return file_last_extension;
  }
  
  filename() {
    const splitted_path: Array<string> = this.filepath.split(this.path_separator);
    const file: Array<string> = splitted_path[splitted_path.length - 1].split('.');
    const file_name: string = file[0];

    return file_name;
  }
  
  dirpath() {
    const splitted_path: Array<string> = this.filepath.split(this.path_separator);
      splitted_path.splice(splitted_path.length - 1);

    return splitted_path.join(this.path_separator) + this.path_separator;
  }
}