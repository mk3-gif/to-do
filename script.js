const input = document.getElementById("input-box");
const  listcon = document.getElementById("list-container");

// event add
function addTask(){
    if(input.value === ''){
        alert("You Must Write Something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcon.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    input.value='';
    saveData();
}

//event checked
listcon.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//store task  named as data 
function saveData(){
    localStorage.setItem("data",listcon.innerHTML);
}

//display the store data
function showTask(){
    listcon.innerHTML=localStorage.getItem("data");
}
//call showtask
showTask();