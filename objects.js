var playlist = {'artist': 'songTitle'};

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  const updatedPlaylist = delete playlist.artistName
  return updatedPlaylist
}