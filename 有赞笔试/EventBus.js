class EventBus {
    constructor() {
        this._events = {};
    }
    on(type, fn) {
        if (Array.isArray(type)) {
            for (let i = 0; i < type.length; i++) {
                const e = type[i];
                this.on(e, fn);
            }
        } else {
            const event = this._events[type];
            if (event) {
                event.push(fn);
            } else {
                this._events[type] = [fn];
            }
        }
    }
    once(type, fn) {
        if (Array.isArray(type)) {
            for (let i = 0; i < type.length; i++) {
                const e = type[i];
                this.once(e, fn);
            }
        } else {
            const self = this;
            function hander() {
                self.off(type, fn);
                fn.apply(this, arguments);
            }
            this.on(type, hander);
        }
    }
    emit(type, ...ars) {
        if (Array.isArray(type)) {
            for (let i = 0; i < type.length; i++) {
                const e = type[i];
                this.emit(e);
            }
        } else {
            const events = this._events[type];
            if (events) {
                for (let i = 0; i < events.length; i++) {
                    const e = events[i];
                    e.apply(this, ars);
                }
            }
        }
    }
    off(type, fn) {
        if (!type) {
            this._events = [];
        }
        if (Array.isArray(type)) {
            type.forEach(e => {
                this.off(e, fn);
            });
        } else {
            if (!fn) {
                this._events[type] = []; 
            }
            const events = this._events[type];
            let index = events.findIndex(f => f === fn);
            while (index !== -1) {
                events.splice(index, 1);
                index = events.findIndex(f => f === fn);
            }
        }
    }
}