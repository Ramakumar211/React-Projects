import css from "./container.module.css";
const Container = ({ children }) => {
  return <div className={css.wholeContainer}>{children}</div>;
};
export default Container;
