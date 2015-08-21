var person = {
  name : 'Sarah',
  country : 'USA',
  age : 32,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello my name is ' + person.name + ' and I live in ' + person.country + ' .</p>'
person.country = 'Spain';
message += '<p>However, I would really like to live in ' + person.country + '.</p>'
message += '<p>I have ' + person.skills.length + ' skills. They are: ' + person.skills.join(', ') + '</p>'
print(message);


var student = {
  name: 'Matt',
  country: 'USA',
  state: 'Oregon',
  city: 'Portland',
  age: 30
}

for ( var propName in student ) {
  // console.log(student);
  console.log(propName, ':', student[propName]);
}
