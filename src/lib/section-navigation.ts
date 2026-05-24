const SECTION_HIGHLIGHT_CLASS = "section-jump-highlight";

const getHeaderOffset = () => {
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 88;
  return Math.max(96, Math.ceil(headerHeight + 8));
};

export const normalizeSectionId = (sectionId: string) => sectionId.replace(/^#/, "");

export const highlightSection = (element: HTMLElement) => {
  element.classList.remove(SECTION_HIGHLIGHT_CLASS);
  void element.offsetWidth;
  element.classList.add(SECTION_HIGHLIGHT_CLASS);
  window.setTimeout(() => element.classList.remove(SECTION_HIGHLIGHT_CLASS), 900);
};

export const handleNavigateToSection = (sectionId: string) => {
  const id = normalizeSectionId(sectionId);
  const element = document.getElementById(id);
  if (!element) return false;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = Math.max(0, elementPosition - getHeaderOffset());

  window.scrollTo({
    top: offsetPosition,
    behavior: "auto",
  });

  highlightSection(element);
  return true;
};