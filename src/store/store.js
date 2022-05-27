import { makeAutoObservable, onBecomeObserved } from 'mobx';
import { getUsers } from '../api';

class UserStore {

    id;
    name = "";
    username = "";
    email = "";
    address = {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
            "lat": "",
            "lng": ""
        }
    };
    phone = "";
    website = "";
    company = {
        "name": "",
        "catchPhrase": "",
        "bs": ""
    }



    constructor({ id, name, email, address, phone }) {
        makeAutoObservable(this, {}, {
            autoBind: true
        });

        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
}

class UsersStore {
    data = [];

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });

        onBecomeObserved(this, 'data', this.fetch);
    }

    *fetch() {
        const response = yield getUsers();
        this.data = response.map(event => new UserStore(event));
    }
}

export const events = new UsersStore();