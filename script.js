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
    sourceReference: "assets/administrative-operations-work-samples.pdf",
    descriptions: [
      {
        heading: "Organized work, clearly communicated",
        text: "Interactive examples of scheduling, correspondence, records, reporting, financial documentation, and customer support workflows.",
      },
    ],
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
const videoGallery = document.querySelector("#video-gallery");

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
    if (project.type === "video") card.id = "video";

    card.setAttribute(
      "aria-label",
      project.type ? `Open ${project.name} gallery` : `Open ${project.name} PDF project`
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
      <span class="project-card__link">${project.type ? "Explore gallery" : "Open presentation"} <span aria-hidden="true">↗</span></span>
    `;

    card.append(preview, body);

    card.addEventListener("click", () => {
      openProject(project);
    });

    if (project.type === "admin") {
      preview.firstElementChild?.classList.add("project-card__placeholder--admin");
      preview.firstElementChild?.setAttribute("aria-hidden", "true");
      preview.firstElementChild.innerHTML = "<span>OPERATIONS<br><small>Planning · Records · Communication</small></span>";
    } else if (project.type === "video") {
      preview.firstElementChild?.classList.add("project-card__placeholder--video");
      preview.firstElementChild?.setAttribute("aria-hidden", "true");
      preview.firstElementChild.innerHTML = "<span>MOTION<br><small>Video · Creative</small></span>";
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

  activeProjectPath = project.pdfPath || `${project.type}-gallery`;

  const isAdmin = project.type === "admin";
  const isVideo = project.type === "video";
  const isCustomGallery = isAdmin || isVideo;
  pdfPages.hidden = isCustomGallery;
  adminGallery.hidden = !isAdmin;
  videoGallery.hidden = !isVideo;
  if (isAdmin) renderAdminGallery();
  if (isVideo) renderVideoGallery();
  if (!isCustomGallery) pdfPages.replaceChildren(createLoadingMessage(project.name));

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

  if (!project.type) {
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
  videoGallery.replaceChildren();
  adminGallery.hidden = true;
  videoGallery.hidden = true;
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

  if (projectToRender.type) {
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
