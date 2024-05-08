const ingreso = document.querySelector("#inputLength")

function anchura(ingreso){
    let largo = Boolean
    console.log(ingreso.value.length)

    if (ingreso.value.length >= "8" ){
        console.log("Suficiente")
        largo = true;
    }else alert("Recuerde que su contraseña tiene que contener 8 caracteres")

    return largo;
}   

function caracteres(ingreso){
    let caractere;
    console.log(ingreso.value)
            if (ingreso.value.includes("@") || ingreso.value.includes("!") || ingreso.value.includes("=") || ingreso.value.includes("#") || ingreso.value.includes("$") || ingreso.value.includes("%") || ingreso.value.includes("^") || ingreso.value.includes("&") || ingreso.value.includes("*") || ingreso.value.includes("(") || ingreso.value.includes(")") || ingreso.value.includes("{") || ingreso.value.includes("}") || ingreso.value.includes(";") || ingreso.value.includes(".") || ingreso.value.includes(",") || ingreso.value.includes(":") || ingreso.value.includes("/")  || ingreso.value.includes("~") || ingreso.value.includes("[") || ingreso.value.includes("]") || ingreso.value.includes("<")|| ingreso.value.includes(">") || ingreso.value.includes("?") || ingreso.value.includes("+") || ingreso.value.includes("_") || ingreso.value.includes("¡") || ingreso.value.includes("°") ){

        caractere = true;
        console.log("su contraseña es perfecta") 
    }else alert("Recuerde que su contraseña tiene que contener algun caracter especial")
    
    return caractere;
}

function definicion (anchuraRest, caracteresRest){

    const veri = document.querySelector("#generatedPassword")
    console.log(anchuraRest)
    console.log(caracteresRest)

    if (anchuraRest == true && caracteresRest == true){
        veri.innerText='Su contraseña es segura';
        veri.style.color="lime";
    }else if(anchuraRest!= true && caracteresRest != true){
        veri.innerText='Su contraseña no es segura'; 
        veri.style.color="red";
    }
}


window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        definicion (anchura(ingreso), caracteres(ingreso));
    });
});