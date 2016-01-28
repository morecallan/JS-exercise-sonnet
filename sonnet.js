// Take the contents of the sonnet div and place it in a variable
var sonnetDiv = document.getElementById("sonnet").innerHTML;
console.log("sonnetDiv:", sonnetDiv);


// Find and output the starting position of the word "orphans"
var orphansIndex = sonnetDiv.indexOf("orphans");
console.log("orphansIndex:", orphansIndex);


// Output the number of characters in the sonnet
var sonnetLength = sonnetDiv.length;
console.log("sonnetLength:", sonnetLength);

// Replace the first occurance of the string "winter" with "yuletide"
sonnetDiv = sonnetDiv.replace("winter", "yuletide");
console.log("sonnetDiv after replacing first winter with yuletide", sonnetDiv);

// Replace all occurances of the string "the" with "a large"
sonnetDiv = sonnetDiv.replace(/the /ig, "a large ");
console.log("sonnetDiv after replacing all the's with a large", sonnetDiv);

// Set the content of the sonnet div with the new string
sonnet.innerHTML = sonnetDiv;