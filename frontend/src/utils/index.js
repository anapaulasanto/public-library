export const formatDate = (dateString) => {
    const dateStringIso = dateString;
    const date = new Date(dateStringIso)

    const formatedDate = date.toLocaleDateString('pt-BR');

    return formatedDate;
}

export const nameToSlug = (name) => {
    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
}

export const slugToName = (slug) => {
    return slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}