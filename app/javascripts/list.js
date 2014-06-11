var Node = require("./node.js");

function List() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

List.prototype.push = function(value) {
    if (this.head === null) {
        this.head = new Node(value);
        this.tail = this.head;
    } else {
        var newNode = new Node(value);
        var oldTail = this.tail;
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.tail.setPrevious(oldTail);
    }
    this.length += 1;
    return this;
};

List.prototype.pop = function() {
    if (this.head === null) {
        return null;
    } else if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.previous();
        this.tail.next = null;
    }
}

List.prototype.shift = function() {
    // removes the first value and returns it
    if (this.head === null) {
        return null;
    } else if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.setPrevious(null);
    }
};

List.prototype.insert = function(index, value) {
    if (index > this.length || index < 0) {
        throw new RangeError
    } else if (this.head === null) {
        this.head = this.tail = new Node(value);
        this.head.value = value;
    } else if (index === 0) {
        this.unshift(value)
    } else if (index === this.length) {
        this.push(value);
    } else {
        var currentNode = this.head;
        var newNode = new Node(value);

        for (var i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next
        currentNode.next = newNode;
        newNode.setPrevious(currentNode);
        newNode.next.setPrevious(newNode);
    }
    return this;
};

List.prototype.getIndex = function(index) {
    if (index < 0 || index > this.length) {
        return undefined;
    } else {
        var node = this.head;
        for (var i = 0; i < index; i++) {
            node = this.head.next;
        }
        return node.value;
    }
};

List.prototype.setIndex = function(index, value) {

};

List.prototype.unshift = function(value) {
    // adds a value to the front
    var newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
        this.tail = this.head;
        newNode.next = null;
        this.tail.setPrevious(null);
    } else {
        var oldHead = this.head;
        this.head = newNode;
        this.head.next = oldHead;
        oldHead.setPrevious(newNode);
    }
};


try {
    module.exports = List;
} catch (e) {

}




// // singly linked lists:
// List.prototype.push = function(value) {
//     if (this.head === null) {
//         this.head = new Node(value);
//         this.tail = this.head;
//     } else {
//         var newNode = new Node(value);
//         this.tail.next = newNode;
//         this.tail = newNode;
//     }
// };