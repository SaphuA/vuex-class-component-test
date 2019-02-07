export class Client {
    public readData() {
        return new Promise<number>((resolve) => setTimeout(() => {
            resolve(42);
        }, 1000));
    }
}
