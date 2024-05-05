import { observable, action, autorun } from 'mobx';
import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react-lite';

const injectable = (value, { kind, name: n }) => {
    if (kind !== 'class')
        return;
    const store = class extends value {
        constructor(args) {
            super(args);
            this.container = args.container;
        }
    };
    Object.defineProperty(store, 'name', { value: n, writable: true });
    return store;
};

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || _typeof(result) !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __setFunctionName(f, name, prefix) {
  if (_typeof(name) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: name
  });
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const isDetailedStore = (store) => 'store' in store && 'name' in store;
const getDetailedStore = (store) => {
    if (typeof store === 'string') {
        return { name: store };
    }
    if (!isDetailedStore(store)) {
        return { store, name: store.name };
    }
    return store;
};

let Container = (() => {
    var _a, _Container_id_accessor_storage, _Container_stores_accessor_storage, _Container_props_accessor_storage;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _stores_decorators;
    let _stores_initializers = [];
    let _stores_extraInitializers = [];
    let _props_decorators;
    let _props_initializers = [];
    let _props_extraInitializers = [];
    let _registerStores_decorators;
    return _a = class Container {
            get id() { return __classPrivateFieldGet(this, _Container_id_accessor_storage, "f"); }
            set id(value) { __classPrivateFieldSet(this, _Container_id_accessor_storage, value, "f"); }
            get stores() { return __classPrivateFieldGet(this, _Container_stores_accessor_storage, "f"); }
            set stores(value) { __classPrivateFieldSet(this, _Container_stores_accessor_storage, value, "f"); }
            get props() { return __classPrivateFieldGet(this, _Container_props_accessor_storage, "f"); }
            set props(value) { __classPrivateFieldSet(this, _Container_props_accessor_storage, value, "f"); }
            registerStores(stores, props) {
                for (const store of stores) {
                    const { name, store: Store } = getDetailedStore(store);
                    if (this.stores.has(name) || !Store)
                        return;
                    const instance = new Store(Object.assign({ container: this }, props));
                    this.stores.set(name, instance);
                }
            }
            resolveStore(store) {
                const { name } = getDetailedStore(store);
                if (!this.stores.has(name))
                    return;
                return this.stores.get(name);
            }
            constructor() {
                _Container_id_accessor_storage.set(this, (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, Symbol())));
                _Container_stores_accessor_storage.set(this, (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _stores_initializers, new Map())));
                _Container_props_accessor_storage.set(this, (__runInitializers(this, _stores_extraInitializers), __runInitializers(this, _props_initializers, void 0)));
                __runInitializers(this, _props_extraInitializers);
            }
        },
        _Container_id_accessor_storage = new WeakMap(),
        _Container_stores_accessor_storage = new WeakMap(),
        _Container_props_accessor_storage = new WeakMap(),
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [observable];
            _stores_decorators = [observable];
            _props_decorators = [observable];
            _registerStores_decorators = [action];
            __esDecorate(_a, null, _id_decorators, { kind: "accessor", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(_a, null, _stores_decorators, { kind: "accessor", name: "stores", static: false, private: false, access: { has: obj => "stores" in obj, get: obj => obj.stores, set: (obj, value) => { obj.stores = value; } }, metadata: _metadata }, _stores_initializers, _stores_extraInitializers);
            __esDecorate(_a, null, _props_decorators, { kind: "accessor", name: "props", static: false, private: false, access: { has: obj => "props" in obj, get: obj => obj.props, set: (obj, value) => { obj.props = value; } }, metadata: _metadata }, _props_initializers, _props_extraInitializers);
            __esDecorate(_a, null, _registerStores_decorators, { kind: "method", name: "registerStores", static: false, private: false, access: { has: obj => "registerStores" in obj, get: obj => obj.registerStores }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();

let Root = (() => {
    var _a, _Root_containers_accessor_storage, _Root_globalContainer_accessor_storage;
    let _instanceExtraInitializers = [];
    let _containers_decorators;
    let _containers_initializers = [];
    let _containers_extraInitializers = [];
    let _globalContainer_decorators;
    let _globalContainer_initializers = [];
    let _globalContainer_extraInitializers = [];
    let _createContainer_decorators;
    return _a = class Root {
            get containers() { return __classPrivateFieldGet(this, _Root_containers_accessor_storage, "f"); }
            set containers(value) { __classPrivateFieldSet(this, _Root_containers_accessor_storage, value, "f"); }
            get globalContainer() { return __classPrivateFieldGet(this, _Root_globalContainer_accessor_storage, "f"); }
            set globalContainer(value) { __classPrivateFieldSet(this, _Root_globalContainer_accessor_storage, value, "f"); }
            createContainer(stores, props) {
                const container = new Container();
                container.registerStores(stores, props);
                this.containers.push(container);
                return container;
            }
            resolveContainer(id) {
                return this.containers.find((container) => container.id === id);
            }
            constructor() {
                _Root_containers_accessor_storage.set(this, (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _containers_initializers, [])));
                _Root_globalContainer_accessor_storage.set(this, (__runInitializers(this, _containers_extraInitializers), __runInitializers(this, _globalContainer_initializers, new Container())));
                __runInitializers(this, _globalContainer_extraInitializers);
            }
        },
        _Root_containers_accessor_storage = new WeakMap(),
        _Root_globalContainer_accessor_storage = new WeakMap(),
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _containers_decorators = [observable];
            _globalContainer_decorators = [observable];
            _createContainer_decorators = [action];
            __esDecorate(_a, null, _containers_decorators, { kind: "accessor", name: "containers", static: false, private: false, access: { has: obj => "containers" in obj, get: obj => obj.containers, set: (obj, value) => { obj.containers = value; } }, metadata: _metadata }, _containers_initializers, _containers_extraInitializers);
            __esDecorate(_a, null, _globalContainer_decorators, { kind: "accessor", name: "globalContainer", static: false, private: false, access: { has: obj => "globalContainer" in obj, get: obj => obj.globalContainer, set: (obj, value) => { obj.globalContainer = value; } }, metadata: _metadata }, _globalContainer_initializers, _globalContainer_extraInitializers);
            __esDecorate(_a, null, _createContainer_decorators, { kind: "method", name: "createContainer", static: false, private: false, access: { has: obj => "createContainer" in obj, get: obj => obj.createContainer }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const root = new Root();

const inject = (store) => {
    return function (_, { kind, name }) {
        if (kind !== 'accessor')
            return;
        return {
            init() {
                autorun(() => {
                    var _a;
                    // @ts-ignore
                    const resolvedStore = (_a = this === null || this === void 0 ? void 0 : this.container) === null || _a === void 0 ? void 0 : _a.resolveStore(store);
                    if (resolvedStore) {
                        // @ts-ignore
                        this[name] = resolvedStore;
                    }
                });
            },
        };
    };
};

const ContainerContext = createContext(Symbol());
const ContainerProvider = ({ id, children, }) => {
    return (React.createElement(ContainerContext.Provider, { value: id }, children));
};

function useInjection(store) {
    const id = useContext(ContainerContext);
    const container = root.resolveContainer(id);
    if (!container)
        return;
    return container.resolveStore(store);
}

const createInjectableComponent = (Component, stores, props) => () => (React.createElement(ContainerProvider, { id: root.createContainer(stores, props).id },
    React.createElement(Component, null)));

function useGlobalInjection(store) {
    return root.globalContainer.resolveStore(store);
}

const injectGlobal = (store, storeName) => {
    return function (value, { kind, name }) {
        return {
            init() {
                autorun(() => {
                    var _a;
                    if (!((_a = root === null || root === void 0 ? void 0 : root.globalContainer) === null || _a === void 0 ? void 0 : _a.resolveStore))
                        return;
                    // @ts-ignore
                    this[name] = root.globalContainer.resolveStore(storeName || store);
                });
            },
        };
    };
};

// @ts-ignore
let ProductsStore = (() => {
    var _ProductsStore_name_accessor_storage;
    let _classDecorators = [injectable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _setName_decorators;
    _classThis = class {
        get name() { return __classPrivateFieldGet(this, _ProductsStore_name_accessor_storage, "f"); }
        set name(value) { __classPrivateFieldSet(this, _ProductsStore_name_accessor_storage, value, "f"); }
        setName(name) {
            this.name = name;
        }
        constructor() {
            _ProductsStore_name_accessor_storage.set(this, (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, '')));
            __runInitializers(this, _name_extraInitializers);
        }
    };
    _ProductsStore_name_accessor_storage = new WeakMap();
    __setFunctionName(_classThis, "ProductsStore");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [observable];
        _setName_decorators = [action];
        __esDecorate(_classThis, null, _name_decorators, { kind: "accessor", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(_classThis, null, _setName_decorators, { kind: "method", name: "setName", static: false, private: false, access: { has: obj => "setName" in obj, get: obj => obj.setName }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return _classThis;
})();

var Stores;
(function (Stores) {
    Stores["MY_CUSTOM_PRODUCTS_STORE"] = "myProductsStore";
})(Stores || (Stores = {}));

// @ts-ignore
let UsersStore = (() => {
    var _UsersStore_name_accessor_storage, _UsersStore_productsStore_accessor_storage, _UsersStore_productsStore2_accessor_storage, _UsersStore_productsStore3_accessor_storage;
    let _classDecorators = [injectable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _productsStore_decorators;
    let _productsStore_initializers = [];
    let _productsStore_extraInitializers = [];
    let _productsStore2_decorators;
    let _productsStore2_initializers = [];
    let _productsStore2_extraInitializers = [];
    let _productsStore3_decorators;
    let _productsStore3_initializers = [];
    let _productsStore3_extraInitializers = [];
    let _setName_decorators;
    _classThis = class {
        get name() { return __classPrivateFieldGet(this, _UsersStore_name_accessor_storage, "f"); }
        set name(value) { __classPrivateFieldSet(this, _UsersStore_name_accessor_storage, value, "f"); }
        // @ts-ignore
        get productsStore() { return __classPrivateFieldGet(this, _UsersStore_productsStore_accessor_storage, "f"); }
        set productsStore(value) { __classPrivateFieldSet(this, _UsersStore_productsStore_accessor_storage, value, "f"); }
        // @ts-ignore
        get productsStore2() { return __classPrivateFieldGet(this, _UsersStore_productsStore2_accessor_storage, "f"); }
        set productsStore2(value) { __classPrivateFieldSet(this, _UsersStore_productsStore2_accessor_storage, value, "f"); }
        // @ts-ignore
        get productsStore3() { return __classPrivateFieldGet(this, _UsersStore_productsStore3_accessor_storage, "f"); }
        set productsStore3(value) { __classPrivateFieldSet(this, _UsersStore_productsStore3_accessor_storage, value, "f"); }
        constructor(props) {
            _UsersStore_name_accessor_storage.set(this, (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, ''
            // @ts-ignore
            )));
            _UsersStore_productsStore_accessor_storage.set(this, (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _productsStore_initializers, void 0)));
            _UsersStore_productsStore2_accessor_storage.set(this, (__runInitializers(this, _productsStore_extraInitializers), __runInitializers(this, _productsStore2_initializers, void 0)));
            _UsersStore_productsStore3_accessor_storage.set(this, (__runInitializers(this, _productsStore2_extraInitializers), __runInitializers(this, _productsStore3_initializers, void 0)));
            __runInitializers(this, _productsStore3_extraInitializers);
            this.name = props.name;
        }
        setName(name) {
            this.name = name;
            this.productsStore.setName('Products name');
            this.productsStore2.setName('Products name custom');
            this.productsStore3.setName('Products name global');
        }
    };
    _UsersStore_name_accessor_storage = new WeakMap();
    _UsersStore_productsStore_accessor_storage = new WeakMap();
    _UsersStore_productsStore2_accessor_storage = new WeakMap();
    _UsersStore_productsStore3_accessor_storage = new WeakMap();
    __setFunctionName(_classThis, "UsersStore");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [observable];
        _productsStore_decorators = [inject(ProductsStore)];
        _productsStore2_decorators = [inject(Stores.MY_CUSTOM_PRODUCTS_STORE)];
        _productsStore3_decorators = [injectGlobal(ProductsStore)];
        _setName_decorators = [action];
        __esDecorate(_classThis, null, _name_decorators, { kind: "accessor", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(_classThis, null, _productsStore_decorators, { kind: "accessor", name: "productsStore", static: false, private: false, access: { has: obj => "productsStore" in obj, get: obj => obj.productsStore, set: (obj, value) => { obj.productsStore = value; } }, metadata: _metadata }, _productsStore_initializers, _productsStore_extraInitializers);
        __esDecorate(_classThis, null, _productsStore2_decorators, { kind: "accessor", name: "productsStore2", static: false, private: false, access: { has: obj => "productsStore2" in obj, get: obj => obj.productsStore2, set: (obj, value) => { obj.productsStore2 = value; } }, metadata: _metadata }, _productsStore2_initializers, _productsStore2_extraInitializers);
        __esDecorate(_classThis, null, _productsStore3_decorators, { kind: "accessor", name: "productsStore3", static: false, private: false, access: { has: obj => "productsStore3" in obj, get: obj => obj.productsStore3, set: (obj, value) => { obj.productsStore3 = value; } }, metadata: _metadata }, _productsStore3_initializers, _productsStore3_extraInitializers);
        __esDecorate(_classThis, null, _setName_decorators, { kind: "method", name: "setName", static: false, private: false, access: { has: obj => "setName" in obj, get: obj => obj.setName }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return _classThis;
})();

const App = observer(() => {
    const userStore = useInjection(UsersStore);
    const productsStore = useInjection(ProductsStore);
    const productsStore2 = useInjection(Stores.MY_CUSTOM_PRODUCTS_STORE);
    useGlobalInjection(ProductsStore);
    return (React.createElement("div", null, userStore === null || userStore === void 0 ? void 0 :
        userStore.name,
        React.createElement("br", null), productsStore === null || productsStore === void 0 ? void 0 :
        productsStore.name,
        React.createElement("br", null), productsStore2 === null || productsStore2 === void 0 ? void 0 :
        productsStore2.name,
        React.createElement("br", null),
        React.createElement("button", { onClick: () => userStore === null || userStore === void 0 ? void 0 : userStore.setName('Joe') }, "Change name")));
});

const Profile = observer(() => {
    const productsStore3 = useGlobalInjection(ProductsStore);
    return React.createElement("div", null, productsStore3 === null || productsStore3 === void 0 ? void 0 : productsStore3.name);
});

export { App, Container, ContainerContext, ContainerProvider, ProductsStore, Profile, Root, Stores, UsersStore, createInjectableComponent, inject, injectGlobal, injectable, root, useGlobalInjection, useInjection };
