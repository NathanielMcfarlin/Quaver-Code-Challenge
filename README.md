2-23-2025 // #Quaver Code Challenge


##How To Test
 - Clone repository
 - Create testing branch
 - Visit "function.js"
 - Run and Debug with Node.js
 - See terminal for results


 ##Problems And Solutions

 - My initial thought process was to break up each word or phrase into individual strings and store them in a 'Preamble' array, but I still ran into the issue of how to check the beginning and ending character.

Solution: A popular solution was to use a regex with word boundaries (\b) to match words that start and end with specific characters. In this case, the pattern /\b[a-zA-Z]*e\b/g extracts words that end with the letter 'e'.
