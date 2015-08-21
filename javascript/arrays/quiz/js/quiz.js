var questions = [
  ['What is the capitol of Oklahoma?', 'oklahoma city'],
  ['What is the capitol of Texas?', 'austin'],
  ['What is the capitol of Oregon?', 'salem'],
  ['What is the capitol of Washington?', 'olympia']
];

var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];

function print (message) {
  // document.write(message);
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList (array) {
  var listHTML = '<ol>';
  for ( var i = 0; i < array.length; i++ ) {
    listHTML += '<li>' + array[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1 ) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if ( response.toLowerCase() === answer ) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = 'You got ' + correctAnswers + ' questions correct.';
html += '<h2>You got these questions correct:</h2>'
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>'
html += buildList(wrong);

print(html);
