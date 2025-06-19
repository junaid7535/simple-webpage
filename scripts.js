let result = "";

document.getElementById("inputbtn").onclick = function(){
    let number = document.getElementById("inputid").value;

    let flag = false;

    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            result = "Not Prime";
            flag = true;
            break;
        }
    } 
    

    if(!flag){
        result = "Prime";
    }

    document.getElementById("h2").textContent = result;

    document.getElementById("resetbtn").onclick = function(){
        document.getElementById("h2").innerText = "";
    }
}


let func = function(){

    const date = new Date();

    let hours = date.getHours();

    const meridium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    let newhour = hours.toString().padStart(2,0);

    const minutes = date.getMinutes().toString().padStart(2,0);

    const seconds = date.getSeconds().toString().padStart(2,0);

    const time = `${newhour} : ${minutes} : ${seconds}  ${meridium}`;

    document.getElementById("clockid").textContent = time;
}

func();
setInterval(func,1000);