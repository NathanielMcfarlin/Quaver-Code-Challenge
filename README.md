# Quaver Code Challenge
2-23-2025

## How To Test
- Clone repository [git clone (paste ssh link)]
- Open with code editor / I used VS code for this exercise [code .]
- Run [ node function.js ] in the command line
- See terminal for results
  
 ## Problems And Solutions

 - My initial thought process was to break up each word or phrase into individual strings and store them in a 'Preamble' array, but I still ran into the issue of how to check the beginning and ending character.

Solution: A popular solution was to use a regex with word boundaries (\b) to match words that start and end with specific characters. In this case, the pattern /\b[a-zA-Z]*e\b/g extracts words that end with the letter 'e'.
