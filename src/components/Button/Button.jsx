export const Button = ({ isActive, onClick, text }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          padding: '8px',
          color: 'white',
          fontWeight: isActive ? 'bold' : 'normal',
          outline: 'none'
        }}
      >
        {text}
      </button>
    );
  };
  