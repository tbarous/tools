declare const injectable: any;

declare class Container {
    id: symbol;
    stores: Map<string, any>;
    register(store: any, props?: any): void;
    resolve(store: any): any;
}

declare class Containers {
    containers: Container[];
    register(container: Container): void;
    resolve(id: symbol): Container | undefined;
}
declare const containers: Containers;

type ClassAutoAccessorDecorator = (value: {
    get: () => unknown;
    set(value: unknown): void;
}, context: {
    kind: 'accessor';
    name: string | symbol;
    access: {
        get(): unknown;
        set(value: unknown): void;
    };
    static: boolean;
    private: boolean;
    addInitializer(initializer: () => void): void;
}) => {
    get?: () => unknown;
    set?: (value: unknown) => void;
    init?: (initialValue: unknown) => unknown;
} | void;

declare const inject: (store: any) => ClassAutoAccessorDecorator;

export { Container, Containers, containers, inject, injectable };
