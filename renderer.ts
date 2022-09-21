enum NodeType {
    DIV = "div",
    P = "p",
}

interface TreeNode {
    type: NodeType;
    content: string | null;
    children: TreeNode[] | null;
}

const sampleTree: TreeNode = {
    type: NodeType.DIV,
    content: null,
    children: [
        { type: NodeType.P, content: "hello", children: null },
        { type: NodeType.P, content: "world", children: null },
        { type: NodeType.P, content: "!", children: null },
    ],
};

function render(node: TreeNode) {
    if (node.type === NodeType.P && node.content) {
        return `<${NodeType.P}>${node.content}</${NodeType.P}>`;
    }

    if (node.type === NodeType.DIV) {
        let innerContent: string = "";
        if (node.children) {
            node.children.forEach((node) => (innerContent += render(node)));
        }
        return `<${NodeType.DIV}>${innerContent}</${NodeType.DIV}>`;
    }
}

console.log(render(sampleTree)); // <div><p>hello</p><p>world</p><p>!</p></div>
