import { useState } from "react";
import { ModalBody } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export function AlartCustom(authentication: boolean) {
  const [smShow, setSmShow] = useState(false);
  return (
    <>
      {/* <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button> */}
      {() => setSmShow(authentication)}
      <Modal
        size="sm"
        centered
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <h5>Success</h5>
        </Modal.Header>
        <ModalBody>
          <p>Congratulation Your Task is Done</p>
        </ModalBody>
      </Modal>
    </>
  );
}
