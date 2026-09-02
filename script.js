const projects = [
  {
    name: "About Me",
    category: "Introduction",
    type: "case-study",
    layout: "profile",
    theme: { accent: "#9A6848", soft: "#F3ECE7", dark: "#603F2D" },
    summary: "A concise introduction to Janelle Gardner’s multidisciplinary professional portfolio.",
    image: "assets/portfolio_pic.png",
    alt: "Portrait of Janelle Gardner.",
  },
  {
    name: "P&G Scalp Vitality Initiative",
    category: "Brand Strategy · Expanding Pantene into Preventative Scalp Health",
    type: "case-study",
    theme: { accent: "#284A86", soft: "#E8EEF8", dark: "#172E59" },
    summary: "A go-to-market strategy exploring Pantene’s expansion into preventative scalp health through competitive research, product development, and an integrated launch strategy.",
    views: [{ label: "Strategy Overview", image: "assets/go_to_marketing_strategy.png", alt: "P&G Scalp Vitality go-to-market strategy overview.", link: { label: "View Full Project", url: "https://jnkgdr-arch.github.io/PanteneSubline/" } }],
  },
  {
    name: "Chipotle Global Expansion",
    category: "Global Marketing · Market Entry Strategy for China",
    type: "case-study",
    theme: { accent: "#A51E22", soft: "#F7E8E7", dark: "#641316" },
    summary: "Consumer and cultural research supporting a localized market-entry and go-to-market recommendation for China.",
    views: [{ label: "China Market Entry Strategy", image: "assets/global_marketing_chipotle.png", alt: "Chipotle China market-entry strategy overview.", link: { label: "View Full Project", url: "https://chipotle-global-expansion.vercel.app/" } }],
  },
  {
    name: "Google Analytics: Google Merch Store",
    category: "Analytics",
    type: "case-study",
    theme: { accent: "#13566E", soft: "#E6F0F3", dark: "#083746" },
    summary: "An e-commerce and audience analysis translating user behavior, acquisition, product performance, and engagement data into marketing recommendations.",
    views: [{ label: "GA4 Performance Dashboard", image: "assets/google_analytics4.png", alt: "Google Merch Store analytics dashboard." }],
  },
  {
    name: "Global Tech Innovations Case Study",
    category: "Project Management · AI-Driven Project Management",
    type: "case-study",
    theme: { accent: "#175B91", soft: "#E7F0F7", dark: "#0C385C" },
    summary: "An executive analysis of an enterprise AI project-management rollout examining data quality, adoption, governance, reporting, and implementation stabilization.",
    views: [{ label: "AI Project Management Case Study", image: "assets/global_tech_project-management.png", alt: "Global Tech AI project-management case-study overview.", link: { label: "View Full Project", url: "https://tech-company-case-study.vercel.app/" } }],
    linksHeading: "Related Projects",
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
    views: [
      { label: "ABC Restaurant Survey", image: "assets/research_and_insights.png", alt: "Restaurant survey and world-development research dashboards.", link: { label: "View Full Project", url: "https://jnkgdr-arch.github.io/RestaurantSurveyAnalytics/" } },
      { label: "World Development Indicators", image: "assets/research_and_insights.png", alt: "Restaurant survey and world-development research dashboards.", link: { label: "View Full Project", url: "https://world-development-indicators-psi.vercel.app/" } },
    ],
    linksHeading: "Related Economic Analysis",
    links: [{ label: "Unemployment and the Economy", url: "https://unemployment-and-the-economy.vercel.app/" }],
  },
  {
    name: "SEO & Keyword Search",
    category: "SEO",
    type: "case-study",
    theme: { accent: "#283665", soft: "#EAECF4", dark: "#18213F" },
    summary: "A Coleman SEO intelligence analysis translating keyword demand, competition, search intent, and customer feedback into paid, organic, and display recommendations.",
    views: [{ label: "Coleman SEO Intelligence", image: "assets/seo_and_keywords.png", alt: "Coleman SEO keyword strategy dashboard.", link: { label: "View Full Project", url: "https://seo-tailoringand-consumer-interest.vercel.app/" } }],
  },
  {
    name: "Designs & Logos",
    category: "Creative Design",
    type: "case-study",
    theme: { accent: "#8C6639", soft: "#F3EEE7", dark: "#50391F" },
    summary: "Selected visual design work spanning Canva projects, Adobe Photoshop compositions, and branding/logo development.",
    views: [
      { label: "Canva Designs", image: "assets/designs_and_logo.png", alt: "Selected Canva, Photoshop, and logo design work." },
      { label: "Adobe Photoshop", image: "assets/designs_and_logo.png", alt: "Selected Canva, Photoshop, and logo design work." },
      { label: "Logo Designs", image: "assets/designs_and_logo.png", alt: "Selected Canva, Photoshop, and logo design work." },
    ],
    linksHeading: "Related Creative Projects",
    links: [
      { label: "Ford Mustang Dark Horse", url: "https://ford-dark-horse-mustang.vercel.app/" },
      { label: "Dyson Social Media Marketing", url: "https://dyson-social-media-marketing.vercel.app/" },
      { label: "Pantene Scalp Vitality", url: "https://jnkgdr-arch.github.io/PanteneSubline/" },
    ],
  },
  {
    name: "Administrative & Operations",
    category: "Work Samples",
    type: "administrative",
    theme: { accent: "#4F6F91", soft: "#EBF0F5", dark: "#29445F" },
    summary: "Interactive, recreated work samples spanning planning, communication, reporting, and documentation.",
  },
  {
    name: "Motion & Video",
    category: "Creative Work",
    type: "video",
    theme: { accent: "#5363A5", soft: "#ECEEF7", dark: "#303B70" },
    summary: "Selected short-form product and social concepts created with Canva and CapCut.",
  },
];

const videos = [
  {
    title: "Jungle Bag — Sustainable Fashion Concept",
    description: "A nature-inspired fashion concept blending sustainable materials with an organic visual aesthetic. Designed in Canva with opening animation created in CapCut.",
    url: "https://drive.google.com/file/d/1O-HaNkbEj0GRf9MDsPDyAQXWvN2MecpD/view?usp=sharing",
    tools: ["Canva", "CapCut"],
  },
  {
    title: "Azure Utility Purse — Sustainable Fashion Concept",
    description: "A fashion-forward utility purse combining sustainable material, a snakeskin-inspired finish, and expanded storage for style-conscious users. Designed in Canva with video animation created in CapCut.",
    url: "https://drive.google.com/file/d/1wivwIvqlKHSBUwMm9qkOwoeMTCpUnRQd/view?usp=sharing",
    tools: ["Canva", "CapCut"],
  },
  {
    title: "Overjoyed — Social Content Design",
    description: "A playful visual concept created to capture the fun and energy of making content for social media. Designed in Canva and animated in CapCut.",
    url: "https://drive.google.com/file/d/1NYjQexju3ZZaT8-EH9OvuNSNRkjlyEFL/view?usp=sharing",
    tools: ["Canva", "CapCut"],
  },
];

const adminSamples = [
  { title: "Content Scheduling Calendar", category: "Scheduling & Coordination", purpose: "Coordinates content themes, channels, publishing times, and review activity.", tags: ["Calendar Management", "Content Planning", "Coordination"], view: "calendar" },
  { title: "Status Tracker", category: "Scheduling & Coordination", purpose: "Centralizes task status, follow-up needs, update dates, and next actions.", tags: ["Task Tracking", "Follow-through", "Records"], view: "tracker" },
  { title: "Internal Correspondence", category: "Professional Communication", purpose: "Communicates priorities and required follow-up clearly to an internal team.", tags: ["Written Communication", "Stakeholder Support"], view: "internal" },
  { title: "Inventory Tracking Report", category: "Records & Reporting", purpose: "Surfaces stock variances and items requiring reconciliation.", tags: ["Reporting", "Data Accuracy", "Reconciliation"], view: "inventory" },
  { title: "Supervisor Insight Note", category: "Records & Reporting", purpose: "Converts an operational observation into a concise recommendation.", tags: ["Analysis", "Documentation", "Process Improvement"], view: "brief" },
  { title: "Purchase Order", category: "Financial Documentation", purpose: "Presents an organized, itemized purchasing request for review.", tags: ["Procurement", "Recordkeeping", "Accuracy"], view: "purchase" },
  { title: "Invoice Documentation", category: "Financial Documentation", purpose: "Documents charges and payment information for reconciliation.", tags: ["Invoice Review", "Transactions", "Accuracy"], view: "invoice" },
  { title: "Email Correspondence", category: "Customer Support", purpose: "Demonstrates a responsive and professional customer resolution.", tags: ["Customer Experience", "Inbox Management", "Clarity"], view: "customer" },
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
  grid.replaceChildren(...projects.map((project, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    if (project.type === "administrative") card.id = "administrative-operations";
    if (project.type === "video") card.id = "video";
    card.setAttribute("aria-label", `Open ${project.name}`);

    const body = document.createElement("div");
    body.className = "project-card__body";
    body.innerHTML = `<span class="project-card__number">${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}</span><p class="project-card__category">${project.category}</p><h2>${project.name}</h2><span class="project-card__link">Open project <span aria-hidden="true">↗</span></span>`;
    card.append(body);
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

function appendRelatedLinks(article, project) {
  if (!project.links?.length) return;
  const links = document.createElement("section");
  links.className = "project-links";
  links.innerHTML = `<p class="eyebrow">${project.linksHeading || "Related Projects"}</p>`;
  const list = document.createElement("div");
  list.className = "project-links__list";
  project.links.forEach(item => list.append(createExternalLink(item)));
  links.append(list);
  article.append(links);
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
  const navigation = document.createElement("nav");
  navigation.className = "visual-navigation";
  navigation.setAttribute("aria-label", `${project.name} visual navigation`);
  const viewer = document.createElement("figure");
  viewer.className = "project-visual";
  viewer.setAttribute("aria-live", "polite");
  function selectView(view, button) {
    navigation.querySelectorAll("button").forEach(item => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    viewer.classList.add("is-changing");
    window.setTimeout(() => {
      viewer.replaceChildren(createProjectImage(view));
      viewer.classList.remove("is-changing");
    }, matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 140);
    focusedLinks.replaceChildren();
    if (view.link) focusedLinks.append(createExternalLink(view.link, "external-link external-link--primary"));
  }

  project.views.forEach((view, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = view.label;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => selectView(view, button));
    navigation.append(button);
    if (index === 0) selectView(view, button);
  });

  const frame = document.createElement("div");
  frame.className = "visual-case-study__frame";
  frame.append(navigation, viewer);
  article.append(frame);
  appendRelatedLinks(article, project);
  nativeProject.replaceChildren(article);
}

function calendarSample() {
  const events = [["24", "Inspiring story", "8:00 AM"], ["25", "Community video", "10:20 AM"], ["26", "Recognition post", "6:00 AM"], ["27", "Case study", "10:00 AM"], ["28", "Short-form video", "12:00 PM"]];
  return `<div class="workspace-layout"><aside class="workspace-sidebar"><strong>Content Planner</strong><span>Calendar</span><span>Approvals</span><span>Assets</span><span>Reporting</span></aside><div class="workspace-main"><div class="workspace-toolbar"><div><small>JANUARY</small><h5>Publishing schedule</h5></div><button type="button" disabled>New item</button></div><div class="metric-grid compact"><div class="metric-card"><strong>05</strong><span>Scheduled</span></div><div class="metric-card"><strong>02</strong><span>In review</span></div><div class="metric-card"><strong>01</strong><span>Pending</span></div></div><div class="calendar-grid">${["Mon","Tue","Wed","Thu","Fri"].map(day=>`<b>${day}</b>`).join("")}${events.map(([date,title,time])=>`<div><small>${date}</small><span>${title}<em>${time}</em></span></div>`).join("")}</div><p class="report-note"><strong>Workflow summary:</strong> Confirm approvals, review performance, and prepare the next publishing cycle.</p></div></div>`;
}

function trackerSample() {
  const rows = [["Client proposal draft","In Progress","Yes","07/08/2026","Awaiting feedback"],["Social media assets","Complete","No","07/07/2026","Delivered"],["Website banner update","Pending","Yes","07/06/2026","Updated copy needed"],["Invoice #4521","Complete","No","07/05/2026","Payment received"],["Quarterly report","Pending","Yes","07/03/2026","Collecting data"]];
  return `<div class="workspace-toolbar"><div><small>OPERATIONS WORKSPACE</small><h5>Status tracker</h5></div><span class="view-label">Table view</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Task</th><th>Status</th><th>Follow-Up</th><th>Date Updated</th><th>Notes</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${row[0]}</td><td><span class="status status--${row[1].toLowerCase().replaceAll(" ","-")}">${row[1]}</span></td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td></tr>`).join("")}</tbody></table></div>`;
}

function inventorySample() {
  const rows = [["University Hoodie",12,15],["T-Shirt",8,8],["Lanyard",24,30],["Logo Mug",6,4],["Notebook",19,20],["Cap",3,7]];
  return `<div class="workspace-toolbar"><div><small>INVENTORY CONTROL</small><h5>Reconciliation report</h5></div><span class="view-label">Updated 07/09</span></div><div class="metric-grid compact"><div class="metric-card"><strong>06</strong><span>SKUs reviewed</span></div><div class="metric-card"><strong>72</strong><span>Units counted</span></div><div class="metric-card"><strong>05</strong><span>Discrepancies</span></div></div><div class="inventory-chart" aria-label="On-hand and system quantity comparison">${rows.map(row=>`<div><span>${row[0]}</span><i style="--count:${row[1]};--system:${row[2]}"></i></div>`).join("")}</div><div class="table-scroll"><table class="data-table"><thead><tr><th>Item</th><th>On Hand</th><th>System</th><th>Variance</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><strong>${row[1]-row[2]}</strong></td></tr>`).join("")}</tbody></table></div><p class="report-note"><strong>Report note:</strong> Flagged variances require a recount and supporting-document review.</p>`;
}

function emailSample(customer) {
  return `<div class="email-client"><aside class="email-sidebar"><button type="button" disabled>＋ New message</button><strong>Mail</strong><span class="active">Inbox <b>4</b></span><span>Sent</span><span>Drafts</span><span>Archive</span></aside><article class="email-message"><div class="email-toolbar">Reply&nbsp;&nbsp; Forward&nbsp;&nbsp; Archive</div><dl><div><dt>From</dt><dd>Janelle Gardner</dd></div><div><dt>To</dt><dd>${customer ? "Customer" : "Operations Team"}</dd></div><div><dt>Date</dt><dd>July 9, 2026 · 10:24 AM</dd></div><div><dt>Subject</dt><dd>${customer ? "Resolution for damaged merchandise" : "Weekly coordination update"}</dd></div></dl><p>Hello,</p><p>${customer ? "Thank you for bringing the damaged item to our attention. I sincerely apologize for the inconvenience. A refund has been initiated and a replacement will be sent. We appreciate the opportunity to make this right." : "The weekly schedule and status tracker have been reviewed. Open items now have assigned owners, follow-up indicators, and current dates. Please review items marked for follow-up before the next check-in."}</p><p>Warm regards,<br><strong>Janelle Gardner</strong></p></article></div>`;
}

function documentSample(invoice) {
  return `<div class="transaction-doc"><header><div><small>RECREATED SAMPLE</small><h5>${invoice ? "INVOICE" : "PURCHASE ORDER"}</h5></div><strong>${invoice ? "INV-4521" : "PO-4489"}</strong></header><div class="doc-parties"><p><small>${invoice ? "INVOICE FROM" : "PREPARED FOR"}</small><br><span class="redacted">Generalized organization</span></p><p><small>${invoice ? "INVOICE TO" : "PREPARED BY"}</small><br>${invoice ? "Customer details redacted" : "Administrative Support"}</p></div><table class="data-table"><thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody><tr><td>${invoice ? "University desk clock" : "University apparel"}</td><td>${invoice ? 1 : 5}</td><td>${invoice ? "$95.00" : "$24.98"}</td><td>${invoice ? "$95.00" : "$124.90"}</td></tr><tr><td>${invoice ? "Shipping" : "Writing supplies"}</td><td>${invoice ? 1 : 15}</td><td>${invoice ? "$24.99" : "$19.98"}</td><td>${invoice ? "$24.99" : "$299.70"}</td></tr></tbody></table><div class="doc-total"><span>${invoice ? "Total due" : "Sample total"}</span><strong>${invoice ? "$119.99" : "$424.60"}</strong></div><p class="report-note">Account, contact, customer, and organization details are redacted or generalized.</p></div>`;
}

function briefingSample() {
  return `<div class="briefing"><header><small>EXECUTIVE BRIEF · RECREATED SAMPLE</small><h5>Inventory reconciliation</h5></header><div class="briefing-grid"><section><span>01</span><h6>Context</h6><p>Routine inventory reconciliation identified recurring variances in high-movement categories.</p></section><section><span>02</span><h6>Key Observations</h6><p>Five of six reviewed categories require supporting documentation or a recount.</p></section><section><span>03</span><h6>Operational Impact</h6><p>Unresolved variances can affect replenishment accuracy and reporting confidence.</p></section><section><span>04</span><h6>Recommendation</h6><p>Prioritize flagged SKUs, attach resolution notes, and review exceptions during the weekly check-in.</p></section></div></div>`;
}

function sampleVisual(view) {
  if (view === "calendar") return calendarSample();
  if (view === "tracker") return trackerSample();
  if (view === "inventory") return inventorySample();
  if (view === "internal" || view === "customer") return emailSample(view === "customer");
  if (view === "purchase" || view === "invoice") return documentSample(view === "invoice");
  return briefingSample();
}

function renderAdministrative() {
  const wrapper = document.createElement("div");
  wrapper.className = "admin-gallery";
  wrapper.innerHTML = `<header class="gallery-intro"><p class="eyebrow">Interactive gallery</p><h3>Administrative & Operations</h3><p>These recreated and redacted samples reflect prior responsibilities. Names, organizations, customer details, account information, and other identifiers are generalized for confidentiality.</p></header>`;
  const categories = [...new Set(adminSamples.map(item => item.category))];
  categories.forEach(category => {
    const section = document.createElement("section");
    section.className = "sample-group";
    section.innerHTML = `<h4 class="sample-group__heading">${category}</h4>`;
    adminSamples.filter(item => item.category === category).forEach(sample => {
      const details = document.createElement("details");
      details.className = "sample-card";
      details.innerHTML = `<summary><div><h5>${sample.title}</h5><p>${sample.purpose}</p><ul class="capability-list">${sample.tags.map(tag=>`<li>${tag}</li>`).join("")}</ul></div><span>View sample</span></summary><div class="sample-content"><div class="app-window"><div class="window-bar"><i></i><i></i><i></i><strong>${sample.title}</strong></div><div class="app-body">${sampleVisual(sample.view)}</div></div></div>`;
      section.append(details);
    });
    wrapper.append(section);
  });
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
    item.innerHTML = `<span class="video-index">${String(list.children.length + 1).padStart(2,"0")}</span><h4>${video.title}</h4><p>${video.description}</p><ul class="capability-list">${video.tools.map(tool=>`<li>${tool}</li>`).join("")}</ul>`;
    item.append(createExternalLink({ label: "Watch Video", url: video.url }));
    list.append(item);
  });
  const note = document.createElement("p");
  note.className = "video-audio-note";
  note.textContent = "Audio and sound effects sourced from Canva’s free media library.";
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
      if (item.classList.contains("project-card") || item.classList.contains("reveal-card")) item.style.transitionDelay = `${Math.min(index % 5, 4) * 45}ms`;
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
  if (event.key === "Escape" && !dialog.hidden) closeProject();
  if (event.key === "Tab" && !dialog.hidden) {
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], summary, [tabindex]:not([tabindex="-1"])')];
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
    initializeReveal();
  } catch (error) {
    console.error("Portfolio initialization failed.", error);
    document.documentElement.classList.remove("reveal-ready");
    document.querySelectorAll(".reveal, .project-card, .reveal-card").forEach(item => item.classList.add("is-revealed"));
  }
}

initializePortfolio();
