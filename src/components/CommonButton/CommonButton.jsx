export function CommonButton({ children, onClick }) {
    return (
        <button style={{ width: "100px" }} onClick={onClick}>
            {children}
        </button>
    );
}
