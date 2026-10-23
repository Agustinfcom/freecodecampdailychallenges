function favoriteSongs(playlist) {
  const sorted = [...playlist].sort(compareSongPlays);
  return sorted.slice(0, 2).map((song) => song.title);
}

function compareSongPlays(a, b) {
  return b.plays - a.plays;
}
