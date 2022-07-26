export class Singleton{

    private static singletonInstance: Singleton;

    private constructor(){}

    public static GetInstance(): Singleton {
        if(!Singleton.singletonInstance){
            Singleton.singletonInstance = new Singleton();
        }

        return Singleton.singletonInstance;
    }
}