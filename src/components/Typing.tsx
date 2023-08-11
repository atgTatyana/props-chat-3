import { MessageProps } from "./Message"

export const Typing = ({ from, time }: MessageProps) => {
  
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name name-left">
          <i className="fa fa-circle online"></i>{from.name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <span className="typing"></span>
      <span className="typing typing-color1"></span>
      <span className="typing typing-color2"></span>
    </li>
  )
}
