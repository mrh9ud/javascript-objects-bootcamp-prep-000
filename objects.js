var playlist = {'artist': 'songTitle'};

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  const newPlaylist = delete playlist.artistName[-1]
  return newPlaylist
}