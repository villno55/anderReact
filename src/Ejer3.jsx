function Ejer3() {
  const msjEstado = (activo) => {
    return activo ? <span>Activo</span> : <span>Inactivo</span>;
  };

  return (
    <section>
      <h2>Ejercicio 3</h2>
      <p>Usuario 1: {msjEstado(true)}</p>
      <p>Usuario 2: {msjEstado(false)}</p>
    </section>
  );
}

export default Ejer3;
