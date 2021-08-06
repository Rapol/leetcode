function traverse(node, level, result) {
    if(node === null) {
        return;
    }
    if(!result[level]) {
        result[level] = [];
    }
    result[level].push(node.val);
    for(let i = 0; i < node.children.length; i++) {
        traverse(node.children[i], level + 1, result);
    }
}

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    traverse(root, 0, result);
    return result;
};