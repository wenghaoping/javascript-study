class EventEmitter {
    constructor () {
        super()
        this.events = {}
        this.onceEvents = {}  
    }

    on (type, cb) {
        if (!type || !cb) {
            return false
        }
        this.events[type] = this.events[type] || []
        this.events[type].push(cb)
    }
    
    emit (type) {
        if (!type) {
            return false
        }
        this.events[type] && this.events[type].forEach(eventCb => {
            eventCb.apply(this, [...arguments].slice(1))
        })
        this.onceEvents[type] && this.onceEvents[type].forEach(eventCb => {
            eventCb.apply(this, [...arguments].slice(1))
        })
        delete this.onceEvents[type]
    }

    off (type) {
        if (!type) {
            return false
        }
        delete this.events[type]
        delete this.onceEvents[type]
    }

    once (type, cb) {
        if (!type || !cb) {
            return false
        }
        this.onceEvents[type] = this.onceEvents[type] || []
        this.onceEvents[type].push(cb)
    }
}