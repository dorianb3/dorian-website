
export function titleToPath(text) {
    return text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export function themeColor(theme) {
    let color;
    if (theme === "finance") {
      color = "#4285f4";
    } else if (theme === "blockchain") {
      color = "#2bbbad"
    } else if (theme === "economics") {
      color = "#ff4444"
    } else if (theme === "datascience") {
      color = "#ffbb33"
    };
    return color
  }