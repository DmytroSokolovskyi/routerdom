export default class PostsService {
url = 'https://jsonplaceholder.typicode.com/posts'

    async  posts (url) {
        return  await fetch(this.url).then(value => value.json()).then(value => value.slice(0, 10))
    }

}