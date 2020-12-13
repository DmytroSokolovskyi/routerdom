export default class PostsService {
    url = 'https://jsonplaceholder.typicode.com/posts'

    async posts(url) {
        return await fetch(this.url).then(value => value.json()).then(value => value.slice(0, 10))
    }

    async post(id) {
        return await fetch(`${this.url}/${id}`).then(value => value.json())
    };
}