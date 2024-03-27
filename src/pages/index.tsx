import * as React from "react"
import "../layout.scss"

import styled from "@emotion/styled"
import Seo from "../components/Seo"
import useFileUpload from "../hooks/file-upload"
import { FileUploader } from "react-drag-drop-files"
import MissingIdsTable from "../components/MissingIdsTable"
import { Alert } from "react-bootstrap"

const IndexPage = () => {
  const { onFileChange, missingIds } = useFileUpload()

  return (
    <Container>
      <Seo title="Home" />
      <h1>Excel Id Diff</h1>
      <p>find missing national IDs between two sheets</p>
      <Alert variant="info">
        will assume the first column has the national IDs in each sheet
      </Alert>
      excel-id-diff
      <div>
        <FileUploader
          handleChange={onFileChange}
          name="file"
          types={["xlsx", "xls"]}
        />
      </div>
      <br />
      <br />
      <MissingIdsTable missingIds={missingIds} />
    </Container>
  )
}

const Container = styled.span`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default IndexPage
