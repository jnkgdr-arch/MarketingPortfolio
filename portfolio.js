const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
const videos = [...document.querySelectorAll('#jg-editorial video')];

function pauseOthers(current) {
  for (const video of videos) {
    if (video !== current && !video.paused) video.pause();
  }
}

for (const video of videos) {
  video.addEventListener('play', () => pauseOthers(video));
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) pauseOthers();
});

for (const [galleryIndex, gallery] of [...document.querySelectorAll('[data-gallery]')].entries()) {
  const panels = [...gallery.querySelectorAll(':scope > figure')];
  if (panels.length < 2) continue;

  function select(panel) {
    for (const item of panels) {
      const expanded = item === panel;
      item.toggleAttribute('data-expanded', expanded);
      item.querySelector('.gallery-select').setAttribute('aria-expanded', String(expanded));
      const original = item.querySelector('.gallery-original');
      if (original) original.inert = !expanded;
      const video = item.querySelector('video');
      if (video) {
        video.controls = expanded;
        item.querySelector('.gallery-play').hidden = !expanded;
        if (!expanded) video.pause();
      }
    }
  }

  for (const [panelIndex, panel] of panels.entries()) {
    const caption = panel.querySelector('figcaption');
    const video = panel.querySelector('video');
    const asset = video || panel.querySelector('img');
    const title = caption?.querySelector('h4,strong')?.textContent.trim()
      || caption?.textContent.trim() || asset.alt;

    const media = document.createElement('div');
    media.className = 'gallery-media';
    const visual = asset.closest('.gallery-original') || asset;
    visual.before(media);
    media.append(visual);

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'gallery-select';
    trigger.textContent = title;
    if (caption) {
      caption.id ||= `gallery-${galleryIndex}-caption-${panelIndex}`;
      trigger.setAttribute('aria-controls', caption.id);
    }
    media.append(trigger);
    trigger.addEventListener('click', () => select(panel));
    trigger.addEventListener('focus', () => {
      if (trigger.matches(':focus-visible')) select(panel);
    });

    media.addEventListener('pointerenter', (event) => {
      if (!hover.matches || event.pointerType !== 'mouse') return;
      const focusedPanel = document.activeElement.closest('.gallery-ready > figure');
      if (focusedPanel && focusedPanel !== panel && gallery.contains(focusedPanel)
        && document.activeElement.matches(':focus-visible')) return;
      select(panel);
      if (video && motion.matches) {
        video.muted = true;
        pauseOthers(video);
        video.play().catch(() => {});
      }
    });

    if (video) {
      const control = document.createElement('button');
      control.type = 'button';
      control.className = 'gallery-play';
      media.append(control);

      function updatePlayback() {
        const action = video.paused || video.ended ? 'Play' : 'Pause';
        control.textContent = action;
        control.setAttribute('aria-label', `${action} ${title}`);
      }

      for (const event of ['play', 'pause', 'ended', 'emptied']) {
        video.addEventListener(event, updatePlayback);
      }
      updatePlayback();
      control.addEventListener('click', () => {
        if (video.paused || video.ended) {
          pauseOthers(video);
          video.play().catch(updatePlayback);
        } else {
          video.pause();
        }
      });
      panel.addEventListener('pointerleave', (event) => {
        if (event.pointerType === 'mouse') video.pause();
      });
    }
  }

  select(panels[0]);
  gallery.classList.add('gallery-ready');
}

const revealTargets = [
  'main h1', 'main section > :is(h2,h3,h4,p)', 'main .work > nav',
  'main .course-case > summary', 'main .course-spread', 'main .school-list > details > *',
  'main .credentials > details > *', 'main .sample-stack:not([data-gallery]) > figure',
  'main .logo-board', 'main .gallery-frame', 'main .about-portrait', 'main .about-layout .purpose > p'
];

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    let stagger = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (!motion.matches) continue;
      entry.target.style.setProperty('--motion-delay', `${Math.min(stagger++, 4) * 65}ms`);
      entry.target.classList.add('motion-enter');
    }
  });
  document.querySelectorAll(revealTargets.join(',')).forEach((element) => observer.observe(element));
}
