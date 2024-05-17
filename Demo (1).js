let Answer = document.getElementById("Answer");
let History = document.getElementById("History");


let Buttons = document.querySelectorAll("button")

for (i of Buttons)
{
  i.addEventListener("click",(e)=>
  {
    let BtnText = e.target.innerText;
    if(BtnText == "C")
    {
      Answer.innerText = ""
      History.innerText = ""
    }
    else if(BtnText == "÷")
    {
      Answer.innerText += "/"
      History.innerText += "/"
    }
    else if(BtnText == "x")
    {
      Answer.innerText += "*"
      History.innerText += "*"
    }
    else if(BtnText == "=")
    {
      
      Answer.innerText = (eval(Answer.innerText));
      History.style.color = "red"
      History.innerText += "="
    }
    else if(BtnText == "X2")
    {
      Answer.innerText *= Answer.innerText
      History.innerText *= History.innerText
    }
    else if(BtnText == "CE")
    {
     Answer.innerText = Answer.innerText.slice(0,-1)
     History.innerText = History.innerText.slice(0,-1)
    }
    else
    {
      Answer.innerText += BtnText 
      History.innerText += BtnText
    }
  })
}