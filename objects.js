var playlist = {'artist': 'song'};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  const newPlaylist = delete playlist.artist
  return newPlaylist
}