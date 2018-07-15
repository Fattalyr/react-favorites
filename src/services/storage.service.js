export class LocalStorageService {
    STORAGE_KEY = 'list-manager-v-01';

    constructor( ) {
        if (localStorage.getItem(this.STORAGE_KEY) === null) {
            localStorage.setItem(this.STORAGE_KEY, '{}');
        }
    }

    setValue(key, value) {
        const data = JSON.parse( localStorage.getItem(this.STORAGE_KEY) );
        if (data[key] === undefined) {
            data[key] = {};
        }
        data[key] = Object.assign(data[key], value);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }

    setAll(value) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
    }

    getValue(key) {
        const data = JSON.parse( localStorage.getItem(this.STORAGE_KEY) );
        return data[key];
    }

    getAll() {
        return JSON.parse( localStorage.getItem(this.STORAGE_KEY) );
    }

}