var playlist = {'artist': 'songTitle'};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
  return playlist
}

