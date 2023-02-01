/**
 * Ejemplo de uso de:
 *  - useState()
 *  - useRef()
 *  - useContext()
 */
import React, { useState, useEffect, useRef } from "react";

const HookEjemplo2UseEffectUseRefUseState = () => {
  /**
   * Se crean dos contadores dintintos
   * cada uno con estados diferentes
   */
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const miRef = useRef();

  const incrementarContador1 = () => {
    setContador1(contador1 + 1);
  };

  const incrementarContador2 = () => {
    setContador2(contador2 + 1);
  };

  /**
   * Se inicia el ejemplo del useEffect()
   */
  /**
   *   - useEffect() -> puede trabajar con 02 casos
   *   ?Caso 1: Ejecutar SIEMPRE un snippet de codigo
   *   cada vez que exista un cambio en el estado del componente
   *   se ejecuta aquello que este dentro del Hook useEffect() sin el
   *   arreglo vacio [];
   */

  /* useEffect(() => {
    console.log("Cambio de estado del componente");
    console.log("Mostarndo la ref a elemento Dom");
    console.log(miRef);
  }); */

  /**
   *  ? Caso 2: Ejecutar SOLO CAUDNO CAMBIE EL CONTADOR1
   *    cada vez que haya un cambio en el contador1, se ejecuta
   *    lo que diga el useEffect(), es decir, dado el caso
   *    cambie el contador2, mno habra ejecucion.
   *
   */
  // useEffect(() => {
  //   console.log("Cambio de estado del componente, teniendo en cuenta el valor del contador 1");
  //   console.log("Mostarndo la ref a elemento Dom");
  //   console.log(miRef);
  // }, [contador1]);

  /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */
  useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
    console.log('Mostrando Referencia a elemento del DOM:');
    console.log(miRef);
}, [contador1, contador2]);


  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
      <h2> -- Contador 1: {contador1}</h2>
      <hr />
      <h2> -- Contador 2: {contador2}</h2>
      {/** Se referencia un elementeo con el useRef() */}
      <p ref={miRef}> ** Este elemento esta referencido por el useRef() ** </p>
      {/** Se establecen los botones para el cambio de estados */}
      <button onClick={incrementarContador1}> ++ contador1 </button>
      <hr />
      <button onClick={incrementarContador2}> ++ contador2 </button>
    </div>
  );
};

export default HookEjemplo2UseEffectUseRefUseState;
