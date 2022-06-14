
export default interface IObserver {
    notify(...args: unknown[]): void;
}