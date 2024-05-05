import React, { ReactNode, FunctionComponent, ReactElement } from 'react';

declare class Container {
    accessor id: symbol;
    accessor stores: IStoresMap;
    accessor props: any;
    registerStores(stores: IStoresToBeInjected, props: any): void;
    resolveStore(store: IStoreClassOrDetailedStoreOrString): IStore | undefined;
}

interface IDecoratorContext {
    kind: 'class' | 'accessor';
    name: string | undefined;
    addInitializer(initializer: () => void): void;
}
interface IStore {
    container: Container;
    name: string;
    [key: string]: any;
}
type IStoreClass = {
    new (args: {
        container: Container;
        props: any;
    }): any;
};
interface IDetailedStore {
    store?: IStoreClass;
    name: string;
}
type IStoreClassOrDetailedStoreOrString = IStoreClass | IDetailedStore | string;
type IStoresMap = Map<string, IStore>;
type IStoresToBeInjected = IStoreClass[] | {
    store: IStoreClass;
    name: string;
}[];

declare const injectable: (value: IStoreClass, { kind, name: n }: IDecoratorContext) => {
    new (args: {
        container: Container;
        props: any;
    }): {
        [x: string]: any;
    };
} | undefined;

declare class Root {
    accessor containers: Container[];
    accessor globalContainer: Container;
    createContainer(stores: IStoresToBeInjected, props: any): Container;
    resolveContainer(id: symbol): Container | undefined;
}
declare const root: Root;

declare const inject: (store: string | IStoreClass) => (_: unknown, { kind, name }: IDecoratorContext) => {
    init(): void;
} | undefined;

declare const ContainerContext: React.Context<symbol>;
declare const ContainerProvider: ({ id, children, }: {
    id: Container['id'];
    children: ReactNode;
}) => React.JSX.Element;

declare function useInjection(store: IStoreClassOrDetailedStoreOrString): IStore | undefined;

declare const createInjectableComponent: <P>(Component: FunctionComponent, stores: IStoresToBeInjected, props: P) => (() => ReactElement);

declare function useGlobalInjection(store: IStoreClassOrDetailedStoreOrString): IStore | undefined;

declare const injectGlobal: any;

declare const App: (() => React.JSX.Element) & {
    displayName: string;
};

declare class ProductsStore {
    accessor name: string;
    setName(name: string): void;
}

declare const Profile: (() => React.JSX.Element) & {
    displayName: string;
};

declare enum Stores {
    MY_CUSTOM_PRODUCTS_STORE = "myProductsStore"
}

declare class UsersStore {
    accessor name: string;
    accessor productsStore: ProductsStore;
    accessor productsStore2: ProductsStore;
    accessor productsStore3: ProductsStore;
    constructor(props: any);
    setName(name: string): void;
}

export { App, Container, ContainerContext, ContainerProvider, ProductsStore, Profile, Root, Stores, UsersStore, createInjectableComponent, inject, injectGlobal, injectable, root, useGlobalInjection, useInjection };
