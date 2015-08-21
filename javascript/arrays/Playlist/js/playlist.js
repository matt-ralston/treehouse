// function printList( list ) {
//   var listHTML = '<ol>';
//   for (var i = 0; i < list.length; i += 1) {
//     listHTML += '<li>' + list[i] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// function print(html) {
//   document.write(html);
// }

// var playList = [];

// playList.push('I Did It My Way');
// playList.push('Make em say uhh')

// printList (playList)



var anotherPlayList = [
  'Song1',
  'Song2',
  'Song3',
  'Song4',
  'Song5'
];

function print(message) {
  document.write(message);
}

function pringList (list) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>'
  }
  listHTML += '</ol>'
  print(listHTML);
}
printList(anotherPlayList);


// var temperatures = [100,90,99,80,70,65,30,10];
// for (var i = 0; i < temperatures.length; i++) {
//   console.log(temperatures[i]);
// }
