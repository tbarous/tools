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

export { Container, Containers, containers, injectable };
