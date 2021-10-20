//*!Ejercicio simulando una heladeria
//*? Async Await

const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if (money >= 500) {
            console.log('Estamos preparando tu helado...')
            setTimeout(() => {
                resolve('Un helado de chocolate');
            }, 6000);  //*3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject(`Sorry! No tienes suficiente dinero :( ${money}, necesitas 500 como minimo`); //*3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => {
    try {
        console.log('Bienevenido a la heladeria!');
        const result = await prepareIceCream(money); //*2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //*4. Imprimimos tu pedido! si todo salió bien.
        console.log('Gracias por comprar!');
    } catch (e) {
        console.log(e); //*4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(400); //*1. llamas a la funcion comprar helado e Ingresas el dinero

