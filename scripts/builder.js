

function button(tool){
    document.getElementById("contents").style.visibility = "visible";    
    document.getElementById("p").innerText = tool;

    if(tool === "Elements"){
        document.getElementById("pic").innerHTML = `
            <img src="../images/nilou-genshin.gif"/>
        `;
    } else if(tool === "Section"){
        document.getElementById("pic").innerHTML = `
            <img src="../images/nilgif.gif"/>
        `;
    }
}