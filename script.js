let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgamebtn");
let msgBox = document.querySelector(".msgbox");
let msg = document.querySelector("#Winmsg");

let turn = true;

const winPat = [ [0,1,2], 
            [0,3,6],
            [0,4,8],
            [6,7,8], 
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8],
        ];



boxes.forEach((box) => {

    box.addEventListener("click" , () => {

        console.log("Button Clicked");

        if(turn)
        {
            box.innerText = "X";
            turn = false;
        }
        else{
            box.innerText = "O"
            turn = true;
        }
        box.disabled = true;

        checkWinner();

    });
})

const resetgame = () => {
    turn = true;
    enableboxes();
    msgBox.classList.add("hide");
}

const enableboxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableboxes = () => {

    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const showWinner = (winner) => {

    msg.innerText = `Congratulations!!! Winner Is ${winner}`;
    msgBox.classList.remove("hide");
    disableboxes();

}

const checkWinner = () => {

    for(pattern of winPat)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log(" Winner IS ", pos1val);
                showWinner(pos1val);
            }
        }
        
    }
};

resetbtn.addEventListener("click", resetgame)
newgamebtn.addEventListener("click",resetgame)


  
    