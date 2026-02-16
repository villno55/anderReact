function Ejer5() {
  const productos = [
    { id: 1, nombre: "Balon", precio: 25040, stock: 3 },
    { id: 2, nombre: "camisa", precio: 16500, stock: 10 },
    { id: 3, nombre: "Arroz", precio: 3100, stock: 0 },
  ];

  return (
    <section>
      <h2>Ejercicio 5</h2>
      {productos.map((p) => (
        <div key={p.id}>
          <h4>{p.nombre}</h4>
          <p>${p.precio}</p>
          <p>{p.stock > 0 ? "Disponible" : "Agotado"}</p>
        </div>
      ))}
    </section>
  );
}

export default Ejer5;

