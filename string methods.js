// string lenght
const str = 'Life, the universe and everything. Answer:';

console.log(`${str} + ${str.length}`);


// string replace

const str1 = "I think Ruth's dog is cuter than your dog";
const newstr = str1.replace("Ruth's", 'my');
console.log("replace" +newstr); 
// slice
const str2 = 'The quick brown fox jumps over the lazy dog.';

console.log("slice" +str2.slice(31));
// small
const contentString = "Hello, world";
console.log( "small" + contentString.small());
// split
const str3 = 'The quick brown fox jumps over the lazy dog.';
const words = str3.split(' ');
console.log("split" + words[3]);