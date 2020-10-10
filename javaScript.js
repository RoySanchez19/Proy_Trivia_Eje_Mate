const evaluar = document.getElementById('evaluar');
const limpiar = document.getElementById('limpiar');
let buenas = document.getElementById('buenas');
let malas = document.getElementById('malas');
let vacias = document.getElementById('vacias');
let promedio = document.getElementById('promedio');

limpiar.addEventListener('click',()=>{
    for(i=1;i<=10;i++){
        let num = '';
        num = 'num'+i;
        document.getElementById(num).value = 0;
    }
    buenas.innerHTML = 0;
    malas.innerHTML = 0;
    vacias.innerText = 0;
    promedio.innerHTML = '0% de Respuesta Buenas.';
})

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
    let convacias = 0;
    let conpromedio = 0;
    
    //Realizando las Operaciones
    if(num1==15){conbuenas++}else{if(num1==0){convacias++}else{conmalas++}};
    if(num2==24){conbuenas++}else{if(num2==0){convacias++}else{conmalas++}};
    if(num3==10){conbuenas++}else{if(num3==0){convacias++}else{conmalas++}};
    if(num4==27){conbuenas++}else{if(num4==0){convacias++}else{conmalas++}};
    if(num5==10){conbuenas++}else{if(num5==0){convacias++}else{conmalas++}};
    if(num6==20){conbuenas++}else{if(num6==0){convacias++}else{conmalas++}};
    if(num7==125){conbuenas++}else{if(num7==0){convacias++}else{conmalas++}};
    if(num8==50){conbuenas++}else{if(num8==0){convacias++}else{conmalas++}};
    if(num9==32){conbuenas++}else{if(num9==0){convacias++}else{conmalas++}};
    if(num10==84){conbuenas++}else{if(num10==0){convacias++}else{conmalas++}};

    conpromedio = conbuenas*10 +'% de Respuesta Buenas.';
    console.log('Nro1 '+num1);
    // console.log(conbuenas.value, conmalas.value, convacias.value, conpromedio.value);
    buenas.innerHTML = conbuenas;
    malas.innerHTML = conmalas;
    vacias.innerHTML = convacias;
    promedio.innerHTML = conpromedio;
})