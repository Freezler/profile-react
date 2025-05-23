// src/components/SpotifyPlaylist.tsx
export function SpotifyPlaylist() {
  return (
    <div className="spotify-embed-wrapper">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/5ABrNQH1KjxXpjwIJOGrLu?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      />
    </div>
  )
}
