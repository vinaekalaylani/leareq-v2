import { Form } from "react-bootstrap";
import { useEffect, useState } from 'react'

export default function FilterComp({ type, status, deleted, year, setType, setStatus, setDeleted, setYear }) {
  const [years, setYears] = useState([])

  const getYear = () => {
    const max = new Date().getFullYear()
    const min = max - 9
    let arrYear = []

    for (let i = max; i >= min; i--) {
      arrYear.push(i)
    }
    setYears(arrYear)
  }

  useEffect(() => {
    getYear() // eslint-disable-next-line
  }, [])

  return (
    <div className="card shadow">
      <div className="table-responsive px-4 my-4">
        <Form>
          <Form.Check
            type="checkbox"
            label="Is Deleted"
            value={deleted}
            className="mb-3"
            onChange={() => setDeleted(!deleted)}
            checked={deleted}
          />
          <Form.Label>Type</Form.Label>
          <Form.Select
            className="mb-3"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Open this select menu</option>
            <option value="Vacation">Vacation</option>
            <option value="TIL">Time In Lieu (TIL)</option>
            <option value="Sick">Sick</option>
            <option value="Unppaid">Unppaid Leave</option>
            <option value="Bereavement">Bereavement</option>
            <option value="Overtime">Overtime</option>
            <option value="Leave">Leave</option>
            <option value="Other">Other</option>
          </Form.Select>
          <Form.Label>Status</Form.Label>
          <Form.Select
            className="mb-3"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Open this select menu</option>
            <option value="0">Pending</option>
            <option value="1">Approved</option>
            <option value="2">Rejected</option>
          </Form.Select>
          <Form.Label>Year</Form.Label>
          <Form.Select
            className="mb-3"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Open this select menu</option>
            {
              years.map(el => (
                <option key={el} value={el}>{el}</option>
              ))
            }
          </Form.Select>
        </Form>
      </div>
    </div>
  )
}