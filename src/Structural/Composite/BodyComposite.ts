import { IComponent } from "./IComponent";
import { IComposite } from "./IComposite";

export class BodyComposite implements IComposite{

    components: IComponent[];

    constructor(){
        this.components = [];
    }

    operation(): void {
        this.components.forEach(component => {
            component.operation();
        });
    }
    
    add(component: IComponent): void{
      this.components.push(component);
    }

    remove(component: IComponent): void{
      this.components = this.components.filter(c => c !== component);
    }
}