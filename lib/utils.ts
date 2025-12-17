export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function downloadResume() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Hariharan_Chandrasekar_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

