// 给你一段数据结构，转化成真实的dom

const vnode2 = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [
        {
          tag: "A",
          children: [],
        },
      ],
    },
    {
      tag: "SPAN",
      children: [
        {
          tag: "A",
          children: [],
        },
        {
          tag: "A",
          children: [],
        },
      ],
    },
  ],
};

function render(vnode) {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  const element = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((attrsKey) => {
      element.setAttribue(key, vnode.arrts[arreKey]);
    });
  }
  if (vnode.children) {
    vnode.children.forEach((childNode) => {
      element.appendChild(render(childNode));
    });
  }
  return element;
}

console.log(render(vnode2));
