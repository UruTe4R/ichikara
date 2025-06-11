// 'use client'

// import styles from './conversation.module.css'
// import useWebSocket, { ReadyState } from 'react-use-websocket'
// import { useEffect, useState, useRef } from 'react';

// import CustomButton from '../forms/CustomButton';
// import { getAccessToken } from '@/app/lib/actions';

// // types
// import { ConversationType } from '@/app/inbox/page';
// import { MessageType } from '@/app/inbox/[id]/page';
// import apiService from '@/app/services/apiService';

// // props
// interface ConversationDetailProps {
//   conversation: ConversationType;
//   userId: string | null;
// }

// interface ChatMessageType extends Omit<MessageType, 'conversationId'| 'sender' | 'receiver'> {
//   sender_id: string;
//   receiver_id: string;
//   conversation_id: string;
// }


// export default function ConversationDetail({ conversation, userId }: ConversationDetailProps) {
//   const [accessToken, setAccessToken] = useState<string | null>('');
//   const [textareaValue, setTextareaValue] = useState<string>('');
//   const [messages, setMessages] = useState<ChatMessageType[]>([]);


//   const myUser = conversation.users.find((user) => user.id === userId)
//   const otherUser = conversation.users.find((user) => user.id !== userId)

//   // get accesstoken
//   useEffect(() =>{
//     async function fetchAndSetAccessToken() {
//       const accessToken = await getAccessToken();
//       console.log('accessToken', accessToken);
//       setAccessToken(accessToken);
//     }
    
//     async function fetchMessages() {
//       const messages = await apiService.getWithCredentials(`/api/chat/${conversation.id}/messages/`);
//       setMessages(messages);
//     }
    
//     fetchAndSetAccessToken();
//     fetchMessages();

//     setTimeout(() => {
//       scrollToBottom();
//     }, 1000)
//   }, [])

//   // connect websocket
//   const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket<{ message: ChatMessageType }>(`ws://localhost:8000/ws/${conversation.id}/?token=${accessToken}`, {
//     share: false,
//     onOpen: () => console.log('Connected to websocket'),
//     onClose: () => console.log('Disconnected from websocket'),
//     shouldReconnect: () => true,
//   })

//   // useEffect
//   useEffect(() => {
//     console.log('readyState connection state changed', readyState);
//   }, [readyState])

//   // when new message has been received
//   useEffect(() => {
//     if (lastJsonMessage) {
//       console.log('lastJsonMessage', lastJsonMessage)
//       console.log('myUser', myUser)
//       console.log('otherUser', otherUser)

//       const newMessage: ChatMessageType = lastJsonMessage.message;

//       setMessages((messages: ChatMessageType[]) => {
//         return [...messages, newMessage]
//       })
//     }

//     scrollToBottom();
//   }, [lastJsonMessage])

//   const messagesDiv = useRef<HTMLDivElement | null>(null);
  
//   // functions
//   function scrollToBottom() {
//     if (messagesDiv.current) {
//       console.log('scrollToBottom');
//       messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
//     }
//   }

//   function handleClick() {
//     console.log('otherUser', otherUser)
//     console.log("myUser", myUser)

//     async function sendMessage() {
//       if (!textareaValue) return;
//       sendJsonMessage({
//         event: 'chat_message',
//         data: {
//           conversation_id: conversation.id,
//           receiver_id: otherUser?.id,
//           sender_id: myUser?.id,
//           body: textareaValue,
//         }
//       })
//       setTextareaValue('')
//     }

//     sendMessage()
//     setTimeout(() => {
//       scrollToBottom();
//     }, 100)

//   }

//   return (
//     <>
//       <div 
//         className={styles.conversationDetail}
//         ref={messagesDiv}
//       >
//         {messages.map((message: ChatMessageType) => {
//           if (message.sender_id === userId) {
//             return (
//               <div key={message.id} className={`${styles.message} ${styles.owner}`}>
//                 <p className={styles.messageName}>{message.name || 'Anonymous'}</p>

//                 <p>
//                   {message.body}
//                 </p>
//               </div>
//             )
//           }
//           return (
//             <div key={message.id} className={styles.message}>
//               <p className={styles.messageName}>{message.name || 'Anonymous'}</p>

//               <p>
//                 {message.body}
//               </p>
//             </div>
//           )
//         })}
        

        
//       </div>
      
//       <div className={styles.containerContainer}>

//         <div className={styles.formContainer}>
//           <textarea 
//           name="message"
//           placeholder="Type your message..."
//           className={styles.input}
//           value={textareaValue}
//           onChange={(e) => setTextareaValue(e.target.value)}
//           /> 

//           <CustomButton 
//             label='Send'
//             onClick={handleClick}
//             className={styles.sendButton}
//             disabled={textareaValue === ''}
//           />
//         </div>
//       </div>
//     </>
//   )
// }