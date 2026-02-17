import { Modal, Image, Container, Row, Col, Button } from "react-bootstrap";
import "./FaceRecognitionModal.scss";
import { logo, padlockLocked, padlockUnlocked } from "../assets/images";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface FaceRecognitionModalProps {
  show: boolean;
  onHide: () => void;
  url?: string;
}

const FaceRecognitionModal = ({ show, onHide }: FaceRecognitionModalProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setAuthenticated(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setAuthenticated(false);
    }
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      className="face-recognition-modal"
    >
      <Modal.Header className="modal-header-custom flex-row-reverse">
        <Modal.Title className="d-flex justify-content-between align-items-start w-100 mb-5">
          <Button
            variant="link"
            className="close-icon-button p-0"
            onClick={onHide}
          >
            <FontAwesomeIcon icon={faX} size="lg" />
          </Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Container fluid className="d-flex flex-column align-items-center">
          <Row>
            <Col>
              <Image src={logo} alt="SECO Logo" className="logo mb-5" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-center mt-5">
                {authenticated ? (
                  <FormattedMessage
                    id="faceRecognitionModal.authenticatedUser"
                    defaultMessage="Authorization confirmed"
                  />
                ) : (
                  <FormattedMessage
                    id="faceRecognitionModal.authenticatingUser"
                    defaultMessage="Authenticating user"
                  />
                )}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="text-center mt-3">
                {authenticated ? (
                  <FormattedMessage
                    id="faceRecognitionModal.tenantRecognized"
                    defaultMessage="Tenant successfully recognized."
                  />
                ) : (
                  <FormattedMessage
                    id="faceRecognitionModal.checkingPermissions"
                    defaultMessage="Checking access permissions…"
                  />
                )}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={authenticated ? padlockUnlocked : padlockLocked}
                alt="Padlock"
                className="padlock-logo mt-5 mb-5"
              />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default FaceRecognitionModal;
