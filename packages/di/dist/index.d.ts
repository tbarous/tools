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

declare const ContainerContext: React.Context<symbol>;
declare const ContainerProvider: ({ id, children, }: {
    id: Container['id'];
    children: ReactNode;
}) => React.JSX.Element;

declare function useInjection(store: any): any;

export { Container, ContainerContext, ContainerProvider, Containers, containers, inject, injectable, useInjection };
