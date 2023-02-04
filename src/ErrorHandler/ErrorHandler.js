
export const initialize = () => {
    window.onerror = (msg, url, line, col, error) => {
        console.log(error);
    }
}