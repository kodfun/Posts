// Soru: "bez bebek" metnindeki karakterleri tekrar etmeksizin nasıl elde ederim

// one-liner
console.log([...new Set('bezbebek')].join(''));


// bezbebek
let str = "bezbebek";    

// Set(4) { 'b', 'e', 'z', 'k' }
let set = new Set(str); 

// [ 'b', 'e', 'z', 'k' ]
let arr = [...set]; 

// bezk
str = arr.join("");

console.log(str);

// gelen yorum üzerine
console.log(
    "bezbebek".replace(/(.)(?=.*\1)/g, "")
);