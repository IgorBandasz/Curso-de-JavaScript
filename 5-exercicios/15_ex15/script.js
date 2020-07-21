let num = 11;

let cont = 0;
for(let i = num; i > 0; i--){
    if((num % i) == 0){
        cont++;
    }
}

if(cont==2){
    console.log("O número é primo");
} else {
    console.log("não é primo");
}