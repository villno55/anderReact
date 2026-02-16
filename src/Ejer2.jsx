function Ejer2() {
  const calcuEdad = (anioNcimento) => {
    const actual = new Date().getFullYear();
    return actual - anioNcimento;
  };

  return (
    <section>
      <h2>Ejercicio 2</h2>
      <p>James (2000): {calcuEdad(2000)} años</p>
      <p>Liris (2006): {calcuEdad(2006)} años</p>
      <p>Pachito (2005): {calcuEdad(2005)} años</p>
    </section>
  );
}

export default Ejer2;
