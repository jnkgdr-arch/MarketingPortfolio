/*
  EDITABLE PROJECT DATA
  ---------------------
  Replace placeholder `name` values with polished project titles as needed.
  Keep `pdfPath` pointed at the PDF that should open in the focused viewer.
  Add `previewImagePath` values when you have first-page preview images; leave
  them blank to show the generated placeholder card artwork.
  Update optional `category` values to group or label projects.
*/
const projects = [
  { name: "About Me", pdfPath: "assets/about-me.pdf", previewImagePath: "", category: "Introduction" },
  { name: "Procter & Gamble", pdfPath: "assets/procter-and-gamble.pdf", previewImagePath: "", category: "Brand Strategy" },
  { name: "Chipotle", pdfPath: "assets/chipotle.pdf", previewImagePath: "", category: "Marketing" },
  { name: "GA4", pdfPath: "assets/ga-4.pdf", previewImagePath: "", category: "Analytics" },
  { name: "Global Tech Project Management", pdfPath: "assets/global-tech-project-management.pdf", previewImagePath: "", category: "Project Management" },
  { name: "Research & Insights", pdfPath: "assets/research-and-insights.pdf", previewImagePath: "", category: "Research" },
  { name: "SEO & Keyword Search", pdfPath: "assets/seo-and-keyword-search.pdf", previewImagePath: "", category: "SEO" },
  { name: "Content Designs", pdfPath: "assets/content-designs.pdf", previewImagePath: "", category: "Design" },
  { name: "Administrative Work & Inventory", pdfPath: "assets/administrative-work-and-inventory.pdf", previewImagePath: "", category: "Operations" },
  { name: "Experience & Contact", pdfPath: "assets/experience-and-contact.pdf", previewImagePath: "", category: "Contact" },
];

const grid = document.querySelector("#portfolio-grid");
const focusedProject = document.querySelector("#focused-project");
const focusedPanel = focusedProject.querySelector(".focused-project__panel");
const focusedTitle = document.querySelector("#focused-project-title");
const focusedCategory = document.querySelector("#focused-project-category");
const pdfViewer = document.querySelector("#pdf-viewer");
const backButton = document.querySelector("#back-button");

let previousScrollY = 0;
let previouslyFocusedElement = null;

function renderProjects() {
  const cards = projects.map((project, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    card.setAttribute("aria-label", `Open ${project.name} PDF project`);

    const preview = document.createElement("div");
    preview.className = "project-card__preview";

    if (project.previewImagePath) {
      const image = document.createElement("img");
      image.src = project.previewImagePath;
      image.alt = `${project.name} first-page preview`;
      image.loading = "lazy";
      preview.append(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "project-card__placeholder";
      placeholder.textContent = String(index + 1).padStart(2, "0");
      preview.append(placeholder);
    }

    const body = document.createElement("div");
    body.className = "project-card__body";
    body.innerHTML = `
      <p class="project-card__category">${project.category || "Project"}</p>
      <h2>${project.name}</h2>
    `;

    card.append(preview, body);
    card.addEventListener("click", () => openProject(project));
    return card;
  });

  grid.replaceChildren(...cards);
}

function openProject(project) {
  previousScrollY = window.scrollY;
  previouslyFocusedElement = document.activeElement;

  focusedTitle.textContent = project.name;
  focusedCategory.textContent = project.category || "Project";
  pdfViewer.replaceChildren(createPdfEmbed(project));

  focusedProject.hidden = false;
  document.body.classList.add("is-focused");
  requestAnimationFrame(() => {
    focusedProject.classList.add("is-visible");
    focusedPanel.focus();
  });
}

function createPdfEmbed(project) {
  const iframe = document.createElement("iframe");
  iframe.src = project.pdfPath;
  iframe.title = `${project.name} PDF`;
  iframe.loading = "lazy";
  return iframe;
}

function closeProject() {
  focusedProject.classList.remove("is-visible");
  document.body.classList.remove("is-focused");

  window.setTimeout(() => {
    focusedProject.hidden = true;
    pdfViewer.replaceChildren();
    window.scrollTo({ top: previousScrollY, behavior: "instant" });

    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }, 260);
}

backButton.addEventListener("click", closeProject);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !focusedProject.hidden) {
    closeProject();
  }
});

renderProjects();
