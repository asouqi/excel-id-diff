import { useCallback, useState } from "react"
import readXlsxFile, { Row } from "read-excel-file"
export default () => {
  const [missingIds, setMissingIds] = useState<string[] | undefined>(undefined)

  const onFileChange = useCallback(async (file) => {
    const fileReader = new FileReader()
    fileReader.onloadend = async () => {
      const firstSheet = await readXlsxFile(file, { sheet: 1 })
      const secondSheet = await readXlsxFile(file, { sheet: 2 })

      const firstSetNIds = new Set<string>(firstSheet.map((row) => row[0] as string))
      const secondSetNIds = new Set<string>(
        secondSheet.map((row) => row[0] as string),
      )

      const missingIds: string[] = []

      function findMissingIds(rows: Row[], idsSet: Set<string>) {
        rows.map((row) => {
          if (!idsSet.has(row[0] as string)) {
            missingIds.push(row[0] as string)
          }
        })
      }

      findMissingIds(firstSheet, secondSetNIds)
      findMissingIds(secondSheet, firstSetNIds)

      setMissingIds(missingIds)
    }

    fileReader.readAsBinaryString(file)
  }, [])

  return {
    onFileChange,
    missingIds,
  }
}
