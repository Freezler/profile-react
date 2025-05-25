// src/components/SpotifyPlaylist.tsx
export function Spotify() {
  return (
    <div className="spotify-embed-wrapper">
      <iframe
        src="https://open.spotify.com/embed/playlist/2OsQYQx10iduZuzigXCgzt?utm_source=generator"
        width="100%"
        height="600"
        className="spotify-iframe"
        title="Spotify Playlist"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}
