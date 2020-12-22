export default class UserService {

    url = 'https://jsonplaceholder.typicode.com/users/'


getUserbyId (id) {

        return fetch(`${this.url}${id}`).then(value => value.json());

    };
}