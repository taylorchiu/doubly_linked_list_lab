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
    // case 1: index is out of range (not possible)
    if (index > this.length || index < 0) {
        throw new RangeError
    } else if (this.head === null) { // case 2: list is empty
        this.head = this.tail;
        this.head.value = value;
    } else {
        var currentNode = this.head;
        var newNode = new Node(value);
        // case 3: insert at front of list
        if (index === 0) {
            this.unshift(value);
        }
        // case 4: insert somewhere in the middle
        for (var i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        newNode.setPrevious(currentNode);
        newNode.next.setPrevious(newNode);
        // case 5: insert at end of list
        if (index === this.length) {
            this.push(value);
        }
    }
};

List.prototype.getIndex = function(index) {
    if (index < 0 || index > this.length) {
        return undefined;
    } else {
        for (var i = 0; i < index - 1; i++) {
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
    ///////// what is wrong with this???? ///////////
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