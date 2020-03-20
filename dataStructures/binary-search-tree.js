// BST's are just a collection of nodes that are linked together
// let's start by making the 'atom' of a binary search tree, a Node

// Using the starter code BinarySearchTree class, implement a search, 
// remove, and/or getSortedArray method within the class.
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left || null;
        this.right = right || null;
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = root || null;
    }


    insert(data) {
        let newNode = new Node(data);

        // if BST is empty, we want to make the new node the root
        if (this.root === null) {
            this.root = newNode;
        } else { // if BST is not empty, we want to find the right place to insert the node
            this.recursiveInsert(newNode, this.root);
        }
    }

    recursiveInsert(newNode, currentNode) {
        if (currentNode === null || newNode.data === currentNode.data) return; // BST's don't have duplicates
        if (newNode.data < currentNode.data) { // if newNode is smaller than current node we want to go to the left
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.recursiveInsert(newNode, currentNode.left);
            }
        }
        if (newNode.data > currentNode.data) { // if newNode is larger than current node we want to go to the right
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.recursiveInsert(newNode, currentNode.right);
            }
        }
    }

    search(data, node) {
        // write a function that searches the binary tree and returns the node containing data
        // *HINT*: recursion is your friend here

        // if node is null, data was not found, return null
        if (node === null) {
            return null;
        }


        // continue code here, check left or right based on whether 
        // data is more or less than current node's data
        // YOUR CODE HERE... else if...
        if (data === node.data) {
            return node;
        }

        if (data < node.data) {
            return this.search(data, node.left);
        }

        if (data > node.data) {
            return this.search(data, node.right);
        }
    }

    getSortedArray() {
        // write a function that converts our BST into a sorted array
        // return the array
        // example: if our bst looks like this:
        //         5
        //       /   \
        //     3       7
        //   /   \
        //  1     4
        // this.getSortedArrayFromBST() will return
        // [1, 2, 4, 5, 7];

        let sortedArray = [];
        this.inorder(node, sortedArray);
    }

    inorder(node, array)
        {
            if (node !== null) {
                let leftNode = this.inorder(node.left);
                array.push(rightNode.data);
                let rightNode = this.inorder(node.right);
                array.push(rightNode.data);
            }
        }

    remove(data) {
        // write a function that does the opposite of insert
        // find the node with data (if it exists) and remove it from the tree
    }

}

let root = new Node(5);
let bst = new BinarySearchTree(root);

bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
console.log(bst);

  // The above code makes the following tree
  //         5
  //       /   \
  //     3       7
  //   /   \
  //  1     4