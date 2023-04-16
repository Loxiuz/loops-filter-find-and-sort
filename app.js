"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  console.log("initApp: app.js is running 🎉");
  //   loopThroughNames();
  //   loopThroughYears();
  //   loopThroughFiveFirstYears();
  //   loopThroughFiveLastYears();
  //   logNumbers();
  //   teacherOver40();
  //   forOfSearchTeachersByName("ma");
  //   forInTeacher();
  //   whileTeachersLength();
  //   whileTeacherIsLecturer();
  //   whileSearchByName("pet");
}

// ========== forEach ========== //
function loopThroughNames() {
  names.forEach(showNameAndIndex);

  function showNameAndIndex(name, index) {
    if (index == 0) {
      console.log(`First name in array: ${name}`);
    } else if (index == names.length - 1) {
      console.log(`Last name in array: ${name}`);
    } else if ((index + 1) % 2 == 0) {
      //Hvert andet element i array'et
      console.log(`Every other name: ${name}`);
    } else {
      console.log(name);
    }
    console.log(index);
  }
}
// ========== for loop ========== //
function loopThroughYears() {
  for (let i = 0; i < years.length; i++) {
    if (i == years.length - 1) {
      console.log(`${years[i]}: This is the last year in the list`);
    } else if (years[i] == 2023) {
      console.log(`${years[i]}: Current year`);
    } else {
      console.log(years[i]);
    }
    console.log(i);
  }
}
function loopThroughFiveFirstYears() {
  for (let i = 0; i < 5; i++) {
    console.log(years[i]);
    console.log(i);
  }
}
function loopThroughFiveLastYears() {
  for (let i = 4; i < years.length; i++) {
    console.log(years[i]);
    console.log(i);
  }
}
function logNumbers() {
  console.log("Fra 0 til 9");
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("Fra 1 til 10");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log(
    "- Fra 10 til 0. Når du rammer 0 skal du console.log'e “liftoff”"
  );
  for (let i = 10; i >= 0; i--) {
    if (i === 0) {
      console.log("Liftoff!");
    } else {
      console.log(i);
    }
  }
  console.log(
    "Fra 1 til 19, men kun de ulige numre. Du må ikke anvende if, men ændre på hvordan du tæller index-værdien"
  );
  for (let i = 1; i <= 19; i += 2) {
    console.log(i);
  }
  console.log(
    "Fra 1 til 16777216, men du skal fordoble tallet hver gang (2, 4, 8, 16 …)"
  );
  for (let i = 1; i <= 16777216; i *= 2) {
    console.log(i);
  }
  console.log(
    "Fra 111 til 138, i steps af 3 (dvs at tal nummer 2 er 114 (111+3))"
  );
  for (let i = 111; i <= 138; i += 3) {
    console.log(i);
  }
  console.log("Fra 100 ned til 0 i 10 steps");
  for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
  }
}
// ========== for of loop ========== //
function teacherOver40() {
  let result = [];
  for (const teacher of teachers) {
    if (teacher.age > 40) {
      result.push(teacher);
    }
  }
  console.log(result);
}
function forOfSearchTeachersByName(searchValue) {
  let result = [];
  for (const teacher of teachers) {
    if (teacher.name.toLocaleLowerCase().includes(searchValue)) {
      result.push(teacher);
    }
  }
  console.log(result);
  console.log(searchValue);
}
// ========== for in loop ========== //
function forInTeacher() {
  for (const key in teacher) {
    console.log(key);
    const value = teacher[key];
    console.log(value);
  }
}
// ========== while loops ========== //
function whileTeachersLength() {
  let i = 0;
  while (i < teachers.length) {
    const teacher = teachers[i];
    console.log(teacher);
    i++;
  }
}
function whileTeacherIsLecturer() {
  let i = 0;
  while (i < teachers.length) {
    const teacher = teachers[i];
    if (teacher.title == "Lecturer") {
      console.log(teacher);
    }
    i++;
  }
}
function whileSearchByName(searchValue) {
  let result = [];
  let i = 0;
  while (i < teachers.length) {
    const teacher = teachers[i];
    if (teacher.name.toLocaleLowerCase().includes(searchValue)) {
      result.push(teacher);
    }
    i++;
  }
  console.log(result);
  console.log(searchValue);
}
// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
