import copyImg from "../../assets/images/copy.svg";

import "./index.scss";

interface IRoomCodeProps {
  code: string;
}

export function RoomCode(props: IRoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
