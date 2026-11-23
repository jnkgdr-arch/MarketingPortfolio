const projects = [
  {
    name: "About Me",
    category: "Introduction",
    type: "case-study",
    layout: "profile",
    theme: { accent: "#9A6848", soft: "#F3ECE7", dark: "#603F2D" },
    summary: "A concise introduction to Janelle Gardner’s multidisciplinary professional portfolio.",
    image: "assets/portfolio_pic.png",
    thumbnail: "assets/thumbnails/about_me_thumbnail.png",
    alt: "Portrait of Janelle Gardner.",
  },
  {
    name: "P&G Scalp Vitality Initiative",
    category: "Brand Strategy · Expanding Pantene into Preventative Scalp Health",
    type: "case-study",
    theme: { accent: "#284A86", soft: "#E8EEF8", dark: "#172E59" },
    summary: "A go-to-market strategy exploring Pantene’s expansion into preventative scalp health through competitive research, product development, and an integrated launch strategy.",
    image: "assets/go_to_marketing_strategy.png",
    thumbnail: "assets/thumbnails/scalp_vitality_initative.png",
    alt: "P&G Scalp Vitality go-to-market strategy overview.",
    links: [{ label: "Pantene Scalp Vitality", url: "https://jnkgdr-arch.github.io/PanteneSubline/" }],
  },
  {
    name: "Chipotle Global Expansion",
    category: "Global Marketing · Market Entry Strategy for China",
    type: "case-study",
    theme: { accent: "#A51E22", soft: "#F7E8E7", dark: "#641316" },
    summary: "Consumer and cultural research supporting a localized market-entry and go-to-market recommendation for China.",
    image: "assets/global_marketing_chipotle.png",
    thumbnail: "assets/thumbnails/chipotle_global_market.png",
    alt: "Chipotle China market-entry strategy overview.",
    links: [{ label: "Chipotle Global Expansion", url: "https://chipotle-global-expansion.vercel.app/" }],
  },
  {
    name: "Google Analytics: Google Merch Store",
    category: "Analytics",
    type: "case-study",
    theme: { accent: "#13566E", soft: "#E6F0F3", dark: "#083746" },
    summary: "An e-commerce and audience analysis translating user behavior, acquisition, product performance, and engagement data into marketing recommendations.",
    image: "assets/google_analytics4.png",
    thumbnail: "assets/thumbnails/google_analytics.png",
    alt: "Google Merch Store analytics dashboard.",
    links: [{ label: "Google Merchandise Store GA4 Analysis", url: "https://google-merch-store-g4-analysis.vercel.app/" }],
  },
  {
    name: "Project Management & IFSM",
    category: "PM and IFSM",
    type: "case-study",
    theme: { accent: "#175B91", soft: "#E7F0F7", dark: "#0C385C" },
    summary: "Selected project management and IFSM projects applying hybrid methodologies, work breakdown structures (WBS), and Microsoft Project to support project planning, scheduling, and execution.",
    image: "assets/global_tech_project-management.png",
    thumbnail: "assets/thumbnails/project_management_thumbnail.png",
    alt: "Global Tech AI project-management case-study overview.",
    linksHeading: "Projects",
    links: [
      { label: "HealthConnect Risk Mitigation", url: "https://health-connect-risk-mitigation.vercel.app/" },
      { label: "EZ-ATS Applicant Tracking Recommendation", url: "https://business-analysis-system-recommenda.vercel.app/" },
      { label: "R.I.M.S. Inventory Implementation", url: "https://retail-systems-proj-mang.vercel.app/" },
      { label: "Global Tech Case Study", url: "https://tech-company-case-study.vercel.app/" },
    ],
  },
  {
    name: "Research & Insights",
    category: "Research",
    type: "case-study",
    theme: { accent: "#695635", soft: "#F2EEE6", dark: "#40331F" },
    summary: "Selected survey and economic research translating complex evidence into practical recommendations.",
    image: "assets/research_and_insights.png",
    thumbnail: "assets/thumbnails/research_insights.png",
    alt: "Restaurant survey and world-development research dashboards.",
    linksHeading: "Projects",
    links: [
      { label: "Restaurant Survey Analytics", url: "https://jnkgdr-arch.github.io/RestaurantSurveyAnalytics/" },
      { label: "World Development Indicators", url: "https://world-development-indicators-psi.vercel.app/" },
      { label: "Unemployment and the Economy", url: "https://unemployment-and-the-economy.vercel.app/" },
    ],
  },
  {
    name: "SEO & Keyword Search",
    category: "SEO",
    type: "case-study",
    theme: { accent: "#283665", soft: "#EAECF4", dark: "#18213F" },
    summary: "A Coleman SEO intelligence analysis translating keyword demand, competition, search intent, and customer feedback into paid, organic, and display recommendations.",
    image: "assets/seo_and_keywords.png",
    thumbnail: "assets/thumbnails/seo_keywords.png",
    alt: "Coleman SEO keyword strategy dashboard.",
    links: [{ label: "SEO Tailoring & Consumer Interest", url: "https://seo-tailoringand-consumer-interest.vercel.app/" }],
  },
  {
    name: "Designs & Logos",
    category: "Creative Design",
    type: "case-study",
    theme: { accent: "#8C6639", soft: "#F3EEE7", dark: "#50391F" },
    summary: "Selected visual design work spanning Canva projects, Adobe Photoshop compositions, and branding/logo development.",
    image: "assets/designs_and_logo.png",
    thumbnail: "assets/thumbnails/designs_logos.png",
    alt: "Selected Canva, Photoshop, and logo design work.",
  },
  {
    name: "Administrative & Operations",
    category: "Work Samples",
    type: "administrative",
    theme: { accent: "#4F6F91", soft: "#EBF0F5", dark: "#29445F" },
    summary: "Work samples in communication, operations, and project coordination, plus seven card design concepts.",
    thumbnail: "assets/thumbnails/admin_operations_thumbnail.png",
  },
  {
    name: "Motion & Video",
    category: "Creative Work",
    type: "video",
    theme: { accent: "#5363A5", soft: "#ECEEF7", dark: "#303B70" },
    summary: "Selected motion and visual storytelling projects created with Canva, CapCut, and Adobe Photoshop, spanning product concepts, social content, and layered parallax design.",
    thumbnailVideo: "assets/thumbnails/motion_vid_thumbnail.mp4",
    capabilities: ["Canva", "CapCut", "Adobe Photoshop"],
  },
];

const videos = [
  {
    title: "Jungle Bag — Sustainable Fashion Concept",
    description: "A nature-inspired fashion concept blending sustainable materials with an organic visual aesthetic. Designed in Canva with opening animation created in CapCut.",
    src: "assets/videos/jungle_leaf_purse.mp4",
    tools: ["Canva", "CapCut"],
  },
  {
    title: "Azure Utility Purse — Sustainable Fashion Concept",
    description: "A fashion-forward utility purse combining sustainable material, a snakeskin-inspired finish, and expanded storage for style-conscious users. Designed in Canva with video animation created in CapCut.",
    src: "assets/videos/azure_utility_purse.mp4",
    tools: ["Canva", "CapCut"],
  },
  {
    title: "Overjoyed — Social Content Design",
    description: "A playful visual concept created to capture the fun and energy of making content for social media. Designed in Canva and animated in CapCut.",
    src: "assets/videos/overjoyed_energized_feeling.mp4",
    tools: ["Canva", "CapCut"],
  },
  {
    title: "Parallax Video Project — CMST Course",
    description: "A parallax video project created in Adobe Photoshop for a CMST course. Inspired by a religious film centered on an individual’s struggles with faith, the piece uses layered visual composition and motion to explore that theme.",
    src: "assets/videos/parallax_cmst_cathedral.mp4",
    tools: ["Adobe Photoshop"],
  },
  {
    title: "Peach Breeze — Perfume Commercial Concept",
    description: "A perfume concept inspired by relaxation, nostalgia, and peaceful summer days at the beach. I created the Peach Breeze brand and visual design in Canva, using a soft peach-inspired scent concept to evoke the feeling of summertime by the ocean. I used Canva’s free video library for the commercial footage and CapCut to add animation and video effects.",
    src: "assets/videos/peach_breeze_promo_ad.mp4",
    tools: ["Canva", "CapCut"],
  },
  {
    title: "Fig Watch",
    description: "A polished promotional concept presenting Fig as a featured watch brand through product-focused visual storytelling, Canva design, and CapCut effects.",
    src: "assets/videos/fig_watch_fin.mp4",
    tools: ["Promotional Concept", "Brand Presentation", "Canva", "CapCut"],
  },
  {
    title: "Diamond Bite",
    description: "An experimental motion study exploring fluidity through layered image manipulation, Healing Brush reconstruction, Burn and Dodge enhancement, and timeline animation.",
    src: "assets/videos/diamond_bite_fin.mp4",
    tools: ["Adobe Photoshop", "Healing Brush", "Burn & Dodge", "CapCut"],
  },
];

const adminSampleGroups = [
  {
    title: "Administrative Communication",
    samples: [
      {
        title: "Customer Correspondence",
        caption: "Explains the refund and replacement process for damaged merchandise.",
        images: [["customer_email.png", "Customer service email outlining a refund and replacement for a damaged mug"]],
      },
      {
        title: "Internal Correspondence",
        caption: "Summarizes post-event inventory variances and requests a management review.",
        images: [["internal_email.png", "Recreated management email reporting differences between recorded and physical inventory"]],
      },
      {
        title: "Content Coordination",
        caption: "Schedules publication dates, draft reviews, and recurring communications.",
        images: [["content_email.png", "Monthly content calendar with publishing dates and pending draft reviews"]],
      },
      {
        title: "Inventory and Delivery Follow-up",
        caption: "Documents inventory discrepancies, their impact on fulfillment, and proposed next steps.",
        images: [
          ["prodesc_email.png", "Email requesting a manager meeting to review post-event inventory discrepancies"],
          ["proddesc_email.png", "Task workspace documenting a delivery shortage and recommended supplier follow-up"],
        ],
      },
      {
        title: "Supervisory Notes",
        caption: "Records recurring inventory mismatches and recommends a consistent reconciliation process.",
        images: [["supervisory_note .png", "Supervisor insight note with examples of inventory mismatches and recommendations"]],
      },
    ],
  },
  {
    title: "Operations & Documentation",
    samples: [
      {
        title: "Inventory Tracking",
        caption: "Compares physical counts with system quantities and flags items for review.",
        images: [["inventory_tracker.png", "Inventory report comparing on-hand and recorded counts with variance flags"]],
      },
      {
        title: "Invoice Documentation",
        caption: "Records merchandise charges, expedited shipping, and the total due.",
        images: [["invoice_sample.png", "Redacted invoice showing itemized merchandise charges, shipping, and total"]],
      },
      {
        title: "Purchase Order Processing",
        caption: "Documents item descriptions, quantities, unit prices, and order totals.",
        images: [["purord_example.png", "Redacted purchase order with itemized quantities, prices, and totals"]],
      },
    ],
  },
  {
    title: "Project Coordination & Digital Administration",
    samples: [
      {
        title: "Community Engagement Planning",
        caption: "Outlines newsletter ideas, local business outreach, and member-focused blog topics.",
        images: [["community_engagement_concepts.png", "Credit union engagement concepts for a newsletter, business spotlight, and blog posts"]],
      },
      {
        title: "Company Website Changes",
        caption: "Compares homepage layouts and explains the redesign recommendations.",
        images: [["company_website_changes.png", "Before-and-after homepage comparison with written redesign recommendations"]],
      },
      {
        title: "FCU Website Layout Concepts",
        caption: "Explores layouts that help credit union members find services and disclosures.",
        images: [["fcu_sitelayout_concepts.png", "Credit union website concepts showing member benefits, online banking, and a disclosure center"]],
      },
      {
        title: "Website Concept Updates",
        caption: "Explores revisions to the About Us, Services, and Contact pages.",
        images: [["website_concept_updates.png", "Three website page concepts covering company information, services, and consultation options"]],
      },
    ],
  },
];

const cardDesigns = [
  {
    title: "Bear Hill",
    caption: "A warm sky and evergreen silhouettes frame a bear on a hillside.",
    images: [["bear_hill.png", "Bear silhouette against an evergreen hillside on a card mockup"]],
  },
  {
    title: "Bears Mountain",
    caption: "A peach sky frames a mountain forest in a handheld presentation.",
    images: [["bears_mountain.png", "Hand holding a card mockup with a peach sky and dark mountain forest"]],
  },
  {
    title: "Blue Heron Visa",
    caption: "A wetland scene pairs a blue heron with a purple landscape card.",
    images: [["blue_heron_visa.png", "Blue heron beside a pond with a purple landscape card mockup"]],
  },
  {
    title: "Deer Bridge",
    caption: "A fiery sunset highlights a deer and a layered bridge silhouette.",
    images: [["deer_bridge.png", "Red card mockup with a deer, a bridge, and an orange sunset"]],
  },
  {
    title: "Mosaic Heron",
    caption: "Faceted purple textures give the lakeside scene a mosaic effect.",
    images: [["mosaic_heron.png", "Angled purple card mockup with a faceted lakeside landscape"]],
  },
  {
    title: "Purple Mountain",
    caption: "Layered mountains and evergreens sit beneath a violet sky.",
    images: [["purple_mountain.png", "Hand holding a purple card mockup with layered mountains and evergreens"]],
  },
  {
    title: "Sunset Heron",
    caption: "A heron stands at the water’s edge under a lavender sunset.",
    images: [["sunset_heron.png", "Card mockup with a heron and a forest lake at a lavender sunset"]],
  },
];


const grid = document.querySelector("#portfolio-grid");
const dialog = document.querySelector("#focused-project");
const dialogPanel = dialog.querySelector(".focused-project__panel");
const nativeProject = document.querySelector("#native-project");
const focusedTitle = document.querySelector("#focused-project-title");
const focusedCategory = document.querySelector("#focused-project-category");
const focusedSummary = document.querySelector("#focused-project-summary");
const focusedLinks = document.querySelector("#focused-project-links");
const backButton = document.querySelector("#back-button");
let previousFocus = null;
let previousScrollY = 0;
let closeTimer = null;

function createExternalLink({ label, url }, className = "external-link") {
  const link = document.createElement("a");
  link.className = className;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `${label} ↗`;
  return link;
}

function renderProjects() {
  grid.replaceChildren(...projects.map(project => {
    const hasThumbnail = Boolean(project.thumbnail || project.thumbnailVideo);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `project-card ${hasThumbnail ? "project-card--image" : "project-card--text"}`;
    if (project.type === "administrative") card.id = "administrative-operations";
    if (project.type === "video") card.id = "video";
    card.setAttribute("aria-label", `Open ${project.name}`);

    const content = document.createElement("div");
    content.className = hasThumbnail ? "project-card__content" : "project-card__body";
    content.innerHTML = hasThumbnail
      ? `<span class="project-card__link">Open project <span aria-hidden="true">↗</span></span><h2>${project.name}</h2><p class="project-card__category">${project.category}</p>`
      : `<p class="project-card__category">${project.category}</p><h2>${project.name}</h2><span class="project-card__link">Open project <span aria-hidden="true">↗</span></span>`;
    if (hasThumbnail) {
      const thumbnail = document.createElement(project.thumbnailVideo ? "video" : "img");
      thumbnail.className = "project-card__thumbnail";
      thumbnail.src = project.thumbnailVideo || project.thumbnail;
      if (project.thumbnailVideo) {
        thumbnail.autoplay = true;
        thumbnail.muted = true;
        thumbnail.defaultMuted = true;
        thumbnail.loop = true;
        thumbnail.playsInline = true;
        thumbnail.preload = "metadata";
        thumbnail.setAttribute("aria-hidden", "true");
      } else {
        thumbnail.alt = `${project.name} project thumbnail`;
        thumbnail.loading = "lazy";
        thumbnail.decoding = "async";
      }
      const shade = document.createElement("div");
      shade.className = "project-card__shade";
      shade.setAttribute("aria-hidden", "true");
      card.append(thumbnail, shade, content);
    } else {
      card.append(content);
    }
    card.addEventListener("click", () => openProject(project));
    return card;
  }));
}

function createProjectImage(view) {
  const image = document.createElement("img");
  image.className = "project-visual__image";
  image.src = view.image;
  image.alt = view.alt;
  image.loading = "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    const message = document.createElement("p");
    message.className = "project-visual__error";
    message.setAttribute("role", "status");
    message.textContent = "Project visual unavailable.";
    image.closest(".project-visual")?.replaceChildren(message);
  });
  return image;
}

function renderProjectLinks(project) {
  if (!project.links?.length) return;
  const links = document.createElement("section");
  links.className = "project-links";
  links.innerHTML = `<p class="eyebrow">${project.linksHeading || "Project"}</p>`;
  const list = document.createElement("div");
  list.className = "project-links__list";
  project.links.forEach(item => list.append(createExternalLink(item)));
  links.append(list);
  focusedLinks.append(links);
}

function renderProfileProject(project) {
  const article = document.createElement("article");
  article.className = "case-study profile-project";
  const visual = document.createElement("figure");
  visual.className = "project-visual profile-visual";
  visual.append(createProjectImage(project));
  const introduction = document.createElement("section");
  introduction.className = "profile-introduction";
  introduction.innerHTML = `<p class="eyebrow">Professional introduction</p><p>Janelle Gardner brings together marketing strategy, research, analytics, project management, administrative operations, and creative execution in one multidisciplinary portfolio.</p>`;
  const tools = document.createElement("div");
  tools.className = "tool-box-grid";
  tools.innerHTML = `<section class="tool-box"><h3>Design Tools</h3><img src="assets/designs-tools.png" alt="Design tools used by Janelle Gardner" loading="lazy"></section><section class="tool-box"><h3>Tools Used / Website Tools</h3><img src="assets/website-builder-tools.png" alt="Website tools used by Janelle Gardner" loading="lazy"></section>`;
  article.append(visual, introduction, tools);
  nativeProject.replaceChildren(article);
}

function renderCaseStudy(project) {
  if (project.layout === "profile") {
    renderProfileProject(project);
    return;
  }

  const article = document.createElement("article");
  article.className = "case-study visual-case-study";
  const viewer = document.createElement("figure");
  viewer.className = "project-visual";
  viewer.append(createProjectImage(project));
  article.append(viewer);
  nativeProject.replaceChildren(article);
}

function renderAdministrative() {
  const wrapper = document.createElement("div");
  wrapper.className = "admin-gallery";
  wrapper.innerHTML = `<header class="gallery-intro"><h3>Administrative & Operations</h3><p>Work samples covering communication, recordkeeping, and project coordination, alongside creative card design concepts.</p></header>`;

  const preview = document.createElement("dialog");
  preview.className = "admin-preview";
  preview.setAttribute("aria-labelledby", "admin-preview-title");
  preview.innerHTML = `
    <header>
      <h4 id="admin-preview-title"></h4>
      <form method="dialog"><button class="admin-preview__close" autofocus>Close preview</button></form>
    </header>
    <div class="admin-preview__image"></div>
    <a class="external-link" target="_blank" rel="noopener noreferrer">Open full-size image ↗</a>
  `;
  const previewTitle = preview.querySelector("h4");
  const previewImage = preview.querySelector(".admin-preview__image");
  const originalLink = preview.querySelector("a");

  function imageButton([filename, alt], title) {
    const image = createProjectImage({ image: `assets/admin/${encodeURIComponent(filename)}`, alt });
    const button = document.createElement("button");
    button.className = "admin-image";
    button.type = "button";
    button.setAttribute("aria-label", `Enlarge ${alt}`);
    button.setAttribute("aria-haspopup", "dialog");
    button.append(image);
    button.addEventListener("click", () => {
      previewTitle.textContent = title;
      previewImage.replaceChildren(image.cloneNode());
      originalLink.href = image.src;
      preview.showModal();
    });
    image.addEventListener("error", () => {
      const message = document.createElement("p");
      message.textContent = `Image unavailable: ${alt}`;
      button.replaceWith(message);
    });
    return button;
  }

  function sampleAccordion(title, caption, action = "View sample") {
    const details = document.createElement("details");
    details.className = "sample-card";
    details.innerHTML = `<summary><div><h5>${title}</h5><p>${caption}</p></div><span>${action}</span></summary>`;
    return details;
  }

  adminSampleGroups.forEach(group => {
    const section = document.createElement("section");
    section.className = "sample-group";
    section.innerHTML = `<h4 class="sample-group__heading">${group.title}</h4>`;
    const list = document.createElement("div");
    list.className = "admin-sample-list";
    group.samples.forEach(sample => {
      const details = sampleAccordion(sample.title, sample.caption);
      const content = document.createElement("div");
      content.className = "sample-content";
      content.append(...sample.images.map(image => imageButton(image, sample.title)));
      details.append(content);
      list.append(details);
    });
    section.append(list);
    wrapper.append(section);
  });

  const designSection = document.createElement("section");
  designSection.className = "sample-group";
  designSection.innerHTML = '<h4 class="sample-group__heading">Card Design Concepts</h4>';
  const designAccordion = sampleAccordion(
    "Additional Card Design Concepts for Credit Unions",
    "These concepts can be adapted to reflect each credit union’s brand, local character, and the community it serves.",
    "View designs",
  );
  designAccordion.classList.add("card-design-accordion");
  const designGrid = document.createElement("div");
  designGrid.className = "sample-content card-design-grid";
  cardDesigns.forEach(design => {
    const card = document.createElement("article");
    card.className = "sample-card card-design";
    card.innerHTML = `<div class="card-design__caption"><h6>${design.title}</h6><p>${design.caption}</p></div>`;
    card.prepend(...design.images.map(image => imageButton(image, design.title)));
    designGrid.append(card);
  });
  designAccordion.append(designGrid);
  designSection.append(designAccordion);
  wrapper.append(designSection);

  wrapper.append(preview);
  nativeProject.replaceChildren(wrapper);
}

function renderVideos() {
  const wrapper = document.createElement("div");
  wrapper.className = "video-gallery";
  wrapper.innerHTML = `<header class="gallery-intro"><p class="eyebrow">Creative Work</p><h3>Motion & Video</h3><p>Selected short-form product and social concepts.</p></header>`;
  const list = document.createElement("div");
  list.className = "video-project-list";
  videos.forEach(video => {
    const item = document.createElement("article");
    item.className = "video-project-item";
    item.innerHTML = `<span class="video-index">${String(list.children.length + 1).padStart(2,"0")}</span><h4>${video.title}</h4>`;
    const media = document.createElement("figure");
    media.className = "video-project-media";
    const player = document.createElement("video");
    player.className = "video-project-player";
    player.src = video.src;
    player.controls = true;
    player.preload = "metadata";
    player.playsInline = true;
    player.setAttribute("aria-label", `${video.title} video`);
    const caption = document.createElement("figcaption");
    caption.textContent = video.description;
    media.append(player, caption);
    const capabilities = document.createElement("ul");
    capabilities.className = "capability-list";
    capabilities.innerHTML = video.tools.map(tool => `<li>${tool}</li>`).join("");
    item.append(media, capabilities);
    list.append(item);
  });
  const note = document.createElement("p");
  note.className = "video-audio-note";
  note.textContent = "Audio, sound effects, and stock video used in Canva-based projects were sourced from Canva’s free media library where applicable.";
  wrapper.append(list, note);
  nativeProject.replaceChildren(wrapper);
}

function openProject(project) {
  if (closeTimer) window.clearTimeout(closeTimer);
  previousFocus = document.activeElement;
  previousScrollY = window.scrollY;
  focusedTitle.textContent = project.name;
  focusedCategory.textContent = project.category;
  focusedSummary.textContent = project.summary;
  focusedLinks.replaceChildren();
  dialog.style.setProperty("--project-accent", project.theme.accent);
  dialog.style.setProperty("--project-accent-soft", project.theme.soft);
  dialog.style.setProperty("--project-accent-dark", project.theme.dark);
  if (project.type === "administrative") renderAdministrative();
  else if (project.type === "video") renderVideos();
  else renderCaseStudy(project);
  if (project.type === "case-study") renderProjectLinks(project);
  if (project.capabilities?.length) {
    const tags = document.createElement("ul");
    tags.className = "capability-list";
    tags.innerHTML = project.capabilities.map(item => `<li>${item}</li>`).join("");
    focusedLinks.append(tags);
  }
  dialog.hidden = false;
  document.body.classList.add("is-focused");
  requestAnimationFrame(() => {
    dialog.classList.add("is-visible");
    dialogPanel.focus();
  });
}

function closeProject() {
  dialog.classList.remove("is-visible");
  document.body.classList.remove("is-focused");
  closeTimer = window.setTimeout(() => {
    dialog.hidden = true;
    nativeProject.replaceChildren();
    focusedLinks.replaceChildren();
    dialog.style.removeProperty("--project-accent");
    dialog.style.removeProperty("--project-accent-soft");
    dialog.style.removeProperty("--project-accent-dark");
    window.scrollTo({ top: previousScrollY, behavior: "auto" });
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  }, 280);
}

function initializeAccordion() {
  const triggers = [...document.querySelectorAll(".accordion-trigger")];
  triggers.forEach(trigger => trigger.addEventListener("click", () => {
    const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
    triggers.forEach(item => {
      const panel = document.getElementById(item.getAttribute("aria-controls"));
      const wasOpen = item.getAttribute("aria-expanded") === "true";
      item.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
      if (wasOpen) window.setTimeout(() => { if (item.getAttribute("aria-expanded") === "false") panel.hidden = true; }, 380);
      else panel.hidden = true;
    });
    if (shouldOpen) {
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      requestAnimationFrame(() => panel.classList.add("is-open"));
    }
  }));
}

function initializeContactNavigation() {
  document.querySelectorAll("[data-contact-link]").forEach(link => link.addEventListener("click", () => {
    const trigger = document.querySelector("#contact-trigger");
    if (trigger.getAttribute("aria-expanded") !== "true") trigger.click();
    window.setTimeout(() => trigger.focus({ preventScroll: true }), 0);
  }));
}

function initializeReveal() {
  const targets = document.querySelectorAll(".reveal, .project-card, .reveal-card");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    targets.forEach(item => item.classList.add("is-revealed"));
    return;
  }
  try {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }), { threshold: .08 });
    document.documentElement.classList.add("reveal-ready");
    targets.forEach((item, index) => {
      if (item.classList.contains("project-card") || item.classList.contains("reveal-card")) item.style.transitionDelay = `${Math.min(index % 5, 4) * 60}ms`;
      observer.observe(item);
    });

    // Content visibility takes priority if an observer never reports back.
    window.setTimeout(() => targets.forEach(item => item.classList.add("is-revealed")), 1600);
  } catch (error) {
    console.error("Reveal animation initialization failed; showing portfolio content without animation.", error);
    document.documentElement.classList.remove("reveal-ready");
    targets.forEach(item => item.classList.add("is-revealed"));
  }
}

backButton.addEventListener("click", closeProject);
document.addEventListener("keydown", event => {
  if (dialog.querySelector(".admin-preview[open]")) return;
  if (event.key === "Escape" && !dialog.hidden) closeProject();
  if (event.key === "Tab" && !dialog.hidden) {
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], summary, [tabindex]:not([tabindex="-1"])')].filter(item => item.getClientRects().length);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

function initializePortfolio() {
  try {
    renderProjects();
    initializeAccordion();
    initializeContactNavigation();
    initializeReveal();
  } catch (error) {
    console.error("Portfolio initialization failed.", error);
    document.documentElement.classList.remove("reveal-ready");
    document.querySelectorAll(".reveal, .project-card, .reveal-card").forEach(item => item.classList.add("is-revealed"));
  }
}

initializePortfolio();
