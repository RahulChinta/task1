import "./MenuItem.css";

const MenuItem = (props) => {
  const isActive = props.isActive ? "active" : "";
  const progressLineActive = props.isPathActive ? "active" : "";
  return (
    <div className="menu-items">
      <div className="content">
        <div className={`title ${isActive}`}>{props.title}</div>
        <div className={`description ${isActive}`}>{props.description}</div>
      </div>
      <div className={`avatar ${isActive}`}>
        <i className={`fa fa-${props.iconName} fa-2x`} aria-hidden="true"></i>
      </div>
      <div className={`progress-line ${progressLineActive}`}></div>
      <div className="circles">
        <div className={isActive}></div>
      </div>
    </div>
  );
};

export default MenuItem;
