import TarjetaUsuario from "./TarjetaUsuario";

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
        <TarjetaUsuario
          key={u.id}
          nombre={u.nombre}
          edad={u.edad}
          activo={u.activo}
          puedeVer={puedeVerDetalle(u)}
        />
      ))}
    </section>
  );
}

export default Ejer10;
