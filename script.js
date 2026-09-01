let pdfjsLib = null;

const pdfJsReady = import(
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs"
)
  .then((module) => {
    pdfjsLib = module;

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

    return pdfjsLib;
  })
  .catch((error) => {
    console.error("Unable to initialize PDF.js", error);
    return null;
  });

const projects = [
  {
    name: "About Me",
    pdfPath: "assets/about-me.pdf",
    category: "Introduction",
    descriptions: [],
    toolSections: [
      {
        heading: "Design Tools",
        imagePath: "assets/designs-tools.png",
        ariaLabel: "View design tools",
      },
      {
        heading: "Tools Used",
        imagePath: "assets/website-builder-tools.png",
        ariaLabel: "View website builder tools",
      },
    ],
  },
  {
    name: "Procter & Gamble",
    pdfPath: "assets/procter-and-gamble.pdf",
    category: "Brand Strategy",
    descriptions: [
      {
        heading:
          "Designed P&G Go-To-Market Strategy & 12-Month Rollout Sub-line Product for Portfolio Growth",
        text:
          "Conceptualized new-market haircare line for portfolio expansion using competitive analysis and a $898M to $1.796B budget estimate.",
      },
    ],
  },
  {
    name: "Chipotle",
    pdfPath: "assets/chipotle.pdf",
    category: "Marketing",
    descriptions: [
      {
        heading:
          "Researched Consumer Demand to Recommend Chipotle's Expansion into China",
        text:
          "Analyzed customer preferences, cultural behaviors, and market opportunities to support localized decision-making.",
      },
    ],
  },
  {
    name: "GA4",
    pdfPath: "assets/ga-4.pdf",
    category: "Analytics",
    descriptions: [
      {
        heading:
          "Examined 318K New Users and $128.5K in Top-Product Revenue to Recommend Sales Strategies",
        text:
          "Analyzed Google Merch Store performance in GA4 using KPI tracking, user engagement data, and e-commerce insights.",
      },
    ],
  },
  {
    name: "Global Tech Project Management",
    pdfPath: "assets/global-tech-project-management.pdf",
    category: "Project Management",
    descriptions: [
      {
        heading:
          "Developed a Project Management Framework to Strengthen Governance, Risk Tracking, and Process Oversight",
        text:
          "Analyzed project gaps, process risks, stakeholder needs, and reporting practices to recommend structured workflow improvements.",
      },
    ],
  },
  {
    name: "Research & Insights",
    pdfPath: "assets/research-and-insights.pdf",
    category: "Research",
    descriptions: [
      {
        heading:
          "Analyzed 500 ABC Restaurant Survey Responses to Recommend Audience and Dining Strategies",
        text:
          "Examined consumer survey data using Excel PivotTables to identify audience segments and recommend food, ambience, and outreach strategies.",
      },
      {
        heading:
          "Compared GDP, Population, and Economic Freedom Across 15 Countries to Evaluate Market Conditions",
        text:
          "Analyzed World Development Indicators and 2025 economic freedom metrics to compare national output, population scale, GDP per capita, and institutional conditions.",
      },
    ],
  },
  {
    name: "SEO & Keyword Search",
    pdfPath: "assets/seo-and-keyword-search.pdf",
    category: "SEO",
    descriptions: [
      {
        heading:
          "Tailored 6 Coleman Marketing Strategies Using Keyword Insights to Guide SEO Recommendations",
        text:
          "Analyzed SEO trends, competition, bid ranges, and search changes to guide Coleman marketing recommendations.",
      },
    ],
  },
  {
    name: "Content Designs",
    pdfPath: "assets/content-designs.pdf",
    category: "Design",
    descriptions: [],
  },
  {
    name: "Administrative & Operations",
    category: "Work Samples",
    type: "admin",
    descriptions: [
      {
        heading: "Organized work, clearly communicated",
        text: "Interactive examples of scheduling, correspondence, records, reporting, financial documentation, and customer support workflows.",
      },
    ],
  },
  {
    name: "Experience & Contact",
    pdfPath: "assets/experience-and-contact.pdf",
    category: "Contact",
    descriptions: [
      {
        heading: "Core Skills",
        text:
          "Digital Marketing, Content Creation, Project Management, Competitive Analysis, Campaign Support.",
      },
      {
        heading: "Technical Skills",
        text:
          "Canva, Adobe Photoshop, Microsoft Office Suite, Google Analytics 4, HootSuite.",
      },
      {
        heading: "Soft Skills",
        text:
          "Communication, Collaboration, Attention to Detail, Problem Solving, Adaptability.",
      },
      {
        heading: "Degrees & Certificates",
        link:
          "https://drive.google.com/drive/folders/1JLaXqjosYUGntsv1EYa1kr3qqxCpnmxN?usp=sharing",
        linkLabel:
          "View degrees and certificates in Google Drive",
      },
    ],
  },
];

const grid = document.querySelector("#portfolio-grid");
const focusedProject = document.querySelector("#focused-project");

const focusedPanel = focusedProject.querySelector(
  ".focused-project__panel"
);

const focusedTitle = document.querySelector(
  "#focused-project-title"
);

const focusedCategory = document.querySelector(
  "#focused-project-category"
);

const pdfPages = document.querySelector("#pdf-pages");
const backButton = document.querySelector("#back-button");
const adminGallery = document.querySelector("#admin-gallery");
const videoGrid = document.querySelector("#video-grid");

const projectDescription = document.querySelector(
  "#project-description"
);

const projectTools = document.querySelector(
  "#project-tools"
);

const pdfCache = new Map();

let previousScrollY = 0;
let previouslyFocusedElement = null;
let activeRenderToken = 0;
let activeProjectPath = "";
let closeTimerId = null;
let currentProject = null;
let resolutionTimerId = null;

function getOutputScale() {
  return Math.min(window.devicePixelRatio || 1, 3);
}

function renderProjects() {
  const cards = projects.map((project, index) => {
    const card = document.createElement("button");

    card.type = "button";
    card.className = "project-card";
    if (project.type === "admin") card.id = "administrative-operations";

    card.setAttribute(
      "aria-label",
      project.type === "admin" ? `Open ${project.name} gallery` : `Open ${project.name} PDF project`
    );

    const preview = document.createElement("div");

    preview.className = "project-card__preview";

    preview.append(
      createPreviewPlaceholder(project.name)
    );

    const body = document.createElement("div");

    body.className = "project-card__body";

    body.innerHTML = `
      <span class="project-card__number">${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}</span>
      <p class="project-card__category">${project.category || "Project"}</p>
      <h2>${project.name}</h2>
      <span class="project-card__link">Open presentation <span aria-hidden="true">↗</span></span>
    `;

    card.append(preview, body);

    card.addEventListener("click", () => {
      openProject(project);
    });

    if (project.type === "admin") {
      preview.firstElementChild?.classList.add("project-card__placeholder--admin");
      preview.firstElementChild?.setAttribute("aria-hidden", "true");
      preview.firstElementChild.innerHTML = "<span>OPERATIONS<br><small>Planning · Records · Communication</small></span>";
    } else {
      renderPdfThumbnail(project, preview);
    }

    return card;
  });

  grid.replaceChildren(...cards);
}

function createPreviewPlaceholder(name) {
  const placeholder = document.createElement("div");

  placeholder.className =
    "project-card__placeholder";

  placeholder.textContent = name;

  return placeholder;
}

async function getPdfDocument(pdfPath) {
  const library = pdfjsLib || (await pdfJsReady);

  if (!library) {
    throw new Error("PDF.js is unavailable.");
  }

  if (!pdfCache.has(pdfPath)) {
    const loadingPromise = library
      .getDocument(pdfPath)
      .promise.catch((error) => {
        pdfCache.delete(pdfPath);
        throw error;
      });

    pdfCache.set(pdfPath, loadingPromise);
  }

  return pdfCache.get(pdfPath);
}

async function renderPdfThumbnail(
  project,
  preview
) {
  try {
    const pdf = await getPdfDocument(
      project.pdfPath
    );

    const page = await pdf.getPage(1);

    const baseViewport = page.getViewport({
      scale: 1,
    });

    const displayWidth =
      preview.clientWidth || 260;

    const displayHeight =
      preview.clientHeight || 210;

    const widthScale =
      displayWidth / baseViewport.width;

    const heightScale =
      displayHeight / baseViewport.height;

    const cssScale = Math.max(
      widthScale,
      heightScale
    );

    const viewport = page.getViewport({
      scale: cssScale,
    });

    const outputScale = getOutputScale();

    const canvas =
      document.createElement("canvas");

    const context =
      canvas.getContext("2d");

    if (!context) {
      throw new Error(
        "Unable to create a canvas context."
      );
    }

    canvas.width = Math.ceil(
      viewport.width * outputScale
    );

    canvas.height = Math.ceil(
      viewport.height * outputScale
    );

    canvas.style.width =
      `${viewport.width}px`;

    canvas.style.height =
      `${viewport.height}px`;

    canvas.setAttribute(
      "aria-hidden",
      "true"
    );

    const transform =
      outputScale !== 1
        ? [
            outputScale,
            0,
            0,
            outputScale,
            0,
            0,
          ]
        : null;

    await page.render({
      canvasContext: context,
      viewport,
      transform,
    }).promise;

    if (preview.isConnected) {
      preview.replaceChildren(canvas);
    }
  } catch (error) {
    console.error(
      `Unable to render thumbnail for ${project.name}`,
      error
    );
  }
}

function openProject(project) {
  currentProject = project;

  if (closeTimerId !== null) {
    window.clearTimeout(closeTimerId);
    closeTimerId = null;
  }

  previousScrollY = window.scrollY;

  previouslyFocusedElement =
    document.activeElement;

  focusedTitle.textContent = project.name;

  focusedCategory.textContent =
    project.category || "Project";

  renderProjectDescriptions(
    project.descriptions || []
  );

  renderProjectTools(
    project.toolSections || []
  );

  activeRenderToken += 1;

  const renderToken = activeRenderToken;

  activeProjectPath = project.pdfPath || "admin-gallery";

  const isAdmin = project.type === "admin";
  pdfPages.hidden = isAdmin;
  adminGallery.hidden = !isAdmin;
  if (isAdmin) {
    renderAdminGallery();
  } else {
    pdfPages.replaceChildren(createLoadingMessage(project.name));
  }

  focusedProject.hidden = false;

  document.body.classList.add(
    "is-focused"
  );

  requestAnimationFrame(() => {
    focusedProject.classList.add(
      "is-visible"
    );

    focusedPanel.focus();
  });

  if (project.type !== "admin") {
    renderPdfPages(project, renderToken);
  }
}

function renderProjectDescriptions(
  descriptions
) {
  const populatedDescriptions =
    descriptions.filter(
      ({ heading, text, link }) =>
        heading || text || link
    );

  projectDescription.replaceChildren(
    ...populatedDescriptions.map(
      ({
        heading,
        text,
        link,
        linkLabel,
      }) => {
        const item =
          document.createElement("section");

        item.className =
          "project-description__item";

        if (heading) {
          const headingElement =
            document.createElement("h3");

          headingElement.textContent =
            heading;

          item.append(headingElement);
        }

        if (text) {
          const textElement =
            document.createElement("p");

          textElement.textContent = text;

          item.append(textElement);
        }

        if (link) {
          const linkElement =
            document.createElement("a");

          linkElement.className =
            "project-description__text-link";

          linkElement.href = link;
          linkElement.target = "_blank";
          linkElement.rel =
            "noopener noreferrer";

          linkElement.textContent =
            "Click here";

          linkElement.setAttribute(
            "aria-label",
            linkLabel ||
              "View degrees and certificates"
          );

          linkElement.title =
            linkLabel ||
            "View degrees and certificates";

          item.append(linkElement);
        }

        return item;
      }
    )
  );

  projectDescription.hidden =
    populatedDescriptions.length === 0;
}

function renderProjectTools(
  toolSections
) {
  const populatedToolSections =
    toolSections.filter(
      ({ heading, imagePath }) =>
        heading && imagePath
    );

  projectTools.replaceChildren(
    ...populatedToolSections.map(
      ({
        heading,
        imagePath,
        ariaLabel,
      }) => {
        const section =
          document.createElement("section");

        section.className =
          "project-tool-section";

        const headingElement =
          document.createElement("h3");

        headingElement.textContent =
          heading;

        const button =
          document.createElement("button");

        button.className =
          "tool-icon-button";

        button.type = "button";

        button.setAttribute(
          "aria-label",
          ariaLabel ||
            `View ${heading}`
        );

        const image =
          document.createElement("img");

        image.src = imagePath;
        image.alt = "";
        image.loading = "lazy";

        image.addEventListener(
          "error",
          () => {
            console.error(
              `Unable to load tool image: ${imagePath}`
            );

            button.classList.add(
              "has-image-error"
            );

            const errorText =
              document.createElement("span");

            errorText.className =
              "tool-image-error";

            errorText.textContent =
              "Image unavailable";

            button.replaceChildren(
              errorText
            );
          }
        );

        button.append(image);

        section.append(
          headingElement,
          button
        );

        return section;
      }
    )
  );

  projectTools.hidden =
    populatedToolSections.length === 0;
}

async function renderPdfPages(
  project,
  renderToken
) {
  try {
    const selectedPdfPath =
      project.pdfPath;

    const pdf = await getPdfDocument(
      selectedPdfPath
    );

    if (
      renderToken !== activeRenderToken ||
      selectedPdfPath !==
        activeProjectPath
    ) {
      return;
    }

    pdfPages.replaceChildren();

    for (
      let pageNumber = 1;
      pageNumber <= pdf.numPages;
      pageNumber += 1
    ) {
      if (
        renderToken !==
          activeRenderToken ||
        selectedPdfPath !==
          activeProjectPath
      ) {
        return;
      }

      const page =
        await pdf.getPage(pageNumber);

      if (
        renderToken !==
          activeRenderToken ||
        selectedPdfPath !==
          activeProjectPath
      ) {
        return;
      }

      const pageElement =
        await renderPdfPage(
          page,
          project,
          pageNumber
        );

      if (
        renderToken !==
          activeRenderToken ||
        selectedPdfPath !==
          activeProjectPath
      ) {
        return;
      }

      pdfPages.append(pageElement);
    }
  } catch (error) {
    if (
      renderToken !== activeRenderToken ||
      project.pdfPath !==
        activeProjectPath
    ) {
      return;
    }

    console.error(
      `Unable to render PDF for ${project.name}`,
      error
    );

    pdfPages.replaceChildren(
      createErrorMessage(project.name)
    );
  }
}

async function renderPdfPage(
  page,
  project,
  pageNumber
) {
  const pageElement =
    document.createElement("article");

  pageElement.className = "pdf-page";

  pageElement.setAttribute(
    "aria-label",
    `${project.name} page ${pageNumber}`
  );

  const baseViewport =
    page.getViewport({
      scale: 1,
    });

  const availableWidth =
    pdfPages.getBoundingClientRect()
      .width || 900;

  const cssScale =
    availableWidth /
    baseViewport.width;

  const viewport =
    page.getViewport({
      scale: cssScale,
    });

  const outputScale =
    getOutputScale();

  const canvas =
    document.createElement("canvas");

  const context =
    canvas.getContext("2d");

  if (!context) {
    throw new Error(
      "Unable to create a canvas context."
    );
  }

  canvas.width = Math.ceil(
    viewport.width * outputScale
  );

  canvas.height = Math.ceil(
    viewport.height * outputScale
  );

  canvas.style.width =
    `${viewport.width}px`;

  canvas.style.height =
    `${viewport.height}px`;

  const annotationLayer =
    document.createElement("div");

  annotationLayer.className =
    "annotationLayer";

  annotationLayer.setAttribute(
    "aria-label",
    `${project.name} page ${pageNumber} links`
  );

  pageElement.style.aspectRatio =
    `${viewport.width} / ${viewport.height}`;

  pageElement.append(
    canvas,
    annotationLayer
  );

  const transform =
    outputScale !== 1
      ? [
          outputScale,
          0,
          0,
          outputScale,
          0,
          0,
        ]
      : null;

  await page.render({
    canvasContext: context,
    viewport,
    transform,
  }).promise;

  const annotations =
    await page.getAnnotations({
      intent: "display",
    });

  renderAnnotationLinks(
    annotations,
    annotationLayer,
    viewport
  );

  return pageElement;
}

function renderAnnotationLinks(
  annotations,
  annotationLayer,
  viewport
) {
  annotations
    .filter(
      (annotation) =>
        annotation.subtype === "Link" &&
        (
          annotation.url ||
          annotation.unsafeUrl
        )
    )
    .forEach((annotation) => {
      const rect =
        viewport.convertToViewportRectangle(
          annotation.rect
        );

      const left = Math.min(
        rect[0],
        rect[2]
      );

      const top = Math.min(
        rect[1],
        rect[3]
      );

      const width = Math.abs(
        rect[0] - rect[2]
      );

      const height = Math.abs(
        rect[1] - rect[3]
      );

      const link =
        document.createElement("a");

      link.href =
        annotation.url ||
        annotation.unsafeUrl;

      link.target = "_blank";

      link.rel =
        "noopener noreferrer";

      link.title =
        annotation.contents ||
        "Open project link in a new tab";

      link.style.left =
        `${left}px`;

      link.style.top =
        `${top}px`;

      link.style.width =
        `${width}px`;

      link.style.height =
        `${height}px`;

      annotationLayer.append(link);
    });
}

function createLoadingMessage(name) {
  const message =
    document.createElement("p");

  message.className = "pdf-message";

  message.textContent =
    `Loading ${name}…`;

  return message;
}

function createErrorMessage(name) {
  const message =
    document.createElement("p");

  message.className = "pdf-message";

  message.textContent =
    `Unable to load ${name}. Please check the PDF path and try again.`;

  return message;
}

function closeProject() {
  currentProject = null;

  activeRenderToken += 1;
  activeProjectPath = "";

  pdfPages.replaceChildren();
  adminGallery.replaceChildren();
  adminGallery.hidden = true;
  pdfPages.hidden = false;

  focusedProject.classList.remove(
    "is-visible"
  );

  document.body.classList.remove(
    "is-focused"
  );

  closeTimerId = window.setTimeout(
    () => {
      focusedProject.hidden = true;

      window.scrollTo({
        top: previousScrollY,
        behavior: "auto",
      });

      if (
        previouslyFocusedElement
          instanceof HTMLElement
      ) {
        previouslyFocusedElement.focus();
      }

      closeTimerId = null;
    },
    260
  );
}

function rerenderForResolutionChange() {
  if (
    focusedProject.hidden ||
    !currentProject
  ) {
    renderProjects();
    return;
  }

  const projectToRender = currentProject;

  if (projectToRender.type === "admin") {
    return;
  }

  const savedScrollTop =
    focusedPanel.scrollTop;

  activeRenderToken += 1;

  const renderToken =
    activeRenderToken;

  activeProjectPath =
    projectToRender.pdfPath;

  pdfPages.replaceChildren(
    createLoadingMessage(
      projectToRender.name
    )
  );

  renderPdfPages(
    projectToRender,
    renderToken
  ).then(() => {
    if (
      renderToken ===
        activeRenderToken &&
      currentProject ===
        projectToRender
    ) {
      focusedPanel.scrollTop =
        savedScrollTop;
    }
  });
}

backButton.addEventListener(
  "click",
  closeProject
);

document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key === "Escape" &&
      !focusedProject.hidden
    ) {
      closeProject();
    }
  }
);

window.addEventListener(
  "resize",
  () => {
    window.clearTimeout(
      resolutionTimerId
    );

    resolutionTimerId =
      window.setTimeout(
        rerenderForResolutionChange,
        250
      );
  }
);

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
  const cells = ["Time","Mon 14","Tue 15","Wed 16","Thu 17","Fri 18","9 AM","Campaign brief","Editorial review","<div class='event'>Team sync</div>","Asset review","Reporting","11 AM","<div class='event'>Draft due</div>","Scheduling","Analytics check","<div class='event'>Approval</div>","Publish","2 PM","Community","<div class='event'>Copy review</div>","Planning","Follow-up","Weekly recap"];
  return `<div class="calendar">${cells.map(cell => `<div>${cell}</div>`).join("")}</div>`;
}
function tableView(inventory = false) {
  const rows = inventory ? [["Office supplies","124","120","-4","Review"],["Shipping materials","86","86","0","Verified"],["Equipment accessories","42","40","-2","Recount"]] : [["Weekly report","Operations","Sep 3","In progress"],["Vendor follow-up","Admin","Sep 4","Scheduled"],["Records audit","Support","Sep 6","Complete"]];
  return `<table class="data-table"><thead><tr>${(inventory?["Category","Recorded","Counted","Variance","Action"]:["Task","Area","Due","Status"]).map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((x,i)=>`<td>${i===r.length-1?`<span class="status">${x}</span>`:x}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}
function emailView(customer = false) {
  return `<div class="mail"><aside class="mail-sidebar"><strong>Mail</strong><div class="mail-folder active">Inbox</div><div class="mail-folder">Sent</div><div class="mail-folder">Drafts</div><div class="mail-folder">Archive</div></aside><div class="mail-message"><small>${customer?"To: Customer":"To: Operations Team"} · 10:24 AM</small><h5>${customer?"Follow-up on your recent request":"Weekly coordination update"}</h5><p>Hello,</p><p>${customer?"Thank you for reaching out. I’m following up to confirm that your request has been documented and routed for review. I’ll share the next update by the agreed date.":"Here is a concise update on this week’s priorities. The schedule has been reviewed, open items have assigned owners, and the tracker reflects current due dates."}</p><p>Please let me know if any additional context would be helpful.</p><p>Best,<br>Janelle</p></div></div>`;
}
function documentView(type) {
  const titles={note:"SUPERVISOR INSIGHT NOTE",po:"PURCHASE ORDER",invoice:"INVOICE DOCUMENTATION"};
  if(type==="note") return `<div class="doc"><div class="doc-head"><h5>${titles[type]}</h5><span>Internal</span></div><p><strong>Observation</strong></p><p>Recurring handoff questions indicate an opportunity to clarify ownership at the start of each request.</p><p><strong>Suggested next step</strong></p><p>Add an owner and next-action field to the shared status tracker, then review unresolved items during the weekly check-in.</p><div class="callout">Recreated sample. Names, organizations, and identifying details are generalized.</div></div>`;
  return `<div class="doc"><div class="doc-head"><h5>${titles[type]}</h5><span>${type==="po"?"PO-REDACTED":"INV-REDACTED"}</span></div><p><strong>${type==="po"?"Vendor":"Bill to"}:</strong> <span class="redacted">Generalized Organization</span></p>${tableView(false)}<p style="text-align:right"><strong>Total: $—.—</strong></p><div class="callout">Demonstration document only. All identifying and financial information has been redacted or generalized.</div></div>`;
}
function sampleView(type) {
  if(type==="calendar") return calendarView();
  if(type==="tracker") return `<div class="metric-row"><div class="metric"><small>Open</small><strong>06</strong></div><div class="metric"><small>On track</small><strong>92%</strong></div><div class="metric"><small>Due soon</small><strong>02</strong></div></div>${tableView()}`;
  if(type==="inventory") return `<div class="metric-row"><div class="metric"><small>Units counted</small><strong>248</strong></div><div class="metric"><small>Variance</small><strong>2.4%</strong></div><div class="metric"><small>Flagged</small><strong>02</strong></div></div><div class="chart"><span style="height:76%"></span><span style="height:52%"></span><span style="height:90%"></span><span style="height:64%"></span><span style="height:82%"></span></div>${tableView(true)}<div class="callout">Two categories require recount or supporting documentation.</div>`;
  if(type==="internal"||type==="email") return emailView(type==="email");
  return documentView(type);
}
function renderAdminGallery() {
  const intro=document.createElement("div"); intro.className="admin-intro"; intro.innerHTML=`<h3 id="admin-gallery-title">Administrative & Operations Work Samples</h3><p>These recreated and redacted samples are based on prior responsibilities. Names, organizations, account details, and other identifying information have been generalized for confidentiality.</p>`;
  const themes=[...new Set(adminSamples.map(s=>s.theme))];
  const groups=themes.map(theme=>{const group=document.createElement("section");group.className="sample-group";group.innerHTML=`<h3 class="sample-group__heading">${theme}</h3>`;adminSamples.filter(s=>s.theme===theme).forEach(sample=>{const d=document.createElement("details");d.className="sample-card";d.innerHTML=`<summary><div><h4>${sample.title}</h4><p class="sample-meta">${sample.theme} · ${sample.purpose}</p></div></summary><div class="sample-content"><ul class="tags">${sample.tags.map(t=>`<li>${t}</li>`).join("")}</ul><div class="app-window"><div class="window-bar"><i class="window-dot"></i><i class="window-dot"></i><i class="window-dot"></i><span class="window-title">${sample.title} · Recreated sample</span></div><div class="app-body">${sampleView(sample.view)}</div></div></div>`;group.append(d)});return group});
  adminGallery.replaceChildren(intro,...groups);
}

const videos = [];
function renderVideos(){
  if(!videos.length){videoGrid.innerHTML=`<div class="video-empty"><span class="video-empty__icon" aria-hidden="true">▶</span><div><h3>Video collection coming soon</h3><p>This gallery is ready for selected MP4 work. New entries can include a title, category, video path, poster, and description without changing the layout.</p></div></div>`;return;}
  videoGrid.replaceChildren(...videos.map(v=>{const card=document.createElement("article");card.className="video-card";card.innerHTML=`<video controls preload="metadata" playsinline ${v.poster?`poster="${v.poster}"`:""}><source src="${v.videoPath}" type="video/mp4">Your browser does not support HTML5 video.</video><div class="video-card__body"><p class="eyebrow">${v.category}</p><h3>${v.title}</h3>${v.description?`<p>${v.description}</p>`:""}</div>`;return card;}));
}
function initializeReveal(){
  const targets=document.querySelectorAll(".reveal, .project-card");
  if(matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window)){targets.forEach(x=>x.classList.add("is-revealed"));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-revealed");observer.unobserve(entry.target)}}),{threshold:.08});
  targets.forEach((target,index)=>{if(target.classList.contains("project-card"))target.style.transitionDelay=`${Math.min(index%5,4)*45}ms`;observer.observe(target)});
}

renderProjects();
renderVideos();
initializeReveal();
