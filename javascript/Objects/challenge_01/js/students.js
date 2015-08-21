var students = [
  {name: 'Matt', track: 'Web Development', achievements: 15, points: 130},
  {name: 'Fan', track: 'Back End Development', achievements: 20, points: 120},
  {name: 'Sarah', track: 'Nursing', achievements: 60, points: 145},
  {name: 'Grant', track: 'Law', achievements: 10, points: 90},
  {name: 'Mark', track: 'Grocery Management', achievements: 25, points: 135}
];

var message = '';
var student;
var search;
var noStudent = true;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>'
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
  search = prompt('Please enter the first name of a student (or type "quit" to end).')
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  else {
    for (var i = 0; i < students.length; i++ ) {
      student = students[i];
      if ( student.name.toLowerCase() === search.toLowerCase()) {
        message += getStudentReport( student );
        print(message);
        noStudent = true;
      }
    }
    if (!noStudent) {  // This if statment is to solve the problem if a student dosen't exist.
      print('<p> No student named ' + search + '</p>');
    }
    // message ='';  // Uncomment this out if you want to show only recent search
    noStudent = false; //Resets noStudent = false again and the user can keep on searching.
  }
}



