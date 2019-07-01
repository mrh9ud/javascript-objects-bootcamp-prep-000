var playlist = {'artist': 'songTitle'};

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  const updatedPlaylist = delete playlist.artist;
  return updatedPlaylist
}