export function formatDateTimeReponse(fecha: string): Date {
  const utcDate = fecha ? new Date(fecha) : new Date();
  const zoneCo = new Date(
    utcDate.toLocaleString('en-US', { timeZone: 'America/Bogota' })
  );
  if (fecha) zoneCo.setTime(zoneCo.getTime() + 5 * 60 * 60 * 1000);
  return zoneCo;
}
