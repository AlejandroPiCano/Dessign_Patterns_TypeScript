import { ISingletonPattern } from "./ISingletonPattern";

export class Singleton implements ISingletonPattern{

    private static singletonInstance: Singleton;

    private constructor(){}

    public GetInstance(): Singleton {
        if(!Singleton.singletonInstance){
            Singleton.singletonInstance = new Singleton();
        }

        return Singleton.singletonInstance;
    }
}