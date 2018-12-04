
interface URLFunc {
    (obj: { [s: string]: string | number }): string
}

export default (builder: URLFunc) => (...paramObjects: [{ [s: string]: string | number; }]) => {
    return builder(Object.assign({}, ...paramObjects))
};
