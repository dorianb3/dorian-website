


export const parseArticle = (article) => {
  const { filename, content } = article;
  const regex = /---\n([\s\S]+?)\n---/;
  const metadataString = content.match(regex)[1].trim();
  const metadata = {};
  metadataString.split('\n').forEach((line) => {
    const [key, ...values] = line.split(':').map((str) => str.trim());
    metadata[key] = values.join(':').replace(':', ': ');
  });
  const articleContent = content.replace(regex, '').trim();

  return { filename, content: articleContent, metadata };

};

export const estimateReadingTime = (content) => {
  const wordsPerMinute = 200; // Adjust this value based on the average reading speed
  const words = content.trim().split(/\s+/);
  const numberOfWords = words.length;
  const readingTime = Math.ceil(numberOfWords / wordsPerMinute);

  return readingTime;
};

// export function titleToPath(text) {
//     return text.toLowerCase()
//     .replace(/ /g, '-')
//     .replace(/[^\w-]+/g, '');
// }

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

