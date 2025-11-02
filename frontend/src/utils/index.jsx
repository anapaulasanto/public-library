export const formatDate = (dateString) => {
    const dateStringIso = dateString;
    const date = new Date(dateStringIso)

    const formatedDate = date.toLocaleDateString('pt-BR');

    return formatedDate;
}