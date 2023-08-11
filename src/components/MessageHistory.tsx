import { Message } from './Message';
import { Response } from './Response';
import { IMessage } from '../App';
import { Typing } from './Typing';

interface MessageHistoryProps {
  list: IMessage[],
}

export const MessageHistory = ({ list = [] }: MessageHistoryProps) => {

  return (
    <ul>
      {list.map(item => item.type === "message" ?
        <Message key={item.id} from={item.from} time={item.time} text={item.text}  />
      : item.type === "response" ?
        <Response key={item.id} from={item.from} time={item.time} text={item.text} />
      : <Typing key={item.id} from={item.from} time={item.time} />)}
    </ul>
  )
}
