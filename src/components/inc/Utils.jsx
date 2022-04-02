
export function titleToPath(text) {
    return text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}