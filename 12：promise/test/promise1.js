const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
            }
        }
        let reject = (value) => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.value = value;
            }
        }
        try {
            executor(reslove, reject)
        } catch (error) {
            reject(error)
        }
    }
    
    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.status === REJECTED) {
            onRejected(this.value);
        }
    }
}