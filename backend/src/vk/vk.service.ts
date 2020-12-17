import { Injectable } from '@nestjs/common'
import axios from 'axios'

import { VK_APP_ID, SCOPE, _V } from './constants'

@Injectable()
export class VkService {
  async getVkUserToken() {
    const result = axios.get('https://oauth.vk.com/authorize', {
      params: {
        client_id: VK_APP_ID,
        display: 'popup',
        redirect_uri: '',
        scope: SCOPE,
        response_type: 'token',
        v: _V,
      },
    })
  }
}
