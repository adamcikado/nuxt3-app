export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders(['user-agent'])
  console.log('headers', headers)
})