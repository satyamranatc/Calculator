let History = document.getElementById("History")
let Answer = document.getElementById("Answer")

let Btns = document.getElementsByClassName("Btn");

for (let i of Btns)
{
    i.addEventListener("click",(e)=>
    {
        let BtnText = e.target.innerText;
        console.log(BtnText);
       

        if(BtnText == "=")
        {
            console.log("Hello");
            
            History.innerText = Answer.innerText

            let Result = eval(Answer.innerText);
            console.log(Result);
            
            Answer.innerText = Result;
        }

        else if (BtnText == "x")
        {
            Answer.innerText+= "*";
        }

        else
        {
            Answer.innerText += BtnText
        }


    })
}