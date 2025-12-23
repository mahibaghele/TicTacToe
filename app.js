let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn= document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-con");
let msg=document.querySelector("#msg");

let turn0 =true;//player0

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];  
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("block was clicked");
        if(turn0){
            box.innerText="O";
            box.classList.add("pink");
            turn0=false;
        }else{
            box.innerText="X";
            box.classList.add("green");
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner =(winner) =>{
    msg.innerText =`congratulation ,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner =()=>{
    for(let pattern of winpattern){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val ===pos2Val && pos2Val ===pos3Val){
                console.log("Winner",pos1Val);
            
                showWinner(pos1Val);

            }
        }
    }
};

const resetGame =() =>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);

