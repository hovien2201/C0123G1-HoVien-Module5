import userService from "../../UserService"
import { GET_ALL_USER, DELETE_USER } from "./type";
export const getAllUser = () => async (dispatch) => {
    try {
        const res = await userService.findAll();
        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (error) {

    }
}
export const deleteUsers = (id) => async (dispatch) => {
    try {
        const res = await userService.deleteU(id);
        dispatch({
            type: DELETE_USER
        })
    } catch (error) {

    }
}
