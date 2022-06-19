
export default abstract class AbstractClass {
    stepOne(): void {

    }

    abstract stepTwo(): void;

    stepThree(): void {
        console.log('Step Three is a hook that prints this line by default.')
    }

    templateMethod() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }
}
