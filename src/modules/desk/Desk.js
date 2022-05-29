import { DeskApi } from "../../api"

const Desk = () => {
  const deskApi = new DeskApi()

  const onClick = () => {
    deskApi.method()
  }

  return (
    <div>
      <button onClick={onClick}>GET</button>
    </div>
  )
}

export default Desk
