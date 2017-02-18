let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if((answer.value == '') || (attempt.value == ''))
      {
        setHiddenFields();
      }
      if(!(validateInput(input.value)){
          return false;}
          attempt.value++;
       if(getResults(input.value))
       {
           setMessage('You Win! :)');
           showAnswer(true);
           showReplay();
       }
       else if(attempt.value>=10)
       {    
            showAnswer(false);
           showReplay();
           setMessage('You Lose! :(');
       }
       else {
           setMessage('Incorrect, try again.');
       }
    //add functionality to guess function here
}

function setHiddenFields(){
    answer.value=math.floor(Math.random()*1000).toString();
    while(answer.value.length<4)
    {
         answer.value="0"+answer.value;
    }
    attempt.value="0";
}
function setMessage(message)
{
document.getElementById('message').innerHTML=message;
}
function validateInput()
{
if((input.length>4) || (input.length<4)
{
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
}
else return true;
}
function getResults(input){
    let x='<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(let i=0;i<input.length;i++)
    {
        if(input.charAt(i)==answer.value.charAt(i))
        {
             x=x+'<span class="glyphicon glyphicon-ok"></span>';
        }
        else if(answer.value.indexOf(input.charAt(i))>-1)
        {
            x=x+'<span class="glyphicon glyphicon-transfer"></span>';
        }
        else 
        {
            x=x+'<span class="glyphicon glyphicon-remove"></span>';
        }
        x=x+'</div></div>';
        document.getElementById('results').innerHTML += x;

    }
    if(input == answer.value)
    {
        return true;
    }
    else return false;
}
function showAnswer(success){
    let code= document.getElementById('code');
    if(success)
    {
         code.className += ' success';
    }
    else
    {
       code.className += ' failure';
    }
    code.innerHTML = answer.value;
}
function showReplay()
{
document.getElementById('guessing-div').style.display = "none";
document.getElementById('replay-div').style.display = "block";

}