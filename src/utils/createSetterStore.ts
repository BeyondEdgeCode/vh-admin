import {BehaviorSubject} from "rxjs";

export const createSetterStore =
    <A>(store$: BehaviorSubject<A>) =>
        (newValue: A) => {
            store$.next(newValue);
        };
