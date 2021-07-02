// Dependency inversion principle

class Fetch {
	request(key) {
		return Promise.resolve('data form fetch');
	}
}

class LocalStorage {
  get(key) {
    return 'data from LocalStorage';
  }
}

class FetchClient {
	constructor() {
		this.fetch = new Fetch();
	}

	getClient(key) {
		return this.fetch.request(key);
	}
}

class LocalStorageClient {
	constructor() {
		this.fetch = new LocalStorage();
	}

	getClient(key) {
		return this.fetch.get(key);
	}
}

class DataBase {
	constructor(client) {
		this.client = client;
	}

	getDate(key) {
		return this.client.getClient(key);
	}
}

const db = new DataBase(new LocalStorageClient());

console.log(db.getDate('key'));
