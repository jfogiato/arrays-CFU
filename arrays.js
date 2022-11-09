var friends = ["Andy", "Dillon", "Cole", "Eden"]
var friendAges = [31, 27, 29, 26]
var friendMarrieds = [true, false, false, false]

// This pop() method will remove the last element from the "friends" array.
friends.pop()

// This shift() method will remove the first element from the "friendAges" array.
friendAges.shift()

// Since Cole is getting married next year, the splice command changes his marital status from "false" to "true". He is at index 2, "1" tells the splice method to replace that value, and "true" is the value we are replacing it with.  
friendMarrieds.splice(2, 1, true)


// I accidentally demonstrated my understanding of index positions in the splice() method above! Knowing that I'm trying to replace Cole's marital status with "true", I used the index of 2 to access the third element in that array. 