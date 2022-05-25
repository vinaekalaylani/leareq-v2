import { Form, Button, Row, Col } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useState } from "react";

import { alertSuccess, alertError } from '../../apis/swal';
import { apply } from '../../store/action'

export default function FormComp({ user }) {
  const [type, setType] = useState("");
  const [dayType, setDayType] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [totalDays, setTotalDays] = useState("");
  const [reason, setReason] = useState("");

  const dispatch = useDispatch()
  const history = useHistory()

  const handleType = (value) => {
    setType(value);
  };

  const handleDayType = (value) => {
    setDayType(value);
  };

  const handleApply = async (e) => {
    e.preventDefault();
    const data = {
      type,
      dayType,
      dateFrom,
      dateTo,
      totalDays,
      reason,
    };
    dispatch(apply(data))
      .then(() => {
        alertSuccess("Success!!")
        history.push("/")
      })
      .catch((err) => {
        alertError(err)
      })
  };

  return (
    <div className="card shadow">
      <div className="card-header border-0">
        <div className="align-items-center">
          <h3 className="mb-0">Apply Leave</h3>
        </div>
      </div>
      <div className="card-body">
        <Form onSubmit={handleApply}>
          <Row className="mb-3">
            <Col>
              <label>From :</label>
              <Form.Control
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </Col>
            <Col>
              <label>To :</label>
              <Form.Control
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <label>Type :</label>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Vacation"
                    value="Vacation"
                    className="mb-3"
                    onChange={() => handleType("Vacation")}
                    checked={type === "Vacation" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Time In Lieu (TIL)"
                    value="TIL"
                    className="mb-3"
                    onChange={() => handleType("TIL")}
                    checked={type === "TIL" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Sick / Medical"
                    value="Sick"
                    className="mb-3"
                    onChange={() => handleType("Sick")}
                    checked={type === "Sick" ? true : false}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Unpaid Leave"
                    value="Unpaid"
                    className="mb-3"
                    onChange={() => handleType("Unpaid")}
                    checked={type === "Unpaid" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Bereavement"
                    value="Bereavement"
                    className="mb-3"
                    onChange={() => handleType("Bereavement")}
                    checked={type === "Bereavement" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Overtime"
                    value="Overtime"
                    className="mb-3"
                    onChange={() => handleType("Overtime")}
                    checked={type === "Overtime" ? true : false}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={3} style={{ marginRight: "-50px" }}>
                  <Form.Check
                    type="checkbox"
                    label="Other"
                    className="mb-3"
                    onChange={() => handleType("Other")}
                    checked={type === "Other" ? true : false}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <label>Total Days :</label>
              <Form.Control
                className="mb-2"
                type="number"
                value={totalDays}
                onChange={(e) => setTotalDays(e.target.value)}
              />
              <label>Day Type :</label>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Full"
                    className="mb-3"
                    value="Full"
                    onChange={() => handleDayType("Full")}
                    checked={dayType === "Full" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    disabled={type === "Optional" || totalDays > 1 ? true : false}
                    type="checkbox"
                    label="Half"
                    className="mb-3"
                    value="Half"
                    onChange={() => handleDayType("Half")}
                    checked={dayType === "Half" ? true : false}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <label>Reason :</label>
          <Form.Control
            type="date"
            as="textarea"
            rows="3"
            className="mb-3"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <div style={{ marginTop: "1rem" }}>
            <Button type="submit" className="d-flex justify-content-center align-items-center bg-blue">
              APPLY
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}