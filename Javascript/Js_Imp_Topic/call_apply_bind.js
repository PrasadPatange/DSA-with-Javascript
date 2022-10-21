// Call() | Apply() | Bind()

let student = {
    fname:"prasad",
    lname:"patange",
    getEmail: function(){
        return `${this.fname}.${this.lname}@gmail.com`
    }
}

console.log("Student: ",student.getEmail());

let teacher = {
    fname:"gajanan",
    lname:"patil"
}
// Call : 
console.log("Teacher: ",teacher);
console.log("Get student getEmail() using call() :");
console.log(student.getEmail.call(teacher));
console.log("Get student getEmail() using apply() :");
console.log(student.getEmail.apply(teacher));
console.log("Get student getEmail() using bind() :");
const teacherEmail = student.getEmail.bind(teacher); //create Copy
console.log(teacherEmail());
console.log("***********************************");

// Apply():

function chooseSubject(sub1,sub2){
    return this.subject = [sub1,sub2];
}

console.log("chooseSubject using call() :");
console.log(chooseSubject.call(student,'maths','science'));

console.log("chooseSubject using apply() :");
console.log(chooseSubject.apply(student,['maths','science']));

console.log("chooseSubject using bind() :");
const studSubs = chooseSubject.bind(student,'maths','science'); // create Copy
console.log(studSubs());

console.log("***********************************");

// Bind():

console.log("Get student getEmail() using bind() | create Copy Above teacherEmail() :");
console.log(teacherEmail());

console.log("chooseSubject using bind() | create Copy Above studSubs() : ");
console.log(studSubs());