var person = ['Shawn', 22];
var personTwo = ['Andrew', 25];

//Hi x you are


var names = ['Rajendra', 'Shawn'];
var final = ['Ian'];

// Hi


function greeting(name, age) {
  //console.log(`Hi ${name}, you are ${age}`);
}

greeting(...person);
greeting(...personTwo);

function displayNames(names) {
  names.forEach( (e) => {
    //console.log(`Hi ${e} `)
  });
}

final = [...final, ...names];
displayNames(final);

