var result = document.querySelector("#result")
var img = document.querySelector("#image")

function tosscoin(coin){
    console.log("toss", coin)
    var randomtosscoin = Math.floor(Math.random()*2)
    console.log(randomtosscoin)
    if(randomtosscoin === 1){
        console.log("You won the toss")
        result.innerHTML = "You won the toss"
           img.src = "https://www.leftovercurrency.com/app/uploads/2022/05/2-pakistani-rupees-coin-aluminium.jpg"
           
    }else {
        console.log("aap haargaie")
        result.innerHTML = "You loss the toss"
           img.src =" https://en.numista.com/catalogue/photos/pakistan/423-original.jpg"
        
}
}