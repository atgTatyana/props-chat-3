export interface MessageProps {
  from: {
    name: string,
  },
  time: string,
  text?: string,
}

export const Message = ({ from, time, text }: MessageProps) => {
  
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name name-left">
          <i className="fa fa-circle online"></i>{from.name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">
        {text}
      </div>
    </li>
  )
}
