
// URI URL
/**
 * 
 * @param {string} title 
 * @returns {string}
 */
export default function toUriTitle(title) {

    const uriTitle = title.toLowerCase().replaceAll(' ', '-');

    return uriTitle;
}
