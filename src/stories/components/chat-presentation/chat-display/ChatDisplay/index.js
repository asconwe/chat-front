import { storiesOf } from '@storybook/vue'

import AppStyle from 'AppStyle.vue'
import ChatDisplay from 'components/chat-presentation/chat-display/ChatDisplay.vue'

storiesOf('ChatDisplay', module)
  .add('Received and sent messages', () => ({
    components: { ChatDisplay, AppStyle },
    template: `
        <app-style>
          <ChatDisplay :messages="messages" :received="true"/>
        </app-style>  
    `,
    data () {
      return {
        messages: [
          {
            message: 'testing 123',
            received: true
          },
          {
            message: 'hey',
            received: false
          },
          {
            message: 'hey',
            received: false
          }
        ]
      }
    }
  }))