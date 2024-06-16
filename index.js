let totalScoreLeft = 0


function add1left()
{
    totalScoreLeft += 1
    document.getElementById("leftScore").textContent = totalScoreLeft
}
function add2left()
{
    totalScoreLeft += 2
    document.getElementById("leftScore").textContent = totalScoreLeft
}
function add3left()
{
    totalScoreLeft += 3
    document.getElementById("leftScore").textContent = totalScoreLeft
}



let totalScoreRight = 0
function add1right()
{
    totalScoreRight += 1
    document.getElementById("rightScore").textContent = totalScoreRight
}
function add2right()
{
    totalScoreRight += 2
    document.getElementById("rightScore").textContent = totalScoreRight
}
function add3right()
{
    totalScoreRight += 3
    document.getElementById("rightScore").textContent = totalScoreRight
}

function reset()
{
    document.getElementById("rightScore").textContent = 0
    document.getElementById("leftScore").textContent = 0
    totalScoreRight= 0
    totalScoreLeft = 0

}