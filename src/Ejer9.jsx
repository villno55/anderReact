function Ejer9() {
  const notificaciones = ["Nuevo mensaje", "Actualización disponible"];
  const mostrarNotificaciones = true;

  return (
    <section>
      <h2>Ejercicio 9</h2>

      {mostrarNotificaciones && (
        notificaciones.length > 0 ? (
          <div>
            {notificaciones.map((n, i) => (
              <p key={i}>{n}</p>
            ))}
          </div>
        ) : (
          <p>No hay notificaciones</p>
        )
      )}

      {!mostrarNotificaciones && <p>No hay notificaciones</p>}
    </section>
  );
}

export default Ejer9;
