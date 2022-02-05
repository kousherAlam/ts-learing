interface DataStrcuture<T> {
    items: Array<T>;
    push: (data: T) => void;
    pop: () => T;
}

class Stack<T> implements DataStrcuture<T> {
    items: Array<T> = [];
    push(data: T) {
        this.items.push(data);
    }

    pop():T {
        const item =  this.items.pop() as T;
        return item;
    }

    peak():T {
        return this.items[this.items.length - 1];
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(1);
numberStack.peak();
numberStack.pop();
numberStack.peak();