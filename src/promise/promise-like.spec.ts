import { DummyPromise } from './promise-like';

describe('DummyPromise', () => {
    it('ctor', () => {

        let cond = true;

        const p = new DummyPromise(function(resolve, reject) {
            if (cond) {
                resolve(true);
            } else {
                reject('error');
            }
        });

        expect(p).toBeDefined();
    });
});
