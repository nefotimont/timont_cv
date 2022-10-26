let people = ["Greg", "Mary", "Devon", "James"];

// 1
// Using a for-loop, iterate through this array and console.log all of the people.
for (let i=0; i<people.length; i++){
    console.log(people[i]);
};

// 2
// Using a forEach(),  iterate through this array and console.log all of the people.


// 3
// Write the command to remove "Greg" from the array.
people.shift();
console.log(people);

// 4
// Write the command to remove "James" from the array.
people.pop();
console.log(people);

// 5
// Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);

// 6
// Write the command to add your name to the end of the array.
people.push("Frances");
console.log(people);

// 7
// Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
for(let i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}

// 8
// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
people.slice(2);
console.log(people);

// 9
// Redefine the people variable with the value you started with. Using the splice command, 
// remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like 
// this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
people = ["Matt", "Mary", "Devon", "Frances"];
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// 10
// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob");
console.log(withBob);


