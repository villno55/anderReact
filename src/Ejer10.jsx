function TarjetaUsuario({ nombre, edad, activo }) {
  return (
    <div>
      <p>Nombre: {nombre || "Sin nombre"}</p>
      <p>Edad: {edad}</p>
      <p>Estado: {activo ? "Activo" : "Inactivo"}</p>
    </div>
  );
}

function Ejer10() {
  const usuarios = [
    { id: 1, nombre: "James", edad: 35, activo: true },
    { id: 2, nombre: "Liris", edad: 20, activo: true },
    { id: 3, nombre: "", edad: 30, activo: false },
  ];

  const puedeVerDetalle = (usuario) => {
    return usuario.activo && usuario.edad >= 18;
  };

  return (
    <section>
      <h2>Ejercicio 10</h2>

      {usuarios.map((u) => (
        <div key={u.id}>
          <TarjetaUsuario {...u} />
          {puedeVerDetalle(u) && <button>Ver detalle</button>}
        </div>
      ))}
    </section>
  );
}

export default Ejer10;
