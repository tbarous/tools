import { observable, action, autorun } from 'mobx';
import React, { createContext, useContext } from 'react';

const injectable = (value, { kind, name }) => {
    if (kind === 'class') {
        const store = class extends value {
            constructor(...args) {
                super(...args);
                this.container = args === null || args === void 0 ? void 0 : args[0].container;
            }
        };
        Object.defineProperty(store, 'name', { value, writable: true });
        return store;
    }
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
  var target = ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
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

let Container = (() => {
    var _a, _Container_stores_accessor_storage;
    let _instanceExtraInitializers = [];
    let _stores_decorators;
    let _stores_initializers = [];
    let _stores_extraInitializers = [];
    let _register_decorators;
    return _a = class Container {
            get stores() { return __classPrivateFieldGet(this, _Container_stores_accessor_storage, "f"); }
            set stores(value) { __classPrivateFieldSet(this, _Container_stores_accessor_storage, value, "f"); }
            register(store, props) {
                if (this.stores.has(store.name))
                    return;
                this.stores.set(store.name, new store(Object.assign({ container: this }, props)));
            }
            resolve(store) {
                const resolved = this.stores.get(store.name);
                if (!resolved)
                    return;
                return resolved;
            }
            constructor() {
                this.id = (__runInitializers(this, _instanceExtraInitializers), Symbol());
                _Container_stores_accessor_storage.set(this, __runInitializers(this, _stores_initializers, new Map()));
                __runInitializers(this, _stores_extraInitializers);
            }
        },
        _Container_stores_accessor_storage = new WeakMap(),
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _stores_decorators = [observable];
            _register_decorators = [action];
            __esDecorate(_a, null, _stores_decorators, { kind: "accessor", name: "stores", static: false, private: false, access: { has: obj => "stores" in obj, get: obj => obj.stores, set: (obj, value) => { obj.stores = value; } }, metadata: _metadata }, _stores_initializers, _stores_extraInitializers);
            __esDecorate(_a, null, _register_decorators, { kind: "method", name: "register", static: false, private: false, access: { has: obj => "register" in obj, get: obj => obj.register }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();

let Containers = (() => {
    var _a, _Containers_containers_accessor_storage;
    let _instanceExtraInitializers = [];
    let _containers_decorators;
    let _containers_initializers = [];
    let _containers_extraInitializers = [];
    let _register_decorators;
    return _a = class Containers {
            get containers() { return __classPrivateFieldGet(this, _Containers_containers_accessor_storage, "f"); }
            set containers(value) { __classPrivateFieldSet(this, _Containers_containers_accessor_storage, value, "f"); }
            register(stores) {
                const container = new Container();
                for (const store of stores) {
                    container.register(store);
                }
                this.containers.push(container);
                return container.id;
            }
            resolve(id) {
                return this.containers.find((container) => container.id === id);
            }
            constructor() {
                _Containers_containers_accessor_storage.set(this, (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _containers_initializers, [])));
                __runInitializers(this, _containers_extraInitializers);
            }
        },
        _Containers_containers_accessor_storage = new WeakMap(),
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _containers_decorators = [observable];
            _register_decorators = [action];
            __esDecorate(_a, null, _containers_decorators, { kind: "accessor", name: "containers", static: false, private: false, access: { has: obj => "containers" in obj, get: obj => obj.containers, set: (obj, value) => { obj.containers = value; } }, metadata: _metadata }, _containers_initializers, _containers_extraInitializers);
            __esDecorate(_a, null, _register_decorators, { kind: "method", name: "register", static: false, private: false, access: { has: obj => "register" in obj, get: obj => obj.register }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const containers = new Containers();

const inject = (store) => {
    return function (value, { kind, name }) {
        return {
            init() {
                autorun(() => {
                    var _a, _b;
                    // @ts-ignore
                    const resolvedStore = (_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.resolve) === null || _b === void 0 ? void 0 : _b.call(_a, store);
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
    const container = containers.resolve(id);
    return container === null || container === void 0 ? void 0 : container.resolve(store);
}

export { Container, ContainerContext, ContainerProvider, Containers, containers, inject, injectable, useInjection };
