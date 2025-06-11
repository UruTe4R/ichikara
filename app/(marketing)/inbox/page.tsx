import styles from './inbox.module.css';

import Conversation from '@/app/components/inbox/Conversation';
import apiService from '@/app/services/apiService';
import { getUserId } from '../lib/actions';


export type UserType = {
  id: string;
  name: string;
}

export type ConversationType = {
  id: string;
  users: UserType[]
}

const conversations = [{
  id: '1',
  users: [{
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Harry',
  }  
]
}]

export default async function InboxPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Inbox</h1>

      {conversations.map((conversation: ConversationType) => {
        return (
          <Conversation 
            key={conversation.id}
            userId={'1'}
            conversation={conversation}
          />
        )
      })}
    </main>
  )
}