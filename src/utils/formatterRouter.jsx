import { dynamicRouter } from "@/router/routers";
let modules = import.meta.glob("@/views/**/*.jsx");
let modules2 = import.meta.glob("@/layout/**/*.jsx");
const components = { ...modules2, ...modules };

let data = JSON.parse(JSON.stringify(dynamicRouter));
export function formatterRouters() {
  const modifiedObject = {};
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      const newKey = key
        .replace("/src", "")
        .replace("/views", "")
        .replace("/index.jsx", "")
        .replace("/main.jsx", "");
      modifiedObject[newKey] = components[key];
    }
  }
  const recursionRouters = (data, num) => {
    num++;
    return data.map((item) => {
      if (item.hasOwnProperty("children"))
        item.children = recursionRouters(item.children);
      if (num === 1) {
        return {
          ...item,
          component: modifiedObject[`/layout/${item?.root}`],
          key: item.path,
        };
      }
      return {
        ...item,
        component: modifiedObject[item.path],
        key: item.path,
        label: item?.meta?.name || "",
        icon: item?.meta?.icon && (
          <div className={`iconfont ${item?.meta?.icon}`}></div>
        ),
      };
    });
  };
  return recursionRouters(data, 0);
}
