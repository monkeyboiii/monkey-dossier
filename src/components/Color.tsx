export function Color({ hex, children }) {
    return <span style={{ color: hex }}>{children}</span>;
}
