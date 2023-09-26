import { useState } from "react";
import "./Inspo.scss";
import { NavLink } from "react-router-dom";
import { InspoRoutes } from "../DummyFiles/InspoRoutes";

const Inspo = () => {
  const [route, setRoute] = useState(InspoRoutes);
  return (
    <div className="inspo">
      <div className="wrapper">
        <div className="head">Looking for inspo? start here</div>
        <div className="box">
          {InspoRoutes &&
            InspoRoutes.map((data, id) => (
              <NavLink
                to={`/restaurants${data.route}`}
                activeClassName="active"
                key={id}
              >
                <div className="container">
                  <img width={100} key={id} src={data.img} alt="" />

                  <p>{data.title}</p>
                </div>
                <p className="bottom-title">{data.title}</p>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Inspo;
