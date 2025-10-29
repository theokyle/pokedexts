type CacheEntry<T> = {
    createdAt: number,
    val: T
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval
        this.#startReapLoop()
    } 

    add<T>(key: string, val: T) {
        this.#cache.set(key, {createdAt: Date.now(), val: val})
    }

    get<T>(key: string) {
        const cached = this.#cache.get(key);
        if (cached) {
            return cached.val as T;
        }
        return undefined;
    }

    #reap() {
        for(const [key,value] of this.#cache) {
            if (Date.now() - value.createdAt >= this.#interval) {
                this.#cache.delete(key)
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => {
            this.#reap()
        }, this.#interval)
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}