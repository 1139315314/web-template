export default {
  login: async (args) => {
    const request = {
      url: '',
      method: '',
      data: args
    }
    return window.axios(request);
  }
}
