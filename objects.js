var playlist = new Object({'artist': 'songTitle'})

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  const newPlaylist = delete playlist.artist
  return newPlaylist
}