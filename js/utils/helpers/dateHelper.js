export const thisYear = () => {
    const now = new Date();
    return `--${now.getFullYear()}--`;
};