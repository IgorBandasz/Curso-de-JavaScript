let nome = "Igor";
for(let x = 0; x < 10; x = x + 1){
    
    if(x == 3){
        nome = 'João';
    }

    if(x == 5 && nome == "João"){
        console.log("O nome é João, pode parar");
        break;
    }

    console.log(x);
}