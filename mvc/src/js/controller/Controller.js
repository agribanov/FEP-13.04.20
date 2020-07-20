const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
class Controller {
    constructor() {
        console.log('contorller started');
        this.usersCollection = new Collection(USERS_URL);
        this.usersCollection.fetch().then(() => {
            this.usersCollection.delete(9);
        });

        console.log(this.usersCollection);
    }
}
