import axios from "axios"
import type { User, userForm } from "../../assets/types/Types"
import type { Action } from "@reduxjs/toolkit";
import { reqApi, reqApiFailure, userReqSuccess } from "../Reducers/UserReducer";


type Dispatch = React.Dispatch<Action>;



type ApiResult<T> = {
  success: boolean;
  payload?: T;
  message?: string;
};

export const handlRegister =
    (e: React.MouseEvent<HTMLButtonElement>, formBody: userForm) =>
        async (dispatch: Dispatch): Promise<void> => {

            e.preventDefault()

            try {
                dispatch(reqApi)
                const res = await axios.post<ApiResult<User>>("/api/user/register", formBody)
                if (res.status === 200 && res.data.payload) {
                    dispatch(userReqSuccess(res.data.payload))
                }

            } catch (error) {
                dispatch(reqApiFailure)
                throw new Error("Network Error !")
            }
        }




export const handlLogin =
    (e: React.MouseEvent<HTMLButtonElement>, formBody: userForm) =>
        async (dispatch: Dispatch): Promise<void> => {

            e.preventDefault()

            try {
                dispatch(reqApi)
                const res = await axios.post("/api/user/login", formBody)
                if (res.status === 200) {
                    dispatch(userReqSuccess)
                }

            } catch (error) {
                dispatch(reqApiFailure)
                throw new Error("Network Error !")
            }
        }



