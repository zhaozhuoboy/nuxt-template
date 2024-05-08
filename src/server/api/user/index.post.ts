export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('post body', body)
  console.log(event.context)
  return {
    code: 0,
    data: body
  }
})
