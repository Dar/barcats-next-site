export const slugifySentences = (sentence: string): string => {
  const slug = sentence
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  const randomLetters = Array.from({ length: 5 }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26))
  ).join("");

  return `${slug}-${randomLetters}`;
};

export const extractSlugFromURL = (pathname: string): string => {
    const parts = pathname.split('/');
    return parts.length > 1 ? parts[parts.length - 1] : '';
  };

  export const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };