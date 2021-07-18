import classes from "./Main.module.css";

const Main = (props) => {
  const prevItemText = props.prevItem && props.prevItem.title;
  const nextItemText = props.nextItem && props.nextItem.title;
  return (
    <div className={classes.main}>
      <div>
        <span className={classes["title"]}>
          You are viewing{" "}
          <span className={classes["main-title"]}>Edge Master Plan</span>
        </span>
        <div className={classes["main-buttons"]}>
          <div className={classes.button}>
            <span className={classes["master-plan"]}>Master Plan</span>
          </div>
          <div className={classes.button}>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className={`${classes.button} ${classes.active}`}>
            <select className={classes.tower}>
              <option value="Tower">Tower</option>
              <option value="Tower1">Tower1</option>
              <option value="Tower2">Tower2</option>
              <option value="Tower3">Tower3</option>
              <option value="Tower4">Tower4</option>
            </select>
          </div>
          <div className={classes.button}>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className={`${classes.button}`}>
            <select className={classes.tower}>
              <option value="Tower">Floor</option>
              <option value="Tower1">Floor-1</option>
              <option value="Tower2">Floor-2</option>
              <option value="Tower3">Floor-3</option>
              <option value="Tower4">Floor-4</option>
            </select>
          </div>
          <div className={`${classes.button}`}>
            <select className={classes.tower}>
              <option value="Tower">Block</option>
              <option value="Tower1">Block-1</option>
              <option value="Tower2">Block-2</option>
              <option value="Tower3">Block-3</option>
              <option value="Tower4">Block-4</option>
            </select>
          </div>
          <div className={classes.filters}>
            <span>
              <i className="fas fa-filter"></i> Filters
            </span>
          </div>
        </div>
        <div className={classes["content-description"]}>
          <p>Select the unit you want to view on the floor map.</p>
          <p>Click on it to view details & availability</p>
        </div>
      </div>
      <div className={classes["layout-image"]}>
        <img src={`images//${props.currentItem.imgSrc}`} alt="menus-content" />
      </div>
      <div className={`${classes.button} ${classes["next-prev-buttons"]}`}>
        {prevItemText && (
          <button
            className={classes["master-plan"]}
            onClick={props.prevItemClick}
          >
            {prevItemText}
          </button>
        )}
        {nextItemText && (
          <button
            className={classes["master-plan"]}
            onClick={props.nextItemClick}
          >
            {nextItemText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
