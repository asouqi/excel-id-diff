import React from "react"
import { Table } from "react-bootstrap"

const MissingIdsTable: React.FC<{ missingIds?: string[] }> = ({ missingIds }) => {
  if (!missingIds) {
    return null
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th># missing national ID</th>
        </tr>
      </thead>
      <tbody>
        {missingIds.map((id) => (
          <tr key={id}>
            <td>{id}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default MissingIdsTable
