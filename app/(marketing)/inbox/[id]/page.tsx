import styles from './conversationpage.module.css';

// import ConversationDetail from '@/app/components/inbox/ConversationDetail';
import { getUserId } from '@/app/lib/actions';
import apiService from '@/app/services/apiService';
import { UserType } from '../page';
// import UnAuthorized from '@/app/auth/UnAuthorized';

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;

  sender: UserType;
  receiver: UserType;
}

export default async function ConversationPage({ params }: {params: {id: string}}) {
  const { id: conversationId } = await params
  const userId = await getUserId();

  const conversation = await apiService.getWithCredentials(`/api/chat/${conversationId}`);


  // if (!userId) {
  //   return (
  //     <UnAuthorized />
  //   )
  // }

  return (
    <main className={styles.main}>
      <ConversationDetail 
        conversation={conversation}
        userId={userId}
      />
    </main>
  )
}