import { Summary } from "../Summary"
import { TransationTable } from "../TransationTable"
import { Container } from "./styles"

export const Dashboard = () => {
  return (
    <Container>
        <Summary />
        <TransationTable />
    </Container>
  )
}
