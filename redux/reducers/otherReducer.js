import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({}, (builder) => {
  builder
    .addCase("updatePasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProfileRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePictureRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProfileSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePictureSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProfileFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updatePictureFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
