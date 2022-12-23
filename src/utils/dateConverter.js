export function dateToString(date) {
  const now = new Date(Date.now());
  const eventDate = new Date(Date.parse(date));
  const diff = Date.parse(date) - Date.now();

  if (diff < 0) {
    return `Terminée`;
  } else if (eventDate.getDate() === now.getDate() && eventDate.getMonth() === now.getMonth()) {
    return "Aujourd'hui";
  } else if (eventDate.getDate() === now.getDate() + 1 && eventDate.getMonth() === now.getMonth()) {
    return "Demain";
  } else {
    return `Dans ${Math.floor(diff / 86400000)} jours`;
  }
}

// 86400000 = 1 day
