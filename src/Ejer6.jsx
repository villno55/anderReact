function SaludoUsuario({ mensaje, nombre }) {
  return <p>{mensaje}, {nombre}</p>;
}

function Ejer6() {
  return (
    <section>
      <h2>Ejercicio 6</h2>
      <SaludoUsuario mensaje="Sos el mejor " nombre="James" />
      <SaludoUsuario mensaje="Como has estado mi " nombre="Liris" />
      <SaludoUsuario mensaje="Activo o no " nombre="Pachito" />
    </section>
  );
}

export default Ejer6;
