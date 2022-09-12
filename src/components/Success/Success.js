import "./Success.scss";
import { Link } from "react-router-dom";

const Success = ({ orderId }) => {
  return (
    <div className="success">
      <div className="success__icon">
        <img src="/assets/icons/success.svg" alt="Success" />
      </div>
      <div className="success__text">
        <p>Orden generada correctamente.</p>
        <p>
          ID de su compra <span>{orderId}</span>
        </p>
      </div>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Success;
