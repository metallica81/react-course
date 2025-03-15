export function Clear({ handlers }) {
    return (
        <button
            style={{ width: "100px" }}
            onClick={() => {
                handlers.setName('');
                handlers.setText('');
                handlers.setRating(null)
            }}
        >
            Clear
        </button>
    );
}
