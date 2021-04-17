var readlineSync=require("readline-sync")
var score=0;
// data of high score
var highScores = [
  {
    name: "Ram",
    score: 3,
  },

  {
    name: "Shyam",
    score: 2,
  },
]
var questions = [{
  question: "Where do I live? ",
  answer: "Bally"
}, {
  question: "My favorite superhero would be? ",
  answer: "Batman"
},
{
  question: "My favorite sports would be? ",
  answer: "Football"
}];
var username=readlineSync.question("What's your name: ")
console.log("Welcome ",username)
function play(question,answer)
{
  var userAnswer=readlineSync.question(question)
  if(userAnswer===answer){
    console.log("Right")
  score++;
  }
  else{
    console.log("Wrong")
  }

}
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your score is: ",score)
console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))