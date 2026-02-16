function Perfil({ nombre, edad, ciudad }) {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Ciudad: {ciudad || "Ciudad no registrada"}</p>
    </div>
  );
}

function Ejer7() {
  return (
    <section>
      <h2>Ejercicio 7</h2>
      <Perfil nombre="James" edad={35} ciudad="Cali" />
      <Perfil nombre="Liris" edad={20} />
    </section>
  );
}

export default Ejer7;
