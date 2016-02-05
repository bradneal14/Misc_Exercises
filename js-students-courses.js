function Student(first, last){
  this.first = first;
  this.last = last;
  this.courses = [];
}

Student.prototype.name = function(){
  return this.first + " " + this.last;
};

// Student.prototype.courses = function(){
//   return this.courses;
// };

Student.prototype.enroll = function(course){
  if ((this.courses.indexOf(course) === -1) && !this.hasConflict(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
  // else {
  //   // throw "Unable to enroll student";
  // }
};


Student.prototype.courseLoad = function() {
  var courseLoad = { };
  for (var i = 0; i < this.courses.length; i++) {
    if (courseLoad[this.courses[i].department] === undefined) {
      courseLoad[this.courses[i].department] = this.courses[i].numCredits;
    }
    else {
      courseLoad[this.courses[i].department] += this.courses[i].numCredits;
    }
  }
  return courseLoad;
};

function Course(name, department, numCredits, days, block){
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.students = [];
  this.days = days;
  this.block = block;
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function(course) {
  for (var i = 0; i < this.days.length; i ++) {
    if ((course.days.indexOf(this.days[i]) !== -1) &&
      (this.block === course.block)) {
        return true;
    }
  }
  return false;
};

// Student.prototype.hasConflict = function(course) {
//   for (var i = 0; i < this.courses.length; i++) {
//     if (this.courses[i].conflictsWith(course)) {
//       return true;
//     }
//   }
//   return false;
// };

Student.prototype.hasConflict = function(course) {
  var conflict = false;
  this.courses.forEach(function(el) {
    if (el.conflictsWith(course)) {
      conflict = true;
    }
  });

  return conflict;
};

var s1 = new Student("brad", "neal");
var s2 = new Student("tom", "jackson");

var c1 = new Course("bio", "science", 3, ["mon", "wed", "fri"], 1);
var c2 = new Course("chem", "science", 4, ["mon", "wed", "fri"], 2);
var c3 = new Course("stats", "math", 3, ["mon", "wed", "fri"], 3);
var c4 = new Course("algebra", "math", 4, ["fri"], 1);

c1.addStudent(s1);
c1.addStudent(s2);
c2.addStudent(s1);
c2.addStudent(s2);
c3.addStudent(s1);
// c4.addStudent(s1);
