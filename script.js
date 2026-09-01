const projects = [
  {
    name: "About Me",
    category: "Introduction",
    type: "case-study",
    thumbnail: "assets/thumbnails/about.svg",
    summary: "A multidisciplinary professional perspective grounded in strategy, analysis, operations, and creative execution.",
    overview: "This portfolio brings together marketing strategy, research, analytics, project management, administrative operations, and design work developed across academic, professional, and independent projects.",
    highlights: [
      { value: "7", label: "Capability areas" },
      { value: "1", label: "Cohesive portfolio" },
    ],
    capabilities: ["Marketing", "Research", "Analytics", "Operations", "Project Management", "Design", "Content"],
  },
  {
    name: "Procter & Gamble",
    category: "Brand Strategy",
    type: "case-study",
    thumbnail: "assets/thumbnails/pantene.svg",
    summary: "A go-to-market and portfolio-growth concept for a Pantene scalp-care sub-line.",
    overview: "Competitive analysis, audience needs, product positioning, and a 12-month rollout framework shaped a focused recommendation for portfolio expansion.",
    highlights: [
      { value: "$898M–$1.796B", label: "Planning range evaluated" },
      { value: "12 months", label: "Rollout horizon" },
    ],
    capabilities: ["Brand Strategy", "Competitive Analysis", "Go-to-Market", "Portfolio Planning"],
    links: [{ label: "View Pantene Scalp Vitality", url: "https://jnkgdr-arch.github.io/PanteneSubline/" }],
  },
  {
    name: "Chipotle",
    category: "Global Marketing",
    type: "case-study",
    thumbnail: "assets/thumbnails/chipotle.svg",
    summary: "Consumer and cultural research supporting a localized global-expansion recommendation.",
    overview: "The project evaluates audience preferences, cultural behavior, market conditions, and localization considerations for potential expansion into China.",
    highlights: [
      { value: "Global", label: "Market perspective" },
      { value: "Localized", label: "Recommendation approach" },
    ],
    capabilities: ["Market Research", "Consumer Insights", "Global Strategy", "Localization"],
    links: [{ label: "View Chipotle Global Expansion", url: "https://chipotle-global-expansion.vercel.app/" }],
  },
  {
    name: "GA4",
    category: "Analytics",
    type: "case-study",
    thumbnail: "assets/thumbnails/analytics.svg",
    summary: "Google Analytics 4 analysis translating user and product performance into sales recommendations.",
    overview: "KPI tracking, engagement behavior, acquisition data, and e-commerce performance were reviewed to identify practical opportunities for the Google Merchandise Store.",
    highlights: [
      { value: "318K", label: "New users examined" },
      { value: "$128.5K", label: "Top-product revenue reviewed" },
    ],
    capabilities: ["Google Analytics 4", "KPI Analysis", "E-commerce", "Data Storytelling"],
  },
  {
    name: "Global Tech Project Management",
    category: "Project Management",
    type: "case-study",
    thumbnail: "assets/thumbnails/project-management.svg",
    summary: "Governance, risk, systems, and implementation recommendations for complex operational projects.",
    overview: "A collection of concise project-management and business-analysis experiences spanning risk mitigation, applicant tracking, inventory implementation, and global technology operations.",
    highlights: [
      { value: "4", label: "Live project experiences" },
      { value: "End-to-end", label: "Process perspective" },
    ],
    capabilities: ["Project Governance", "Risk Tracking", "Business Analysis", "Systems Implementation"],
    links: [
      { label: "HealthConnect Risk Mitigation", url: "https://health-connect-risk-mitigation.vercel.app/" },
      { label: "EZ-ATS Recommendation", url: "https://business-analysis-system-recommenda.vercel.app/" },
      { label: "R.I.M.S. Inventory Implementation", url: "https://retail-systems-proj-mang.vercel.app/" },
      { label: "Global Tech Case Study", url: "https://tech-company-case-study.vercel.app/" },
    ],
  },
  {
    name: "Research & Insights",
    category: "Research",
    type: "case-study",
    thumbnail: "assets/thumbnails/research.svg",
    summary: "Survey, economic, and market research translated into concise evidence-based recommendations.",
    overview: "Research projects compare audience feedback and economic indicators to reveal patterns, evaluate conditions, and support decisions.",
    highlights: [
      { value: "500", label: "Restaurant responses analyzed" },
      { value: "15", label: "Countries compared" },
    ],
    capabilities: ["Survey Analysis", "Excel PivotTables", "Economic Indicators", "Insight Development"],
    links: [
      { label: "World Development Indicators", url: "https://world-development-indicators-psi.vercel.app/" },
      { label: "Unemployment and the Economy", url: "https://unemployment-and-the-economy.vercel.app/" },
      { label: "Restaurant Survey Analytics", url: "https://jnkgdr-arch.github.io/RestaurantSurveyAnalytics/" },
    ],
  },
  {
    name: "SEO & Keyword Search",
    category: "SEO",
    type: "case-study",
    thumbnail: "assets/thumbnails/seo.svg",
    summary: "Search-interest and keyword analysis supporting tailored consumer marketing recommendations.",
    overview: "Keyword trends, competition, bid ranges, and changing search behavior were evaluated to prioritize relevant SEO opportunities.",
    highlights: [
      { value: "6", label: "Strategies tailored" },
      { value: "Search-led", label: "Recommendation framework" },
    ],
    capabilities: ["SEO", "Keyword Research", "Consumer Interest", "Content Strategy"],
    links: [{ label: "View SEO Tailoring & Consumer Interest", url: "https://seo-tailoringand-consumer-interest.vercel.app/" }],
  },
  {
    name: "Content Designs",
    category: "Creative Design",
    type: "case-study",
    thumbnail: "assets/thumbnails/design.svg",
    summary: "Brand-led campaign and social concepts connecting visual design with audience strategy.",
    overview: "Selected creative projects demonstrate campaign thinking, social-media planning, and cohesive visual communication across automotive, beauty, and product categories.",
    highlights: [
      { value: "3", label: "Live creative experiences" },
      { value: "Multi-channel", label: "Design perspective" },
    ],
    capabilities: ["Creative Direction", "Canva", "Social Media", "Campaign Design"],
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
    thumbnail: "assets/thumbnails/operations.svg",
    summary: "Interactive, recreated work samples spanning planning, communication, reporting, and documentation.",
  },
  {
    name: "Motion & Video",
    category: "Creative Work",
    type: "video",
    thumbnail: "assets/thumbnails/motion.svg",
    summary: "Selected short-form product and social concepts created with Canva and CapCut.",
  },
  {
    name: "Motion & Video",
    category: "Creative Work",
    type: "video",
    descriptions: [
      { heading: "Selected video projects", text: "A focused index of short-form creative work." },
    ],
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

    const preview = document.createElement("div");
    preview.className = "project-card__preview";
    const image = document.createElement("img");
    image.src = project.thumbnail;
    image.alt = `${project.name} project preview`;
    image.loading = index > 3 ? "lazy" : "eager";
    image.decoding = "async";
    preview.append(image);

    const body = document.createElement("div");
    body.className = "project-card__body";
    body.innerHTML = `<span class="project-card__number">${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}</span><p class="project-card__category">${project.category}</p><h2>${project.name}</h2><span class="project-card__link">Open project <span aria-hidden="true">↗</span></span>`;
    card.append(preview, body);
    card.addEventListener("click", () => openProject(project));
    return card;
  }));
}

function renderCaseStudy(project) {
  const article = document.createElement("article");
  article.className = "case-study";
  article.innerHTML = `<img class="case-study__visual" src="${project.thumbnail}" alt="${project.name} visual summary"><section class="case-study__overview"><p class="eyebrow">Overview</p><p>${project.overview}</p></section><div class="metric-grid">${project.highlights.map(item => `<div class="metric-card"><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}</div><section><p class="eyebrow">Capabilities</p><ul class="capability-list">${project.capabilities.map(item => `<li>${item}</li>`).join("")}</ul></section>`;
  if (project.links?.length) {
    const links = document.createElement("section");
    links.className = "project-links";
    links.innerHTML = `<p class="eyebrow">Live projects</p>`;
    const list = document.createElement("div");
    list.className = "project-links__list";
    project.links.forEach(item => list.append(createExternalLink({ label: item.label || "View Project", url: item.url })));
    links.append(list);
    article.append(links);
  }
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
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    }
  }), { threshold: .08 });
  targets.forEach((item, index) => {
    if (item.classList.contains("project-card") || item.classList.contains("reveal-card")) item.style.transitionDelay = `${Math.min(index % 5, 4) * 45}ms`;
    observer.observe(item);
  });
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

const adminSamples = [
  { title: "Content Scheduling Calendar", theme: "Scheduling & Coordination", purpose: "Coordinates content milestones, owners, channels, and review dates.", tags: ["Calendar Management", "Prioritization", "Coordination"], view: "calendar" },
  { title: "Status Tracker", theme: "Scheduling & Coordination", purpose: "Centralizes task status, ownership, due dates, and next actions.", tags: ["Task Tracking", "Excel", "Follow-through"], view: "tracker" },
  { title: "Internal Correspondence", theme: "Professional Communication", purpose: "Provides a clear, action-oriented internal project update.", tags: ["Written Communication", "Stakeholder Support"], view: "internal" },
  { title: "Email Correspondence", theme: "Customer Support", purpose: "Demonstrates a responsive, professional customer follow-up.", tags: ["Customer Care", "Inbox Management", "Clarity"], view: "email" },
  { title: "Inventory Tracking Report", theme: "Records & Reporting", purpose: "Surfaces stock levels, variances, and items requiring review.", tags: ["Reporting", "Data Accuracy", "Reconciliation"], view: "inventory" },
  { title: "Supervisor Insight Note", theme: "Records & Reporting", purpose: "Summarizes an operational observation and practical next steps.", tags: ["Analysis", "Documentation", "Process Improvement"], view: "note" },
  { title: "Purchase Order", theme: "Financial Documentation", purpose: "Records an itemized, approval-ready purchasing request.", tags: ["Procurement", "Records", "Detail Orientation"], view: "po" },
  { title: "Invoice Documentation", theme: "Financial Documentation", purpose: "Presents an organized invoice record for review and reconciliation.", tags: ["Invoice Review", "Reconciliation", "Accuracy"], view: "invoice" },
];

function calendarView() {
  const schedule = [
    ["01/24", "Inspiring quotes", "Facebook", "Story of overcoming adversity", "8 AM"],
    ["01/25", "Spreading love", "Pinterest", "Community giving video", "10:20 AM"],
    ["01/26", "Love & recognition", "X", "Follower thank-you and tutor recognition", "6 AM"],
    ["01/27", "Healthy minds", "LinkedIn", "Testimonial, case study, and e-book", "10 AM"],
    ["01/28", "Love through dance", "Instagram / YouTube", "Short-form brand video", "10 AM / 12 PM"],
  ];
  return `<div class="planner-head"><div><small>WEEKLY SOCIAL MEDIA CONTENT CALENDAR</small><h5>January 24–28</h5></div><div class="planner-actions"><span>Track metrics</span><span>Check messages</span></div></div><table class="data-table calendar-table"><thead><tr><th>Date</th><th>Theme</th><th>Platform</th><th>Content plan</th><th>Time</th></tr></thead><tbody>${schedule.map(row => `<tr>${row.map((cell, i) => `<td>${i === 2 ? `<span class="platform-pill">${cell}</span>` : cell}</td>`).join("")}</tr>`).join("")}</tbody></table><div class="insight-strip"><strong>Creative perspective</strong><span>Video views are strongest on Instagram</span><span>Testimonials increase engagement</span></div>`;
}
function trackerView() {
  const rows = [
    ["Client proposal draft", "In Progress", "Yes", "Awaiting feedback from team"],
    ["Social media assets", "Complete", "No", "Delivered to client"],
    ["Website banner update", "Pending", "Yes", "Updated copy needed"],
    ["Invoice #4521", "Complete", "No", "Payment received"],
    ["Brand kit revision", "In Progress", "Yes", "Colors need approval"],
    ["Email campaign setup", "Not Started", "Yes", "Waiting on content brief"],
    ["Quarterly report", "Pending", "Yes", "Data collection in progress"],
  ];
  return `<div class="metric-row"><div class="metric"><small>Tracked items</small><strong>07</strong></div><div class="metric"><small>Complete</small><strong>02</strong></div><div class="metric"><small>Follow-up</small><strong>05</strong></div></div><table class="data-table"><thead><tr><th>Task / Order</th><th>Status</th><th>Follow-up</th><th>Notes</th></tr></thead><tbody>${rows.map(row => `<tr><td>${row[0]}</td><td><span class="status status--${row[1].toLowerCase().replaceAll(" ", "-")}">${row[1]}</span></td><td>${row[2]}</td><td>${row[3]}</td></tr>`).join("")}</tbody></table>`;
}
function inventoryView() {
  const rows = [
    ["012345678901", "University Hoodie · Navy L", 12, 15],
    ["012345678902", "University T-Shirt · White M", 8, 8],
    ["012345678903", "University Lanyard · Blue", 24, 30],
    ["012345678904", "University Mug · Gold Logo", 6, 4],
    ["012345678905", "University Notebook · 5×7", 19, 20],
    ["012345678906", "University Cap · Gray", 3, 7],
  ];
  return `<div class="metric-row"><div class="metric"><small>SKUs reviewed</small><strong>06</strong></div><div class="metric"><small>On-hand units</small><strong>72</strong></div><div class="metric"><small>Variance</small><strong>−12</strong></div></div><div class="inventory-layout"><div class="bar-chart" aria-label="On-hand versus system quantities">${rows.map(row => `<div class="bar-group"><span>${row[1].split(" · ")[1] || row[1]}</span><i style="--on:${row[2]};--system:${row[3]}"></i></div>`).join("")}</div><div class="chart-legend"><span>On hand</span><span>System</span></div></div><table class="data-table"><thead><tr><th>UPC</th><th>Item</th><th>On hand</th><th>System</th><th>Variance</th></tr></thead><tbody>${rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td class="${row[2] !== row[3] ? "variance" : ""}">${row[2] - row[3]}</td></tr>`).join("")}</tbody></table><div class="callout">Discrepancies are highlighted for recount and supporting-document review.</div>`;
}
function emailView(customer = false) {
  const subject = customer ? "Resolution for damaged merchandise" : "Weekly coordination update";
  const body = customer ? `<p>Thank you for bringing the damaged item to our attention. I sincerely apologize for the inconvenience.</p><p>A full refund has been initiated, and a replacement item will be sent with a complimentary accessory. We appreciate your patience and the opportunity to make this right.</p>` : `<p>The weekly schedule and status tracker have been reviewed. Open items now have assigned owners, follow-up indicators, and current due dates.</p><p>Please review the items marked for follow-up before our next check-in.</p>`;
  return `<div class="mail"><aside class="mail-sidebar"><button type="button">＋ New message</button><strong>Mail</strong><div class="mail-folder active">Inbox <b>4</b></div><div class="mail-folder">Sent</div><div class="mail-folder">Drafts</div><div class="mail-folder">Archive</div></aside><div class="mail-message"><div class="mail-toolbar">Reply · Forward · Archive</div><small>${customer ? "To: Customer" : "To: Operations Team"} · 10:24 AM</small><h5>${subject}</h5><p>Hello,</p>${body}<p>Please let me know if I can provide any additional assistance.</p><p>Warm regards,<br><strong>Janelle Gardner</strong><br>${customer ? "Customer Support Supervisor" : "Administrative & Operations Support"}</p></div></div>`;
}
function purchaseOrderView() {
  const rows = [["University short-sleeve tee",5,"$24.98","$124.90"],["Navy writing pens",15,"$19.98","$299.70"],["Black sweatpants",15,"$9.98","$149.70"],["University logo mug",10,"$14.98","$149.80"],["ID holder",7,"$19.98","$139.86"],["Khaki lanyard",12,"$9.98","$119.76"]];
  return `<div class="doc"><div class="doc-head"><div><small>EXAMPLE ONLY</small><h5>PURCHASE ORDER</h5></div><div><strong>PO-4489</strong><br><small>May 12, 2024</small></div></div><div class="doc-parties"><p><small>PREPARED FOR</small><br><span class="redacted">Generalized university department</span></p><p><small>PREPARED BY</small><br>Administrative Support</p></div><table class="data-table"><thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</tbody></table><div class="doc-total"><span>Department discount</span><strong>−$239.32</strong><span>Grand total</span><strong>$957.30</strong></div><div class="callout">Recreated from the source sample. Contact, department, funding, and identifying details are generalized.</div></div>`;
}
function invoiceView() {
  return `<div class="doc"><div class="doc-head"><div><small>EXAMPLE ONLY</small><h5>INVOICE</h5></div><div><strong>INV-4521</strong><br><small>January 1, 2023</small></div></div><div class="doc-parties"><p><small>INVOICE FROM</small><br><span class="redacted">Generalized campus bookstore</span></p><p><small>INVOICE TO</small><br><span class="redacted">Customer details redacted</span></p></div><table class="data-table"><thead><tr><th>Description</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr></thead><tbody><tr><td>University desk clock · gold lens</td><td>1</td><td>$95.00</td><td>$95.00</td></tr><tr><td>Second-business-day shipping</td><td>1</td><td>$24.99</td><td>$24.99</td></tr></tbody></table><div class="doc-total"><span>Total due</span><strong>$119.99</strong><span>Payment</span><strong>Card ending ••••</strong></div><div class="callout">Recreated from the source sample. Customer, account, contact, and organization details are redacted or generalized.</div></div>`;
}
function noteView() {
  return `<div class="doc memo"><div class="doc-head"><div><small>INTERNAL · EXAMPLE ONLY</small><h5>SUPERVISOR INSIGHT NOTE</h5></div><span>Operations</span></div><h6>Observation</h6><p>Inventory reconciliation shows recurring variances in high-movement accessories and apparel.</p><h6>Recommended action</h6><p>Prioritize recounts for flagged SKUs, attach supporting documentation, and record resolution notes in the shared tracker.</p><h6>Follow-up</h6><p>Review outstanding discrepancies during the next weekly operations check-in.</p><div class="callout">This recreated sample uses generalized operational context and contains no confidential employer information.</div></div>`;
}
function sampleView(type) {
  if (type === "calendar") return calendarView();
  if (type === "tracker") return trackerView();
  if (type === "inventory") return inventoryView();
  if (type === "internal" || type === "email") return emailView(type === "email");
  if (type === "po") return purchaseOrderView();
  if (type === "invoice") return invoiceView();
  return noteView();
}

function renderAdminGallery() {
  const intro=document.createElement("div"); intro.className="admin-intro"; intro.innerHTML=`<h3 id="admin-gallery-title">Administrative & Operations Work Samples</h3><p>Recreated from the Administrative & Operations Work Samples portfolio as interactive web experiences. These samples reflect prior responsibilities; names, organizations, customer details, account information, and other identifiers are redacted or generalized for confidentiality.</p>`;
  const themes=[...new Set(adminSamples.map(s=>s.theme))];
  const groups=themes.map(theme=>{const group=document.createElement("section");group.className="sample-group";group.innerHTML=`<h3 class="sample-group__heading">${theme}</h3>`;adminSamples.filter(s=>s.theme===theme).forEach(sample=>{const d=document.createElement("details");d.className="sample-card";d.innerHTML=`<summary><div><h4>${sample.title}</h4><p class="sample-meta">${sample.theme} · ${sample.purpose}</p></div></summary><div class="sample-content"><ul class="tags">${sample.tags.map(t=>`<li>${t}</li>`).join("")}</ul><div class="app-window"><div class="window-bar"><i class="window-dot"></i><i class="window-dot"></i><i class="window-dot"></i><span class="window-title">${sample.title} · Recreated sample</span></div><div class="app-body">${sampleView(sample.view)}</div></div></div>`;group.append(d)});return group});
  adminGallery.replaceChildren(intro,...groups);
}

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
function renderVideoGallery() {
  const heading = document.createElement("div");
  heading.className = "video-gallery__intro";
  heading.innerHTML = `<p class="eyebrow">Creative Work</p><h3 id="video-gallery-title">Motion & Video</h3><p>Selected short-form motion and social concepts.</p>`;
  if (!videos.length) {
    const empty = document.createElement("p");
    empty.className = "video-gallery__empty";
    empty.textContent = "Video project details are coming soon.";
    videoGallery.replaceChildren(heading, empty);
    return;
  }
  const list = document.createElement("div");
  list.className = "video-project-list";
  videos.forEach(({ title, description, url, tools = [] }) => {
    if (!title || !url) return;
    const item = document.createElement("article");
    item.className = "video-project-item";
    const itemTitle = document.createElement("h4");
    itemTitle.textContent = title;
    item.append(itemTitle);
    if (description) {
      const text = document.createElement("p");
      text.textContent = description;
      item.append(text);
    }
    if (tools.length) {
      const tagList = document.createElement("ul");
      tagList.className = "video-tool-tags";
      tools.forEach((tool) => {
        const tag = document.createElement("li");
        tag.textContent = tool;
        tagList.append(tag);
      });
      item.append(tagList);
    }
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Watch Video ↗";
    item.append(link);
    list.append(item);
  });
  const audioNote = document.createElement("p");
  audioNote.className = "video-audio-note";
  audioNote.textContent = "Audio and sound effects sourced from Canva’s free media library.";
  videoGallery.replaceChildren(heading, list, audioNote);
}

function initializeReveal(){
  const targets=document.querySelectorAll(".reveal, .project-card, .reveal-card");
  if(matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window)){targets.forEach(x=>x.classList.add("is-revealed"));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-revealed");observer.unobserve(entry.target)}}),{threshold:.08});
  targets.forEach((target,index)=>{if(target.classList.contains("project-card") || target.classList.contains("reveal-card"))target.style.transitionDelay=`${Math.min(index%5,4)*45}ms`;observer.observe(target)});
}

function initializeAccordion() {
  const accordion = document.querySelector("[data-accordion]");
  if (!accordion) return;
  const triggers = [...accordion.querySelectorAll(".accordion-trigger")];
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
      triggers.forEach((item) => {
        const panel = document.getElementById(item.getAttribute("aria-controls"));
        const wasOpen = item.getAttribute("aria-expanded") === "true";
        item.setAttribute("aria-expanded", "false");
        panel.classList.remove("is-open");
        if (wasOpen) {
          window.setTimeout(() => {
            if (item.getAttribute("aria-expanded") === "false") panel.hidden = true;
          }, 380);
        } else {
          panel.hidden = true;
        }
      });
      if (shouldOpen) {
        const panel = document.getElementById(trigger.getAttribute("aria-controls"));
        trigger.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        requestAnimationFrame(() => panel.classList.add("is-open"));
      }
    });
  });
}

renderProjects();
initializeAccordion();
initializeReveal();
