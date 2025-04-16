import axios from 'axios'

class Bypass {
  private url: string
  private key: string

  constructor() {
    this.url = 'http://tcsolver.duckdns.org/scraps'
    this.key = '55c17e8c-6006-49a4-893e-31618a733cee'
  }

  async request<T>(url: string): Promise<T> {
    try {
      const res = await axios.post(this.url, {
        url,
        key: this.key,
      })

      return res.data
    } catch (error) {
      console.error('⚠️ Bypass request error:', error)
      throw error
    }
  }
}

export default Bypass
