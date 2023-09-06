import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_frte_list = createAsyncThunk(
  "frtes/api_v1_frte_list",
  async payload => {
    const response = await apiService.api_v1_frte_list(payload)
    return response.data
  }
)
export const api_v1_frte_create = createAsyncThunk(
  "frtes/api_v1_frte_create",
  async payload => {
    const response = await apiService.api_v1_frte_create(payload)
    return response.data
  }
)
export const api_v1_frte_retrieve = createAsyncThunk(
  "frtes/api_v1_frte_retrieve",
  async payload => {
    const response = await apiService.api_v1_frte_retrieve(payload)
    return response.data
  }
)
export const api_v1_frte_update = createAsyncThunk(
  "frtes/api_v1_frte_update",
  async payload => {
    const response = await apiService.api_v1_frte_update(payload)
    return response.data
  }
)
export const api_v1_frte_partial_update = createAsyncThunk(
  "frtes/api_v1_frte_partial_update",
  async payload => {
    const response = await apiService.api_v1_frte_partial_update(payload)
    return response.data
  }
)
export const api_v1_frte_destroy = createAsyncThunk(
  "frtes/api_v1_frte_destroy",
  async payload => {
    const response = await apiService.api_v1_frte_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const frtesSlice = createSlice({
  name: "frtes",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_frte_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_frte_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_frte_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_frte_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_frte_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_frte_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_frte_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_frte_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_frte_list,
  api_v1_frte_create,
  api_v1_frte_retrieve,
  api_v1_frte_update,
  api_v1_frte_partial_update,
  api_v1_frte_destroy,
  slice: frtesSlice
}
