interface treeNode {
    type: string;
    content: string | null;
    children: treeNode[] | null;
}

const sampleTree: treeNode = {
    type: "div",
    content: null,
    children: [
        { type: "p", content: "hello", children: null },
        { type: "p", content: "world", children: null },
        { type: "p", content: "!", children: null },
    ],
};

function render(node: treeNode) {
    if (node.type === "p" && node.content) {
        return `<p>${node.content}</p>`;
    }

    if (node.type === "div") {
        let innerContent: string = "";
        if (node.children) {
            node.children.forEach((node) => (innerContent += render(node)));
        }
        return `<div>${innerContent}</div>`;
    }
}

console.log(render(sampleTree)); // <div><p>hello</p><p>world</p><p>!</p></div> 
