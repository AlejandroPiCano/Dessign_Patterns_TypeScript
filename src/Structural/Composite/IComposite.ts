import { IComponent } from "./IComponent";

export abstract class IComposite implements IComponent{
    abstract operation(): void

    abstract add(component: IComponent): void

    abstract remove(component: IComponent): void
}