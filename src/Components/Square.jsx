export function Square({ value , onSquareClick,winSlot }) {
  return (
    <button className={winSlot ? "square winSlot" : "square"} onClick={onSquareClick}>
      {value}
    </button>
  );
}
