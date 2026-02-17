function TarjetaUsuario({ nombre, edad, activo, puedeVer }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <p>Nombre: {nombre || "Sin nombre"}</p>
      <p>Edad: {edad}</p>
      <p>Estado: {activo ? "Activo" : "Inactivo"}</p>

      {puedeVer && <button>Ver detalle</button>}
    </div>
  );
}

export default TarjetaUsuario;

