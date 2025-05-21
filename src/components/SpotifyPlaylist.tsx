// src/components/SpotifyPlaylist.tsx
export function SpotifyPlaylist({ playlistId }: { playlistId: string }) {
  return (
    <div className="spotify-embed-wrapper">
      <iframe
        style={{ borderRadius: '8px', backgroundColor: 'var(--bright-pink)' }}
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      >
      </iframe>
    </div>
  )
}
