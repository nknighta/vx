export const exchangeUnixDate = ({ base, formattedDate }: { base: Date, formattedDate: string }) => {
    const unixTime = new Date(base).getTime();
    const date = new Date(unixTime);
    formattedDate = `${date.toLocaleString()}`; // Convert the date to a string in ISO 8601 format
    return formattedDate;
}