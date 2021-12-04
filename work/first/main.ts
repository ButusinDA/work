abstract class AClass {

    constructor(n: number) {
        this.fill(n);
    }

    protected Numbers: number[] = []; 
  
    abstract sort(): number[];

    protected fill(n: number): void{
        for (var i = 0; i < n; i++) {
            this.Numbers.push(Math.floor(Math.random() * 10));
        }
    };

    protected factorial(): number[]{
        return this.Numbers.map(x => this.getFactNum(x));
    }

    private getFactNum(num: number): number {
        return (num == 0) ? 1 : num * this.getFactNum(num-1);
    }
  }

  class Class1 extends AClass{
     
    constructor(n: number){ 
        super(n);
    }

    sort(): number[]{
        this.Numbers.sort((a, b) => a - b);
        return this.factorial();
    }
     
}

class Class2 extends AClass{
     
    constructor(n: number){ 
        super(n);
    }

    sort(): number[]{
        this.Numbers.sort((a, b) => b - a);
        return this.factorial();
    }
     
}

let el1 = new Class1(5);
let el2 = new Class2(3);

console.log(el1.sort());
console.log(el2.sort());