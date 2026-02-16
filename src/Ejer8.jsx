function Ejer8() {
  const logueado = true;
  const rol = "admin";

  return (
    <section>
      <h2>Ejercicio 8</h2>
      <p>
        {!logueado
          ? "Inicie sesión"
          : rol === "admin"
          ? "Panel Admin"
          : "Panel Usuario"}
      </p>
    </section>
  );
}

export default Ejer8;
