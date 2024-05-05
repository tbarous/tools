import React, { ReactNode } from 'react';

declare const injectable: any;

declare class Container {
    id: symbol;
    accessor stores: Map<string, any>;
    register(store: any, props?: any): void;
    resolve(store: any): any;
}

declare class Containers {
    accessor containers: Container[];
    register(stores: any[]): symbol;
    resolve(id: symbol): Container | undefined;
}
declare const containers: Containers;

declare const inject: any;

declare const ContainerContext: React.Context<symbol>;
declare const ContainerProvider: ({ id, children, }: {
    id: Container['id'];
    children: ReactNode;
}) => React.JSX.Element;

declare function useInjection(store: any): any;

declare function createInjectableComponent(Component: any, stores: any): () => React.JSX.Element;

export { Container, ContainerContext, ContainerProvider, Containers, containers, createInjectableComponent, inject, injectable, useInjection };
