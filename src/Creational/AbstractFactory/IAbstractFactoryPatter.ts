interface IAbstractFactoryPattern<T, K>{
    createInstanceOfT(): T

    createInstanceOfK(): K
}