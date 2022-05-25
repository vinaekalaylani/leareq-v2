import { Form } from "react-bootstrap";

export default function FilterComp({ deleted, fullName, setDeleted, setFullName }) {
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
          <Form.Control
            className="mb-3"
            placeholder="Search by Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form>
      </div>
    </div>
  )
}