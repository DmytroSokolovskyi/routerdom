export default class ComentService {
    url = 'http://jsonplaceholder.typicode.com/comments/'

   async  comment (url) {
      return  await fetch(this.url).then(value => value.json()).then(value => value.slice(0, 10))
    }
}