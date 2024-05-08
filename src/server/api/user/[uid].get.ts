export default defineEventHandler(async (event) => {
  console.log('getUserInfo', event.context.auth)
  return {
    code: 0,
    data: {
      uid: '12312scdcsd',
      name: 'test'
    }
  }
})
