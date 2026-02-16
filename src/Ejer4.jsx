function Ejer4() {
  const productos = [
    { id: 1, nombre: "Ballon", precio: 57000 },
    { id: 2, nombre: "Camisa", precio: 2900 },
    { id: 3, nombre: "Arroz", precio: 6900 },
  ];

  return (
    <section>
      <h2>Ejercicio 4</h2>
      {productos.map((p) => (
        <div key={p.id}>
          <h4>{p.nombre}</h4>
          <p>Precio: ${p.precio}</p>
        </div>
      ))}
    </section>
  );
}

export default Ejer4;
