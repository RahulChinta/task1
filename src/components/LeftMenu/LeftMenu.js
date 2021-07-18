import MenuItem from "./MenuItem";
import classes from "./LeftMenu.module.css";

const LeftMenu = (props) => {
  const menuList = props.menuItems.map((item) => {
    return (
      <li key={`menu_list${item.id}`}>
        <MenuItem key={item.id} {...item} />
      </li>
    );
  });
  return (
    <div className={classes.menu}>
      <ul className={classes['menu-container']}>{menuList}</ul>
    </div>
  );
};

export default LeftMenu;
