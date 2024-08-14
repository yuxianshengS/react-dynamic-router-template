import styles from "./index.module.less";
export default function DetailsPage() {
  const list = [
    { path: "home", mate: { name: "首页" } },
    { path: "home1", mate: { name: "详情" } },
    { path: "home2", mate: { name: "呵呵" } },
    { path: "home3", mate: { name: "哈哈" } },
    { path: "home4", mate: { name: "22" } },
    { path: "home4", mate: { name: "111" } },
    { path: "home4", mate: { name: "22" } },
    { path: "home4", mate: { name: "22" } },
    { path: "home4", mate: { name: "22" } },
    { path: "home4", mate: { name: "22" } },
  ];
  let num = list.length;
  return (
    <div className={styles.root}>
      <ul className="menu">
        {list.map((item, index) => (
          <li className="menu_item" key={index} style={{ zIndex: num-- }}>
            <a className="menu_item_path" href="#">
              {item.mate.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
