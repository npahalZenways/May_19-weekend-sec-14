interface myInterface{
    // we can only declare bt cannot provide definition

    name: string;
    model: number;
    getAllProperties: () => void;
}

// var abc : myInterface = {

// }

class car implements myInterface{
    name;
    model;
    getAllProperties(){

    }
}

abstract class rules{
    name: string;
    model: number;
    abstract getAllProperties(): void;
}

class car2 extends rules{
    name;
    model;
    getAllProperties(){

    }
}

function gener<U>(param:U):U{
    return param;
}

gener<number>(123);


gener<string>('sdfg');
var abcd: car2 = new car2();
gener<car2>(abcd)