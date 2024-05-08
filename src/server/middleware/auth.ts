export default defineEventHandler(async event => {
  event.context.auth = {uid: 123, name: 'xxx'}
})