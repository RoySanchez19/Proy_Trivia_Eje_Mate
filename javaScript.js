const evaluar = document.getElementById('evaluar');
let buenas = document.getElementById('buenas');
let malas = document.getElementById('malas');
let promedio = document.getElementById('promedio');

//Creando la Función
evaluar.addEventListener('click',()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);
    let num4 = parseInt(document.getElementById('num4').value);
    let num5 = parseInt(document.getElementById('num5').value);
    let num6 = parseInt(document.getElementById('num6').value);
    let num7 = parseInt(document.getElementById('num7').value);
    let num8 = parseInt(document.getElementById('num8').value);
    let num9 = parseInt(document.getElementById('num9').value);
    let num10 = parseInt(document.getElementById('num10').value);
    let conmalas = 0;
    let conbuenas = 0;
    let conpromedio = 0;
    
    //Realizando las Operaciones
    if(num1==15){conbuenas++}else{conmalas++}
    if(num2==24){conbuenas++}else{conmalas++}
    if(num3==10){conbuenas++}else{conmalas++}
    if(num4==27){conbuenas++}else{conmalas++}
    if(num5==10){conbuenas++}else{conmalas++}
    if(num6==20){conbuenas++}else{conmalas++}
    if(num7==125){conbuenas++}else{conmalas++}
    if(num8==50){conbuenas++}else{conmalas++}
    if(num9==32){conbuenas++}else{conmalas++}
    if(num10==84){conbuenas++}else{conmalas++}
    conpromedio = conbuenas*10 +'% de Respuesta Buenas.';

    console.log(buenas.value, malas.value, promedio.value);
    buenas.value = conbuenas;
    malas.value = conmalas;
    promedio.value = conpromedio;
})