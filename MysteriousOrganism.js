// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)]
};
  //console.log(returnRandBase());//Returns a random DNA base 1 char

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
 //console.log(mockUpStrand());//returns a random single stand of DNA containing 15 bases


const pAequorFactory = (num, dnaBase) => {
  return { 
 specimenNum: num,
    dna: dnaBase, 
mutate() {
   let randomBase = Math.floor(Math.random() * this.dna.length);
   let newRand=this.dna[randomBase];
   for(let i =0; i<newRand.length; i++){
     for(let j=0; j<this.dna.length; j++){
       if(newRand[i]===this.dna[j]){
    newRand[i] = returnRandBase();
  } else if(newRand[i] = returnRandBase()){
this.dna[j]=returnRandBase()
  }
     }
   }

  
  /*for(let i = 0; i<this.dna.length; i++){
    if(this.dna[i] ==='A'){
      this.dna[i] = "T";
    }else if(this.dna[i] ==='T'){
this.dna[i] = "C";
    }else if(this.dna[i] ==='C'){
this.dna[i] = "T";
    }else if(this.dna[i] ==='G'){
this.dna[i] = "A";
    }
  }*/
    return this.dna;
},

 compareDNA(paequorS){
    let count=0;
if(this.dna.length===paequorS.dna.length){
  for(let j = 0; j<this.dna.length; j++){
   if(this.dna[j]===paequorS.dna[j]){
    count++;
  }
  }
  }else{
    console.log("No matches were found");
}
//console.log(count);
let percentage=(count/15)*100;
console.log(`specimen ${this.specimenNum} and specimen ${paequorS.specimenNum} have ${Math.floor(percentage)} % DNA in common`);
     },

willLikelySurvive() {
  let countS = 0;
  for(let i = 0; i<this.dna.length; i++){
if(this.dna[i]==="G" || this.dna[i]==="C"){
  countS++;
} 
}
let calculated = ((countS/this.dna.length)*100).toFixed(2);
if (calculated>=60){
 return true
} 
}

 }
}
  
//console.log(pAequorFactory(1, mockUpStrand()));//specimenNum: 1, dna: [ 'A', 'T', 'A', 'C', 'C', 'C', 'A', 'C', 'C', 'A', 'T', 'A', 'A', 'A', 'T' ],

//calling instamce of pAequor  
let pAequor = pAequorFactory(1, mockUpStrand());
console.log("pAequor initial dna :", pAequor.dna);

// Dna after mutation
console.log("dna after mutation :", pAequor.mutate());
//comparing 2 paequor
let paequorS = pAequorFactory(15, mockUpStrand());
console.log("pAequorS initial dna :", paequorS.dna);
// Dna after mutation
console.log("dna after mutation :", paequorS.mutate());
paequorS.compareDNA(pAequor);


//With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
let paequorArray=[];
let count=0;
 let i=1; 
for(i=1; i<31; i++){
let obj1 = pAequorFactory(i, mockUpStrand());
  if(obj1.willLikelySurvive() === true){
    paequorArray.push((obj1.specimenNum++), obj1.dna);
    count++;
  } else if(count< 30 ){
    i--;
  }
}
//console.log(count);
console.log(paequorArray);
