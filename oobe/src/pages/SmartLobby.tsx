import { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { logo } from "../assets/images";
import carImg from "../assets/images/car.jpg";
import "./SmartLobby.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const chats = [
  { id: 1, name: "Administrator", msg: "Condominium meeting tomorrow.", avatar: "https://i.pravatar.cc/40?img=12", time: "2d" },
  { id: 2, name: "Hall Doorman", msg: "Your package has arrived.", avatar: "https://i.pravatar.cc/40?img=15", time: "4d" },
  { id: 3, name: "Emily Carter", msg: "Please review the documents.", avatar: "https://i.pravatar.cc/40?img=17", time: "1d" },
  { id: 4, name: "Security", msg: "Elevator maintenance tomorrow.", avatar: "https://i.pravatar.cc/40?img=20", time: "3d" },
  { id: 5, name: "Maintenance", msg: "Water outage from 2-4 PM.", avatar: "https://i.pravatar.cc/40?img=25", time: "5h" },
  { id: 6, name: "Janitor", msg: "Cleaning schedule updated.", avatar: "https://i.pravatar.cc/40?img=28", time: "6h" },
  { id: 7, name: "Reception", msg: "Visitor at the lobby.", avatar: "https://i.pravatar.cc/40?img=30", time: "2d" },
  { id: 8, name: "Admin", msg: "New notice uploaded.", avatar: "https://i.pravatar.cc/40?img=32", time: "1d" },
  { id: 9, name: "HR", msg: "Payroll has been processed.", avatar: "https://i.pravatar.cc/40?img=34", time: "3d" },
  { id: 10, name: "Manager", msg: "Meeting rescheduled.", avatar: "https://i.pravatar.cc/40?img=36", time: "4d" },
  { id: 11, name: "Janitor", msg: "Trash collection updated.", avatar: "https://i.pravatar.cc/40?img=38", time: "5h" },
  { id: 12, name: "Reception", msg: "Parcel delivered.", avatar: "https://i.pravatar.cc/40?img=40", time: "2d" },
  { id: 13, name: "Admin", msg: "Documents approved.", avatar: "https://i.pravatar.cc/40?img=42", time: "1d" },
  { id: 14, name: "HR", msg: "Policy updated.", avatar: "https://i.pravatar.cc/40?img=44", time: "3d" },
  { id: 15, name: "Security", msg: "Gate closed for maintenance.", avatar: "https://i.pravatar.cc/40?img=46", time: "4d" },
  { id: 16, name: "Manager", msg: "Event postponed.", avatar: "https://i.pravatar.cc/40?img=48", time: "2h" },
];

export default function SmartLobby() {
  const [page, setPage] = useState(0);
  const chatsPerPage = 4;
  const totalPages = Math.ceil(chats.length / chatsPerPage);

  return (
    <Container fluid className="smart-lobby-container min-vh-100 d-flex flex-column p-3">
      {/* Header */}
      <Row className="justify-content-center mb-4">
        <Col xs={2} sm={6} md="auto" className="d-flex flex-column align-items-center justify-content-center h-100">
          <NavLink to="/smart-building" className="nav-link">
            <Button className="close-icon-button text-white btn-dark">
              <FontAwesomeIcon icon={faX} className="text-white" />
            </Button>
          </NavLink>
        </Col>
        <Col className="text-center">
          <Image src={logo} alt="Logo" className="logo" />
        </Col>
      </Row>

      <Row className="flex-grow-1 gx-4 gy-4 h-100">
        {/* Left Column */}
        <Col lg={3} className="d-flex flex-column gap-4 h-100">
          {/* Profile Panel */}
          <div className="panel profile-panel text-center border-2 flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <Image src="https://i.pravatar.cc/120?img=47" className="avatar mb-3" />
              <h5 className="fw-bold text-uppercase">
                <FormattedMessage id="pages.SmartLobby.profile.name" defaultMessage="EMILY CARTER" />
              </h5>
              <div className="profile-info mt-3">
                <div className="row-item d-flex justify-content-between align-items-center">
                  <span>
                    <FormattedMessage id="pages.SmartLobby.profile.inbox" defaultMessage="INBOX MESSAGES" />
                  </span>
                  <span className="position-relative">
                    <span className="value">2</span>
                    <span className="badge-dot" />
                  </span>
                </div>
                <div className="row-item d-flex justify-content-between align-items-center">
                  <span>
                    <FormattedMessage id="pages.SmartLobby.profile.nextRent" defaultMessage="NEXT RENT PAYMENT" />
                  </span>
                  <span className="value">10/08/2025</span>
                </div>
                <div className="row-item d-flex justify-content-between align-items-center">
                  <span>
                    <FormattedMessage id="pages.SmartLobby.profile.nextMeeting" defaultMessage="NEXT CONDO MEETING" />
                  </span>
                  <span className="muted">
                    <FormattedMessage id="pages.SmartLobby.profile.unscheduled" defaultMessage="Unscheduled" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Locker Panel */}
          <div className="panel locker-panel text-center border-2 flex-grow-1 d-flex flex-column justify-content-between">
            <Row className="align-items-center mb-3">
              <Col>
                <Row className="align-items-center justify-content-between">
                  <Col>
                    <FormattedMessage id="pages.SmartLobby.locker.title" defaultMessage="SMART LOCKER" />
                  </Col>
                  <Col xs="auto" className="position-relative">
                    <span className="position-relative d-inline-block">1 Package</span>
                    <span className="badge-dot" />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col className="text-end">
                <p className="locker-text mb-0">
                  <FormattedMessage
                    id="pages.SmartLobby.locker.description"
                    defaultMessage="Scan the QR code with the Condominium App to unlock your smart locker."
                  />
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs="auto">
                <Image src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=LOCKER" className="qr" />
              </Col>
            </Row>
          </div>
        </Col>

        {/* Right Column */}
        <Col lg={9} className="d-flex flex-column gap-4 h-100">
          {/* Car Panel */}
          <div className="panel car-panel border-2 d-flex position-relative">
            <div className="car-left position-relative">
              <Row className="align-items-center car-item-wrapper">
                <Col xs="auto" className="d-flex flex-column white-dots">
                  <span className="side"></span>
                  <span className="side"></span>
                  <span className="side"></span>
                  <span className="side"></span>
                </Col>
                <Col className="car-text d-flex flex-column justify-content-center">
                  <h2>
                    <FormattedMessage id="pages.SmartLobby.car.title" defaultMessage="CAR" />
                  </h2>
                  <div className="underline" />
                </Col>
              </Row>
              <p className="mt-5 text-white price-text">
                <FormattedMessage id="pages.SmartLobby.car.price" defaultMessage="Starting from {price}" values={{ price: "17.000€" }} />
              </p>
            </div>
            <div className="car-right d-flex justify-content-center align-items-center position-relative">
              <Image src={carImg} />
            </div>
            <div className="slider-dots">
              <span className="bg-light"></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Messages + Weather Row */}
          <Row className="flex-grow-1 gx-4 gy-4 h-100">
            {/* Messages Column */}
            <Col lg={8} className="d-flex flex-column h-100">
              <div className="panel messages-panel border-2 d-flex flex-column justify-content-between h-100">
                <div className="d-flex flex-column flex-grow-1">
                  <h6 className="mb-3">
                    <FormattedMessage id="pages.SmartLobby.messages.title" defaultMessage="Messages" />
                  </h6>
                  <div className="chat-slider-wrapper flex-grow-1" style={{ overflow: "hidden" }}>
                    <div
                      className="chat-slider"
                      style={{
                        display: "flex",
                        transform: `translateX(-${page * 100}%)`,
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <div key={idx} style={{ flex: "0 0 100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          {chats.slice(idx * chatsPerPage, (idx + 1) * chatsPerPage).map((chat) => (
                            <Row key={chat.id} className="message-row align-items-center mb-2">
                              <Col xs="auto">
                                <Image src={chat.avatar} roundedCircle />
                              </Col>
                              <Col>
                                <b>{chat.name}</b>
                                <p>{chat.msg}</p>
                              </Col>
                              <Col xs="auto" className="position-relative">
                                <span className="position-relative d-inline-block">{chat.time}</span>
                                <span className="badge-dot" />
                              </Col>
                            </Row>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`pagination-dot ${page === idx ? "active" : ""}`}
                      onClick={() => setPage(idx)}
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: page === idx ? "#fff" : "rgba(255,255,255,0.3)",
                        cursor: "pointer",
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
              </div>
            </Col>

            {/* Weather Column */}
            <Col lg={4} className="d-flex flex-column h-100">
              <div className="panel weather-panel text-center border-2 d-flex flex-column justify-content-center h-100">
                <h1>
                  <FormattedMessage id="pages.SmartLobby.weather.temp" defaultMessage="28°c" />
                </h1>
                <p>
                  <FormattedMessage id="pages.SmartLobby.weather.day" defaultMessage="Monday" />
                </p>
                <span>
                  <FormattedMessage id="pages.SmartLobby.weather.location" defaultMessage="New York, USA" />
                </span>
                <div className="icon">☀️</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
