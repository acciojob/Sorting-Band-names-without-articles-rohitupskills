let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function getArticleLessString(input){
    let words = input.split(" ");
    let articleLess = words.filter((word) => {
        let lowerCase = word.toLowerCase();
        if(lowerCase === "the" || lowerCase === "an" || lowerCase === "a"){
            return false;
        }
        return true;
    });
    return articleLess.join(" ");
}
let hashMap = {};
let arr = [];
for(let i = 0; i < touristSpots.length; i++){
    let articleLessString = getArticleLessString(touristSpots[i]);
    hashMap[articleLessString] = touristSpots[i];
    arr.push(articleLessString);
}
arr.sort();
let output = [];

arr.forEach((newString) => {
    output.push(hashMap[newString])
})

console.log(output);