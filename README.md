# React-by-JonMircha-3
# 72. Memorización (memo)
Creamos el componente Contador y ContadorHijo siguiendo los pasos de Jon.
Al ejecutar el Contador lo que pasa es que el ContadorHijo se renderiza tantas veces cómo ejecutemos Contador, y eso lo podemos ver con el console.log(). Imaginemos que el ContadorHijo sea una petición que devuelve registros, a la hora de ejecutar el Contador tantas veces esto nos sería de grave problema. Para eso existe Memo, para que si el componente hijo no sufre ningún cambio, no tenga porqué ser renderizado.

Importamos {memo} desde React y utilizamos la palabra clave "memo" envolviendo la exportación en nuestro componente hijo `export default memo(Contadorhijo)`.

---
# 73. Memorización (useCallback)
Creamos un input controlado con useState de tipo texto bajo nuestro h3 que muestra el contador. Al ejectur el input a traves del evento onChange ejecutará un manejador de evento según el valor que coloquemos en el input, y este manejador irá actualizando la vde a través de la función actualizadora de la *vde* en cuestión. Al ejecutar el evento a través de ingresar texto en el input, no veremos renderización pertinente de neustro ContadorHijo, o sea que memo sigue funcionando.

Ahora pasaremos el contador del componente padre como propiedad hacia ContadorHijo y lo mostraremos en un h3 abajo del h2. Ahora al ejecutar el contador, veremos que en la consola aparece el console.log() indicando así que el contador hijo se vuelve a renderizar, ya que le estamos pasando el contador como prop, pero al ejecutar el input text veremos que no se vuelve a renderizar el contador hijo. Osea que el componente hijo se vuelve a renderizar por que una de sus propiedades cambia. La prop que estamos enviando es de tipo numero, pero que pasaria si pasamos funciones... Pasaremos las funciones de sumar y restarm ademas del nav con los botones. Al ejecutar cualquiera de los botones ya sea del Contador o ContadorHijo, veremos que el contador hijo se renderiza, pero ahora bien, al hacer uso del input text, vemos también que el contador hijo se renderiza. 

React memo lo que hace es envolver el componente, pero al recibir funciones como propiedades, también debemos de memorizarlas, y para eso usaremos useCallback, ya que se encarga de memorizar una función pura.
```js
const sumar = useCallback(() => setContador(contador+1),[contador])
const restar = useCallback(() => setContador(contador-1),[contador])
```
Ahora al cambiar el valor del input, ya no se vuelve a renderizar el componente hijo, ya que las funciones estan memorizadas por su lado.

---
# 74. Memorización (useMemo)
Sirve para memorizar valores que debamos de calcular en tiempo de ejecución en tiempo de nuestra aplicación. Para hacer procesos muy pesados, cómo esperar la petición de una API. La diferencia con useCallback, useMemo memoriza el resultado de una función... un valor calculado. Devolverá un error si no retornamos el valor que pretendemos memorizar. Para memorizar una función utilizariamos useCallback, y en este caso, el valor se maneja con useMemo dado cierto proceso. el useMemo en sí debe de retornar el valor calculado, en este caso 'numero'.
```js
 const superNumero = useMemo(() => {
        let numero = 0;

    for (let i = 0; i < 1000000000; i++){
        numero++;
    } 

    return numero;
    }, [])
```