import MenuList from "./menu-list";
import menu from "./data";
import './style.css'

export default function TreeView({ menus = menu }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}