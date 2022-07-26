export class Subscriber implements IObserver{

    userName : string = "";

    constructor(userName: string){
        this.userName = userName;
    }
    update(): void {
       console.log(`${this.userName}: New video upload`);
    }

}