let buttons = document.querySelectorAll("button");
let output = document.getElementById("output"); 

for(i of buttons)
{
    i.addEventListener("click",(e)=>
    {
        let buttonText = e.target.innerText;
     
        if(buttonText == "C")
        {
            output.innerText = ""
        }
        else if(buttonText == "=")
        {
            let result = eval(output.innerText);
            output.innerText = result;
        }

        else
        {
            
            output.innerText += buttonText
        }
    })
}