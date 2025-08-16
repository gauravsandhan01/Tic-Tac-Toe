let boxes =document.querySelectorAll(".box");
let newgamebtn =document.querySelector("#new-btn");
let resetbtn = document.querySelector(".reset");
let winmsg =document.querySelector("#msg");
let msgContainer = document.querySelector(".container1");

let turnO = true;   //player X , Player Y
let count = 0;  //to track Draw

let winnode =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turnO = true;
    count =0;
    enableBoxes();
    msgContainer.classList.add("hide");  //button click kelya vr message container la hide krnya sathi

};

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box was click");
        if (turnO){
            box.innerText ="O";
            turnO = false; //pude jaun true nhi zal pahije
            
        }else{
            box.innerText="X";
            turnO= true;  //next time shoude not be true
        }
        box.disabled =true;
        checkWinner();
    });
});



const disableBoxe =() =>{   //  button has been disable 
    for (let box of boxes){
        box.disabled =true;
    }
};


const enableBoxes =() =>{   //  button has been disable 
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";   // box madhi value remove krnya sathi 
    }
};


const showWinner=(winner) =>{
    winmsg.innerText =`congratulation , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxe();
};

const checkWinner=() =>{
    for(let pattern of winnode){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" & pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);