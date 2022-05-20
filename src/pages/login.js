import { Row, Col, Container, Form, Button, Image } from 'react-bootstrap';
import { useState } from 'react';
import { login } from '../store/action'
import { useDispatch } from 'react-redux'
import { alertSuccess, alertError } from '../apis/swal';
import { useHistory } from 'react-router-dom';
import '../App.css'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
      .then(() => {
        alertSuccess("Welcome")
        history.push("/")
      })
      .catch((err) => {
        alertError(err)
      })
  }

  return (
    <Container className="d-xl-block d-none">
      <div className="d-flex align-items-center justify-content-center">
        <Row className="login-container" style={{ marginTop: "12rem" }}>
          <Col style={{ marginLeft: "-12px" }}>
            <Image
              src="/login1.jpg"
              className="image-login"
              width="430px"
              height="600px"
            />
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <h1 className="title-login">LEAREQ</h1>
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: "3rem" }}>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <div className="d-flex justify-content-center" style={{ marginTop: "3rem" }}>
                  <Button type="submit" className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#05499C" }}>LOGIN
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}