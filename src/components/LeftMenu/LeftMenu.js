import "./LeftMenu.scss";

const LeftMenu = ({ setShowLeftMenu }) => {
  return (
    <>
      <div className="overlay" onClick={() => setShowLeftMenu(false)}></div>
      <div className="left-menu">
        <div className="container"></div>
      </div>
    </>
  );
};

export default LeftMenu;
