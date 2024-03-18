let boxes = document.querySelectorAll('.box')
console.log(boxes)

let inpx = document.querySelector('#px')    // X input box
let inpo = document.querySelector('#po')    // O input box

let playbtn = document.querySelector('#plybtn')
let resetbtn = document.querySelector('#rstbtn')

let winnerbox = document.querySelector('.winner')

let nameo
let namex

let turno = true

let winningpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

playbtn.addEventListener('click', ()=>{
    nameo = inpo.value
    namex = inpx.value
    console.log(nameo)
    console.log(namex)
    boxes.forEach((box)=>{
        box.disabled = false;
    })
    playbtn.disabled=true;
    resetbtn.disabled=false;
    inpo.value=""
    inpx.value=""
})

resetbtn.addEventListener('click', ()=>{
    boxes.forEach((box)=>{
        box.innerText = ""
        turno = true;
        box.disabled=true;
    })
    // resetbtn.disabled = true;
    playbtn.disabled = false;
    winnerbox.style.display = 'none'
})

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turno)
        {
            box.innerText = 'O'
            turno = false;
            box.disabled = true;
        }else
        {
            box.innerText = 'X'
            turno = true;
            box.disabled = true;
        }
        winningpatterns.forEach((pattern)=>{
            if(boxes[pattern[0]].innerText != "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != "")
            {
                if(boxes[pattern[0]].innerText == boxes[pattern[1]].innerText && boxes[pattern[1]].innerText == boxes[pattern[2]].innerText)
                {
                    showwinner(boxes[pattern[0]].innerText);
                    boxes.forEach((box)=>{
                        // box.innerText = "";
                        box.disabled = true;
                    })
                }
            }
        })
    })
})

function showwinner(winner)
{
    winnerbox.style.display = 'block'
    if(winner == 'X')
    {
        winnerbox.innerText = `THE WINNER IS ${namex} !`;
    }else
    {
        winnerbox.innerText = `THE WINNER IS ${nameo} !`;
    }
}