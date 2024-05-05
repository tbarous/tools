'use strict';

const injectable = (value, { kind, name }) => {
    if (kind === 'class') {
        return class extends value {
            constructor(...args) {
                // @ts-ignore
                super(...args);
                console.log({ args });
                this.container = args[0];
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
        this.stores.set(store.name, new store(Object.assign({ container: this }, props)));
    }
    resolve(store) {
        return this.stores.get(store.name);
    }
}

const inject = (store) => {
    return function (value, { kind, name }) {
        if (kind === 'accessor') {
            return {
                init() {
                    // @ts-ignore
                    const resolvedStore = this.container.resolve(store);
                    console.log({ resolvedStore });
                    return resolvedStore;
                },
            };
        }
    };
};

exports.Container = Container;
exports.Containers = Containers;
exports.containers = containers;
exports.inject = inject;
exports.injectable = injectable;
