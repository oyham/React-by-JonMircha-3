# React-by-JonMircha-3
# 72. Memorización (memo)
Creamos el componente Contador y ContadorHijo siguiendo los pasos de Jon.
Al ejecutar el Contador lo que pasa es que el ContadorHijo se renderiza tantas veces cómo ejecutemos Contador, y eso lo podemos ver con el console.log(). Imaginemos que el ContadorHijo sea una petición que devuelve registros, a la hora de ejecutar el Contador tantas veces esto nos sería de grave problema. Para eso existe Memo, para que si el componente hijo no sufre ningún cambio, no tenga porqué ser renderizado.

Importamos {memo} desde React y utilizamos la palabra clave "memo" envolviendo la exportación en nuestro componente hijo `export default memo(Contadorhijo)`.

---
