class school {
    constructor(schoolname) {
        this.schoolName = schoolname;
    }
}
class student extends school {
    constructor(name, rollno, school) {
        super(school);
        this.name = name;
        this.rollno = rollno;
    }
    print() {
    }
}
class student123 extends school {
    constructor(name, rollno, school) {
        super(school);
        this.name = name;
        this.rollno = rollno;
    }
    print() {
    }
}
var derived = new student('jhg', 76, 'hgf');
var s1 = new student('fsf', 234, 'dsfd');
var s2 = new student123('asdf', 1234, 'asdf');
s1 = s2;
var student1 = new student('nitin', 123, 'ABC school');
console.log(student1);
//# sourceMappingURL=classes.js.map