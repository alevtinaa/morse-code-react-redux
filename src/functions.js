export const isCurrentSaved = (current, type, saved) => {
  return current && saved[type].find(e => e.id === current.id)
};
