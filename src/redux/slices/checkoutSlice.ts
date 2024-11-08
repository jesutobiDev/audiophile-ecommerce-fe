import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormField {
  value: string;
  error: string | null;
}

interface CheckoutFormState {
  name: FormField;
  email: FormField;
  phoneNumber: FormField;
  address: FormField;
  zipCode: FormField;
  city: FormField;
  country: FormField;
  paymentMethod: FormField;
  eMoneyNumber: FormField;
  eMoneyPin: FormField;
}

const initialState: CheckoutFormState = {
  name: { value: "", error: null },
  email: { value: "", error: null },
  phoneNumber: { value: "", error: null },
  address: { value: "", error: null },
  zipCode: { value: "", error: null },
  city: { value: "", error: null },
  country: { value: "", error: null },
  paymentMethod: { value: "", error: null },
  eMoneyNumber: { value: "", error: null },
  eMoneyPin: { value: "", error: null },
};

const checkoutFormSlice = createSlice({
  name: "checkoutForm",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof CheckoutFormState; value: string }>
    ) => {
      state[action.payload.field].value = action.payload.value;
    },
    setError: (
      state,
      action: PayloadAction<{ field: keyof CheckoutFormState; error: string }>
    ) => {
      state[action.payload.field].error = action.payload.error;
    },
    clearErrors: (state) => {
      Object.keys(state).forEach((field) => {
        state[field as keyof CheckoutFormState].error = null;
      });
    },
  },
});

export const { updateField, setError, clearErrors } = checkoutFormSlice.actions;

export default checkoutFormSlice.reducer;
