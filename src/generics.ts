class ArrayOfAnything<T> {
  constructor(public data: T[]) {}

  get(index: number): T {
    return this.data[index];
  }
}

const test = new ArrayOfAnything<string>(['a', 'b', 'c']);

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything(['a', 'b', 1, true]);

class PrintHouse {
  print(): void {
    console.log('house');
  }
}
class PrintCar {
  print(): void {
    console.log('car');
  }
}

interface Printable {
  print(): void;
}

function printClass<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printClass<PrintHouse>([new PrintHouse(), new PrintHouse()]);
