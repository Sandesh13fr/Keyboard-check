let keyStroke = document.getElementById("key-stroke")

window.addEventListener("keydown",(e)=>{
    document.getElementById("key-stroke").innerHTML=`<h1>${e.key}</h1>`
    
})