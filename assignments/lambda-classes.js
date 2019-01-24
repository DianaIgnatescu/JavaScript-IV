// CODE here for your Lambda Classes
class Person {
  constructor (personAttrs) {
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerAttrs) {
    super(projectManagerAttrs);
    this.gradClassName = projectManagerAttrs.gradClassName;
    this.favInstructor = projectManagerAttrs.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel study times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}