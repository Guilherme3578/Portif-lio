function MediaPlaceholder({ label, aspect = '16 / 9' }) {
  return (
    <div className="media-placeholder" style={{ aspectRatio: aspect }}>
      <span>{label}</span>
    </div>
  )
}

export function VideoBlock({ video }) {
  if (!video?.src) {
    return <MediaPlaceholder label={video?.label ?? 'a gravar'} aspect="16 / 9" />
  }
  return (
    <video
      className="project-video"
      src={video.src}
      autoPlay
      muted
      loop
      playsInline
      controls
    />
  )
}

export function PrintBlock({ print }) {
  if (!print?.src) {
    return <MediaPlaceholder label={print?.label ?? 'a adicionar'} aspect="4 / 3" />
  }
  return <img className="project-print" src={print.src} alt="" loading="lazy" />
}

export default MediaPlaceholder
