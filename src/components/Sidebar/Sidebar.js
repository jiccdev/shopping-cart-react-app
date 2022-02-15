import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import IconCart from '../IconCart/IconCart';
import Image from 'react-bootstrap/Image';

import './Sidebar.css';

const Sidebar = ({ cart }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidebar">
      <span onClick={handleShow}>
        <IconCart cart={cart} />
      </span>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>List Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="li">
                <div className="item-section desc">{item.productGame}</div>
                <div className="item-section">{item.price}</div>
                <div className="item-section">
                  <Image
                    className="item-img"
                    roundedCircle
                    src={item.img}
                  ></Image>
                </div>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
