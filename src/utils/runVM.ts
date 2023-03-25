import { Observable } from 'rxjs';
import { useObservable } from './useObservable';

type UnknownVMStreams = {
    [key: string]: Observable<unknown>;
};

interface unknownVM {
    values: unknown;
    observers: UnknownVMStreams;
}
export const runVM = <A>(data: unknownVM): A => {
    Object.values(data.observers).forEach((o) => {
        useObservable(o);
    });
    return data.values as A;
};
