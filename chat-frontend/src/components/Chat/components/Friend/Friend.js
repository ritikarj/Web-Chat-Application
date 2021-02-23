import React from 'react'
import {useSelector} from 'react-redux'
import {userStatus} from '../../../../utils/helpers'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Friend.scss'

const Friend = ({chat,click}) => {
    const currentChat = useSelector(state =>state.chatReducer.currentChat)
    const isChatOpenend = () => {
        return currentChat.id === chat.id ? 'opened' : ''
    }
    const lastMessage = () => {
        if(chat.Messages.length === 0)
        {
            return ''
        }
        const message = chat.Messages[chat.Messages.length-1]
        return message.type === 'image' ? 'image uploaded' : message.message
    }
    return (
        <div className={`friend-list ${isChatOpenend()}`} onClick={click}>
            <div>
                <img width='40' height='40' src = {chat.Users[0].avatar} alt='User avatar'/>
                <div className='friend-info'>
                    <h4 className='m-0'>{chat.Users[0].firstName} {chat.Users[0].lastName}</h4>
                    <h5 className='m-0'>{lastMessage()}</h5>
                </div>
            </div>

            <div className='friend-status'>
                <span className={`online-status ${userStatus(chat.Users[0])}`}><FontAwesomeIcon icon={['fas', 'comment']} className='fa-icon'/></span>
            </div>
            
        </div> 
        
    )
}

export default Friend