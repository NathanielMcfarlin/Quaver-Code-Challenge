

function countWords() {

    const Preamble = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
  
  
    // I struggled to get ALL the words that started with 'T' when using the regex pattern. I figured out that I needed to pass the upper and lowercase letter into the match().
    console.log(Preamble.match(/\b[Tt][a-zA-Z]*\b/g))   
    
    console.log(Preamble.match(/\b[a-zA-Z]*e\b/g))
  }
  
  
  
  countWords();