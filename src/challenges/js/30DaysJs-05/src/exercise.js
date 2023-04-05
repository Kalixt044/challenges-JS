export function findFamousCats(cats) {
// Encontrar el máximo número de seguidores entre todos los gatos
  let maxFollowers = 0;
  for (let i = 0; i < cats.length; i++) {
    const followers = cats[i].followers;
    for (let j = 0; j < followers.length; j++) {
      if (followers[j] > maxFollowers) {
        maxFollowers = followers[j];
      }
    }
  }
  
  // Encontrar los gatos con el máximo número de seguidores
  const famousCats = [];
  for (let i = 0; i < cats.length; i++) {
    const followers = cats[i].followers;
    for (let j = 0; j < followers.length; j++) {
      if (followers[j] === maxFollowers) {
        famousCats.push(cats[i].name);
        break;
      }
    }
  }
  
  return famousCats;
}
