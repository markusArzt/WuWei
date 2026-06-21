// Lädt episodes.json und rendert die Episoden-Liste automatisch.
// Neue Episode hinzufügen? -> einfach einen Eintrag in episodes.json ergänzen.
// Diese Datei hier musst du NICHT anfassen.

const PDF_ICON = `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="18" x2="12" y2="12" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="9 15 12 18 15 15" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;

const PLAY_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>`;

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderEpisode(ep) {
  const summaryLink = ep.summaryPdf
    ? `<a href="${escapeHtml(ep.summaryPdf)}" class="btn-pdf" download>${PDF_ICON}Summary slides (PDF)</a>`
    : '';

  const scriptLink = ep.scriptPdf
    ? `<a href="${escapeHtml(ep.scriptPdf)}" class="btn-pdf">${PDF_ICON}Vorlesungsskript (PDF)</a>`
    : '';

  const listenLink = ep.spotifyUrl
    ? `<a href="${escapeHtml(ep.spotifyUrl)}" class="btn-listen" target="_blank" rel="noopener">${PLAY_ICON}Play episode</a>`
    : '';

  return `
    <div class="episode">
      <div class="ep-meta">
        <span class="ep-number">Ep. ${escapeHtml(ep.number)}</span>
        <span class="ep-date">${escapeHtml(ep.date)}</span>
      </div>
      <h2 class="ep-title">${escapeHtml(ep.title)}</h2>
      <p class="ep-desc">${escapeHtml(ep.description)}</p>
      <div class="ep-actions">
        ${summaryLink}
        ${scriptLink}
        ${listenLink}
      </div>
    </div>
  `;
}

async function loadEpisodes() {
  const container = document.getElementById('episodes-list');
  try {
    const response = await fetch('episodes.json');
    if (!response.ok) throw new Error('episodes.json konnte nicht geladen werden');
    const episodes = await response.json();

    container.innerHTML = episodes.map(renderEpisode).join('');
  } catch (err) {
    container.innerHTML = '<p style="color: #b06a6a;">Episoden konnten nicht geladen werden.</p>';
    console.error(err);
  }
}

loadEpisodes();
