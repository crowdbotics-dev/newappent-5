import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_two_factor_authentication_twofactorauth_list = createAsyncThunk(
  "phoneNumbers/modules_two_factor_authentication_twofactorauth_list",
  async payload => {
    const response = await apiService.modules_two_factor_authentication_twofactorauth_list(
      payload
    )
    return response.data
  }
)
export const modules_two_factor_authentication_twofactorauth_create = createAsyncThunk(
  "phoneNumbers/modules_two_factor_authentication_twofactorauth_create",
  async payload => {
    const response = await apiService.modules_two_factor_authentication_twofactorauth_create(
      payload
    )
    return response.data
  }
)
export const modules_two_factor_authentication_twofactorauth_retrieve = createAsyncThunk(
  "phoneNumbers/modules_two_factor_authentication_twofactorauth_retrieve",
  async payload => {
    const response = await apiService.modules_two_factor_authentication_twofactorauth_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_two_factor_authentication_twofactorauth_update = createAsyncThunk(
  "phoneNumbers/modules_two_factor_authentication_twofactorauth_update",
  async payload => {
    const response = await apiService.modules_two_factor_authentication_twofactorauth_update(
      payload
    )
    return response.data
  }
)
export const modules_two_factor_authentication_twofactorauth_partial_update = createAsyncThunk(
  "phoneNumbers/modules_two_factor_authentication_twofactorauth_partial_update",
  async payload => {
    const response = await apiService.modules_two_factor_authentication_twofactorauth_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_two_factor_authentication_twofactorauth_destroy = createAsyncThunk(
  "phoneNumbers/modules_two_factor_authentication_twofactorauth_destroy",
  async payload => {
    const response = await apiService.modules_two_factor_authentication_twofactorauth_destroy(
      payload
    )
    return response.data
  }
)
export const modules_two_factor_authentication_twofactorauth_send_otp_create = createAsyncThunk(
  "phoneNumbers/modules_two_factor_authentication_twofactorauth_send_otp_create",
  async payload => {
    const response = await apiService.modules_two_factor_authentication_twofactorauth_send_otp_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const phoneNumbersSlice = createSlice({
  name: "phoneNumbers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_two_factor_authentication_twofactorauth_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_destroy.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_send_otp_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_send_otp_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_two_factor_authentication_twofactorauth_send_otp_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_two_factor_authentication_twofactorauth_list,
  modules_two_factor_authentication_twofactorauth_create,
  modules_two_factor_authentication_twofactorauth_retrieve,
  modules_two_factor_authentication_twofactorauth_update,
  modules_two_factor_authentication_twofactorauth_partial_update,
  modules_two_factor_authentication_twofactorauth_destroy,
  modules_two_factor_authentication_twofactorauth_send_otp_create,
  slice: phoneNumbersSlice
}
