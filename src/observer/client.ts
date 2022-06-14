import Subject from "./Subject";
import Observer from "./Observer";

let counter = 1;

const subject = new Subject();
const observer1 = new Observer(subject, counter++);
const observer2 = new Observer(subject, counter++);

subject.changeStateAndNotify('First Notification', [1,2,3]);

subject.unsubscribe(observer2);
subject.changeStateAndNotify('Second Notification', {A:1, B:2, C:3});

subject.subscribe(observer2);
subject.changeStateAndNotify('Third Notification', 'subscribed again');
