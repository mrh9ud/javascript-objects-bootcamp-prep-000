var playlist = new Object({'artist': 'songTitle'})

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
  return playlist
}

