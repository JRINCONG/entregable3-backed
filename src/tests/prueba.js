const arreglo=[
{
    nombre:'jairo',
    apellido:'rincon'
},
{
    fruta:['pera','banana',{mascota:'perro'},'mango'],
    pc:['del', {
        asus:['vivoBook','Notepad',{procesador:'ryzen5'}]
    }]
},
 43
];

console.log(arreglo.length)
console.log(arreglo[1].pc[1].asus[2].procesador)