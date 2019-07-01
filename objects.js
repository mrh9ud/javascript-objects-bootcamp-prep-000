var playlist = {'artist': 'songTitle'};

function removeFromPlaylist(playlist, artistName) {
  const newPlaylist = delete playlist.artistName
  return newPlaylist
}

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
  return playlist
}

