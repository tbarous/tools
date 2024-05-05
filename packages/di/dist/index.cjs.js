'use strict';

const injectable = (value, { kind, name }) => {
    if (kind === 'class') {
        return class extends value {
            constructor(...args) {
                // @ts-ignore
                super(...args);
                console.log(`constructing an instance of ${name} with arguments ${args.join(', ')}`);
            }
        };
    }
};

class Containers {
    constructor() {
        this.containers = [];
    }
    register(container) {
        this.containers.push(container);
    }
    resolve(id) {
        return this.containers.find((container) => container.id === id);
    }
}
const containers = new Containers();

class Container {
    constructor() {
        this.id = Symbol();
        this.stores = new Map();
    }
    register(store, props) {
        this.stores.set(store.name, new store(props));
    }
    resolve(store) {
        return this.stores.get(store.name);
    }
}

exports.Container = Container;
exports.Containers = Containers;
exports.containers = containers;
exports.injectable = injectable;
