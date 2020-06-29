export const isCurrentSaved = (current, type, saved) => {
  return current && saved.find(e => e.id === current.id)
};
