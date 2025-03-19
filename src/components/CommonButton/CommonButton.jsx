export function CommonButton({ text, onClick }) {
    return (
        <button
            style={{ width: "100px" }}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
