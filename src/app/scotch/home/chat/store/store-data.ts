import { Participant } from '../share/model/participant';
import { Thread } from '../share/model/thread';
import { Message } from '../share/model/message';

export interface StoreData {
  participants: {[key: number]: Participant};
  thread: {[key: number ]: Thread};
  message: {[key: number]: Message};
}
