import { v1 } from "uuid"
import { ADD } from "../reducers/filesReducer"

export const addFile = (file) => (dispatch, getState) => {
  const fileUrl = URL.createObjectURL(file)
  const { name, type } = file
  dispatch(ADD({
    id: v1(),
    name,
    type,
    fileUrl
  }))
}