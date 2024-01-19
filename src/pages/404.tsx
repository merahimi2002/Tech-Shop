import { Container, Row, Col } from "react-bootstrap";
import { Url, UrlPicWithTwoFolderBack } from "../utilities/Url";

export function Page404() {
  return (
    <Container fluid className="p-0 Page404">
      <Row className="justify-content-center mt-5">
        <Col className="text-center mt-5" md={7} sm={10}>
          <div className="image-mask">
            <img
              src={UrlPicWithTwoFolderBack("Imgs/server-room.jpg")}
              alt="pic"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
