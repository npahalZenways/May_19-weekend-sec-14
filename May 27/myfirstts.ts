var phone = 12345;
var myname: string;
var allNames : number[] = [];

allNames.push(1);

var isTrue : boolean;

// Tuple
var myTuple: [number[], string, boolean] = [[1], '', true];

// var union : [number | string] = ['',1]

function abc(param: number | string){

}

abc('true')

enum beverage {milk = 10, coffee=9, tea};

var bev = beverage[10];

var ind = beverage.milk;

console.log(bev, ind);

function myFunction(param:number) : number{
    
    return param;
}
var rr = myFunction(99999999999999)