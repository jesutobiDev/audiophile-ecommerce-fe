"use client";
import { useRouter } from "next/navigation";
import Header from "@/sections/Header";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/redux/slices/checkoutSlice";
import { RootState } from "@/redux/store";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleGoBack = () => {
    router.back();
  };
  const name = useSelector((state: RootState) => state.checkoutForm.name.value);
  const nameError = useSelector(
    (state: RootState) => state.checkoutForm.name.error
  );

  const email = useSelector(
    (state: RootState) => state.checkoutForm.email.value
  );
  const emailError = useSelector(
    (state: RootState) => state.checkoutForm.email.error
  );

  const phoneNumber = useSelector(
    (state: RootState) => state.checkoutForm.phoneNumber.value
  );
  const phoneNumberError = useSelector(
    (state: RootState) => state.checkoutForm.phoneNumber.error
  );

  const address = useSelector(
    (state: RootState) => state.checkoutForm.address.value
  );
  const addressError = useSelector(
    (state: RootState) => state.checkoutForm.address.error
  );

  const zipCode = useSelector(
    (state: RootState) => state.checkoutForm.zipCode.value
  );
  const zipCodeError = useSelector(
    (state: RootState) => state.checkoutForm.zipCode.error
  );

  const city = useSelector((state: RootState) => state.checkoutForm.city.value);
  const cityError = useSelector(
    (state: RootState) => state.checkoutForm.city.error
  );

  const country = useSelector(
    (state: RootState) => state.checkoutForm.country.value
  );
  const countryError = useSelector(
    (state: RootState) => state.checkoutForm.country.error
  );

  // const paymentMethod = useSelector(
  //   (state: RootState) => state.checkoutForm.paymentMethod.value
  // );
  // const paymentMethodError = useSelector(
  //   (state: RootState) => state.checkoutForm.paymentMethod.error
  // );

  const eMoneyNumber = useSelector(
    (state: RootState) => state.checkoutForm.eMoneyNumber.value
  );
  const eMoneyNumberError = useSelector(
    (state: RootState) => state.checkoutForm.eMoneyNumber.error
  );

  const eMoneyPin = useSelector(
    (state: RootState) => state.checkoutForm.eMoneyPin.value
  );
  const eMoneyPinError = useSelector(
    (state: RootState) => state.checkoutForm.eMoneyPin.error
  );

  // Handlers to update each field in Redux
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "name", value: e.target.value }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "email", value: e.target.value }));
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "phoneNumber", value: e.target.value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "address", value: e.target.value }));
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "zipCode", value: e.target.value }));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "city", value: e.target.value }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "country", value: e.target.value }));
  };

  // const handlePaymentMethodChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   dispatch(updateField({ field: "paymentMethod", value: e.target.value }));
  // };

  const handleEMoneyNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "eMoneyNumber", value: e.target.value }));
  };

  const handleEMoneyPinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ field: "eMoneyPin", value: e.target.value }));
  };

  return (
    <div className="bg-light-grey">
      <Header />
      <main className="px-5 md:px-10 lg:px-40 pb-28">
        <Button
          onClick={handleGoBack}
          variant="plain"
          className="py-3 mt-7 mb-4 capitalize"
        >
          Go Back
        </Button>
        <div className="flex flex-col lg:flex-row gap-5 h-auto">
          <div className="lg:flex-1 bg-white rounded-lg h-fit p-5 md:p-10 space-y-7">
            <h1 className="uppercase text-2xl mt-5 font-bold">Checkout</h1>
            <form className="space-y-10">
              <fieldset className="space-y-5">
                <p className="text-primary uppercase text-sm font-semibold tracking-wider">
                  Billing Details
                </p>
                <div className="flex flex-col md:flex-row gap-5">
                  <Input
                    type="text"
                    placeholder="Alexei Ward"
                    label="Name"
                    value={name}
                    name="name"
                    error={nameError}
                    onChange={handleNameChange}
                    className="flex-1"
                  />
                  <Input
                    type="email"
                    placeholder="alexei@mail.com"
                    label="Email Address"
                    value={email}
                    name="email"
                    error={emailError}
                    onChange={handleEmailChange}
                    className="flex-1"
                  />
                </div>
                <Input
                  type="tel"
                  placeholder="+1 202-555-0136"
                  label="Phone Number"
                  value={phoneNumber}
                  name="email"
                  error={phoneNumberError}
                  onChange={handlePhoneNumberChange}
                  className="md:w-1/2"
                />
              </fieldset>
              <fieldset className="space-y-5">
                <p className="text-primary uppercase text-sm font-semibold tracking-wider">
                  Shipping Info
                </p>
                <Input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  label="Address"
                  value={address}
                  name="address"
                  error={addressError}
                  onChange={handleAddressChange}
                  className="w-full"
                />
                <div className="flex flex-col md:flex-row gap-5">
                  <Input
                    type="text"
                    placeholder="10001"
                    label="ZIP Code"
                    value={zipCode}
                    name="zipCode"
                    error={zipCodeError}
                    onChange={handleZipCodeChange}
                    className="flex-1"
                  />
                  <Input
                    type="text"
                    placeholder="New York"
                    label="City"
                    value={city}
                    name="city"
                    error={cityError}
                    onChange={handleCityChange}
                    className="flex-1"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="United States"
                  label="Country"
                  value={country}
                  name="country"
                  error={countryError}
                  onChange={handleCountryChange}
                  className="md:w-1/2"
                />
              </fieldset>
              <fieldset className="space-y-5">
                <p className="text-primary uppercase text-sm font-semibold tracking-wider">
                  Payment Details
                </p>
                <div className="flex flex-col md:flex-row gap-5">
                  <Input
                    type="string"
                    placeholder="238521993"
                    label="e-Money Number"
                    value={eMoneyNumber}
                    name="eMoneyNumber"
                    error={eMoneyNumberError}
                    onChange={handleEMoneyNumberChange}
                    className="flex-1"
                  />
                  <Input
                    type="string"
                    placeholder="6891"
                    label="e-Money PIN"
                    value={eMoneyPin}
                    name="city"
                    error={eMoneyPinError}
                    onChange={handleEMoneyPinChange}
                    className="flex-1"
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="w-full lg:w-[300px] bg-white rounded-lg h-fit p-5">
            hiii
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
