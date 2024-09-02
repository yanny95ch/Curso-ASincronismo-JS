const fnAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(()=> resolve ('Async!!'), 2000)
        :reject(new Error('Error!'));
    })
}
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!'); 
}

console.log('Before');  // ASync:  Para el cuerpo de la Funcion
anotherFn();
console.log('After'); //Await: Dentro de la Logica que se implementa

