// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import nationality from "../../../../public/data/nationality.json";
// import Link from "next/link";
// import { usePathname, useSearchParams } from "next/navigation";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { useContext, useEffect, useState } from "react";
// import { useLocale, useTranslations } from "next-intl";
// import { toast } from "react-toastify";
// import OtpInput from "react-otp-input";
// import { LocationContext } from "@/context/location-context";
// import { convertToDesiredLocale, formatDateTime } from "@/helpers";
// import { TiTick } from "react-icons/ti";
// import { ClockLoader } from 'react-spinners'
// import useCountriesDetails from "@/context/useCountriesDetails";
// import { useLocationDetail } from "@/context/useLocationDetail";
// import { allowedCountries } from "@/context/allowedCountries";
// import { RiLockPasswordLine } from "react-icons/ri";

// // import { UserIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';
// import { CiMail } from 'react-icons/ci';
// import { FiPhoneCall } from "react-icons/fi";
// import { GiWorld } from "react-icons/gi";
// import { RiUserLocationLine } from "react-icons/ri";
// import { MdManageAccounts } from "react-icons/md";

// const platforms = [
//   { id: 1, name: "MT4", value: "mt4" },
//   { id: 2, name: "MT5", value: "mt5" },
// ];
// const MainForm = () => {
//   const t = useTranslations("accounts");
//   const t2 = useTranslations("form");
//   const { country: originCountry, ip: originIp } = useContext(LocationContext);
//   const [loading, setLoading] = useState(false);
//   const path = usePathname();
//   const currentDateTime = new Date();
//   const formatted = formatDateTime(currentDateTime, "dd-MM-yyyy HH:mm:ss");

//   const [emailOtp, setEmailOtp] = useState("");
//   const [showEmailOtpVerify, setShowEmailOtpVerify] = useState(false);
//   const [disableSendEmailOtpBtn, setDisableSendOtpBtn] = useState(false);
//   const [disableVerifyEmailOtpBtn, setDisableVerifyEmailBtn] = useState(false);
//   const [storedEmailOtp, setStoredEmailOtp] = useState("");
//   const [isEmailVerified, setIsEmailVerified] = useState(false);
//   const [sendEmailOtpLoading, setSendEmailOtpLoading] = useState(false);
//   const [initialCountry, setInitialCountry] = useState("");

//   //Phone OTP Logic
//   const [phoneOtp, setPhoneOtp] = useState("");
//   const [showPhoneOtpVerify, setShowPhoneOtpVerify] = useState(false);
//   const [disableSendPhoneOtpBtn, setDisablePhoneOtpBtn] = useState(false);
//   const [disableVerifyPhoneOtpBtn, setDisableVerifyPhoneBtn] = useState(false);
//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);
//   const [sendPhoneOtpLoading, setSendPhoneOtpLoading] = useState(false);
//   const [initialValues, setInitialValues] = useState({
//     ip: "",
//     fbclid: "",
//     utm_compaign: "",
//     utm_source: "",
//     first_name: "",
//     last_name: "",
//     platform: "",
//     phone: "",
//     email: "",
//     country: "", // Dynamically update the country
//     terms: false,
//   });

//   const source = useSearchParams().get('utm_source')
//   const campaign = useSearchParams().get('utm_campaign');
//   const fbclid = useSearchParams().get('fbclid');
//   const lang = path.split('/').at(1);
//   const locale = useLocale();
//   const { countryCode, countryData } = useLocationDetail()
//   const { countryList } = useCountriesDetails(convertToDesiredLocale(locale))

//   useEffect(() => {
//     const phoneInputElement = document.querySelector('.PhoneInputInput');

//     // Add the new class
//     if (phoneInputElement) {
//       phoneInputElement.classList.add('hyros-phone'); // Replace 'new-class' with the class you want to add
//     }
//   }, [])

//   useEffect(() => {
//     if (countryData?.country) {
//       const filterData = countryList.find(
//         (item) => item?.code == countryData.country
//       );
//       setInitialValues((st) => ({
//         ...st,
//         country: filterData ? filterData?.nameInEnglish : "",
//       }));
//       setInitialCountry(filterData ? filterData?.nameInEnglish : "");
//     }
//   }, [countryData?.country, countryList]);
//   const formik = useFormik({
//     initialValues: initialValues,
//     enableReinitialize: true,
//     validationSchema: Yup.object({
//       first_name: Yup.string().matches(
//         /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//         'first name can only contain letters.'
//       )
//         .required(t("accountForm.error.firstName")),
//       last_name: Yup.string().matches(
//         /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//         'last name can only contain letters.'
//       )
//         .required(t("accountForm.error.lastName")),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required(t("accountForm.error.email")),
//       date_of_birth: Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required(t("accountForm.error.dob")),
//       platform: Yup.string().required(t("accountForm.error.platform")),
//       country: Yup.string().required(t("accountForm.error.country")),
//       terms: Yup.bool().oneOf([true], 'Please agree to the terms and conditions to proceed.'),
//     }),
//     validate: (values) => {
//       const errors = {};
//       if (!values.phone) {
//         errors.phone = t("accountForm.error.phone");
//       }
//       return errors;
//     },
//     onSubmit: async (values) => {
//       if (path.includes('live-account')) {
//         console.log("Inside Live Account");
//         if (typeof window !== 'undefined') {
//           console.log('Window is Defined');
//           if (window.gtag) {
//             console.log('inside window.gtag');
//             window.gtag('event', 'conversion', { 'send_to': 'AW-10835048699/5-EeCJOg7pIZEPvxxq4o' });
//           }
//         }
//       } else if (path.includes('free-demo-account')) {
//         console.log("Inside Demo Account");
//         if (typeof window !== 'undefined') {
//           console.log('Window is Defined');
//           if (window.gtag) {
//             console.log('inside window.gtag');
//             window.gtag('event', 'conversion', { 'send_to': 'AW-10835048699/r0r_CICo7pIZEPvxxq4o' });
//           }
//         }
//       }
//       try {
//         setLoading(true);
//         try {
//           const response = await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/3ajp4wk/`, JSON.stringify(values));
//           console.log("Response", response);
//           if (values.account_type === "Live Account") {
//             window.location.href = "/thank-you?account=live"
//           }
//           else {
//             window.location.href = "/thank-you?account=demo"
//           }
//         } catch (err) {
//           console.log(err.message);
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     },
//   });
//   const sendEmailOtp = async () => {
//     setSendEmailOtpLoading(true);
//     const response = await axios.post(`/api/otp-smtp`, JSON.stringify({ email: formik.values.email }));
//     console.log(response);
//     if (response.status === 200) {
//       setSendEmailOtpLoading(false);
//       setStoredEmailOtp(response.data.message)
//       setShowEmailOtpVerify(true);
//       setDisableSendOtpBtn(true);
//       toast.success(`OTP Sent to ${formik.values.email}`)
//     } else {
//       toast.error('Error Sending OTP');
//       setDisableSendOtpBtn(false);
//     }
//   }
//   const verifyEmailOtp = async () => {
//     if (emailOtp === storedEmailOtp) {
//       setIsEmailVerified(true);
//       setDisableVerifyEmailBtn(true);
//       toast.success('OTP Verified!!');
//       setDisableSendOtpBtn(true);
//     }
//     else {
//       toast.error("Wrong OTP, try again!!");
//       setDisableSendOtpBtn(false);
//       setIsEmailVerified(false)
//     }
//   }
//   const sendPhoneOtp = async () => {
//     const response = await axios.post('/api/send-otp', { phone: formik.values.phone });
//     if (response.status === 200) {
//       setSendPhoneOtpLoading(false);
//       setShowPhoneOtpVerify(true);
//       setDisablePhoneOtpBtn(true);
//       toast.success(`${t2("otp_sent")} ${formik.values.phone}`)
//     } else {
//       toast.error(t2("otp_error"));
//       setDisablePhoneOtpBtn(false);
//     }
//   }
//   const verifyPhoneOtp = async () => {
//     const response = await axios.post('/api/verify-otp', { phone: formik.values.phone, otp: phoneOtp });
//     if (response.data.status == "approved") {
//       setIsPhoneVerified(true);
//       setDisableVerifyPhoneBtn(true);
//       toast.success(t2("otp_verified"));
//       setDisablePhoneOtpBtn(true);
//     } else {
//       toast.error(t2("otp_not_verified"));
//       setDisablePhoneOtpBtn(false);
//       setIsPhoneVerified(false);
//     }
//   }

//   const [value, setValue] = useState("+971")
//   const [formData, setFormData] = useState(null)
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <section className="demo-account">
//       <div className="max-w-6xl mx-auto p-10 shadow-2xl">
//         <div className=' relative'>
//           <form className="bg-white relative text-gray-700 rounded-3xl p-8 mx-auto"
//           // onSubmit={handleSubmit}
//           >
//             {/* <form> */}
//             {/* First Name & Last Name */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div className='relative'>
//                 <RiUserLocationLine className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                 <input
//                   type="text"
//                   className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Full Name"
//                   name='nickname'
//                   value={formData?.firstName || ""}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className=' relative'>
//                 <CiMail className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                 <input
//                   type="email"
//                   className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Email"
//                   name='email'
//                   value={formData?.email || ""}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email & Phone */}


//             <div className="grid grid-cols-3 gap-6 mb-6">
//               <div
//                 className="w-full px-4 py-3 bg-white border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
//               >
//                 <PhoneInput
//                   international
//                   countryCallingCodeEditable={false}
//                   defaultCountry="AE"
//                   value={value}
//                   onChange={(phone) => {
//                     setValue(phone)
//                   }}
//                 />
//               </div>
//               <div className='col-span-2 relative'>
//                 <FiPhoneCall className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                 <input
//                   type="number"
//                   className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Phone"
//                   name='phone'
//                   value={formData?.phone || ""}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div className='relative'>
//                 <RiLockPasswordLine className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                 <input
//                   type="text"
//                   className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Password"
//                   name='password'
//                   value={formData?.firstName || ""}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className=' relative'>
//                 <RiLockPasswordLine className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                 <input
//                   type="email"
//                   className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Confirm password"
//                   name='confirmpassword'

//                   required
//                 />
//               </div>
//             </div>

//             {/* Country & Query */}
//             <div className="grid grid-cols-2 gap-6 mb-6">
//               {/* Country Dropdown */}
//               <div className="relative ">
//                 <MdManageAccounts className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
//                 <select
//                   name="query"
//                   className="w-full bg-white px-4 py-3 pl-9 border rounded-lg text-gray-700"
//                   required

//                 >
//                   <option value="">Type</option>
//                   <option value="Marketing">MT4</option>
//                   <option value="Risk Management">MT5</option>
//                   <option value="Technology">Technology </option>
//                 </select>
//               </div>
//               <div className="relative ">
//                 <GiWorld className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
//                 <select
//                   className="w-full bg-white px-4 py-3 pl-9 border rounded-lg text-gray-700"

//                   name="country"
//                   value={formik.values.country}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="">{t("accountForm.selectPlaceholder")}</option>
//                   {
//                     countryList
//                       ?.filter((item) =>
//                         !["Australia", "United Kingdom", "United States of America"].includes(item.nameInEnglish) // Exclude specific countries
//                       )
//                       .map((item, index) => {
//                         return (
//                           <option className="text-primary" key={item?.code} value={item?.nameInEnglish}>
//                             {item?.name}
//                           </option>
//                         );
//                       })
//                   }
//                 </select>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <OtpInput
//                 containerStyle={{
//                   justifyContent: 'space-around',
//                   alignItems: "center",
//                   gap: "10px",
//                   width: "70%",
//                 }}

//                 value={emailOtp}
//                 onChange={setEmailOtp}
//                 numInputs={6}
//                 renderInput={(props) => <input {...props} />}
//                 inputType="text"
//                 inputStyle={{
//                   borderRadius: '5px',
//                   paddingBottom: '8px',
//                   paddingTop: "8px",
//                   width: "20%",
//                   backgroundColor: "#f3f4f6",
//                   color: "#000",
//                   fontWeight: "700",
//                   outlineColor: '#f9c617'
//                 }}
//               />
//             </div>
//             {responseMessage && (
//               <div className="my-4">
//                 <p className="text-primary">{responseMessage}</p>
//               </div>
//             )}

//             {/* Submit Button */}
//             <div className="text-center -mb-12">
//               <button
//                 // onClick={() => { sendEmail() }}
//                 type="submit"
//                 className=" bg-secondary text-white font-semibold py-3 px-8 rounded-full text-lg"
//               >
//                 {loading ? "Submitting.." : "Submit"}
//               </button>
//             </div>
//             {/* </form> */}
//           </form>

//         </div>


//       </div>
//     </section>
//   )
// }
// export default MainForm


import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { RiLockPasswordLine, RiUserLocationLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import useCountriesDetails from "@/context/useCountriesDetails";
import { useLocationDetail } from "@/context/useLocationDetail";
import { toast } from "react-toastify";

const platforms = [
  { id: 1, name: "MT4", value: "40" },
  { id: 2, name: "MT5", value: "42" },
];

const MainForm = () => {
  const locale = useLocale();
  const { countryData } = useLocationDetail();
  const { countryList } = useCountriesDetails(locale);
  const [showOtp, setShowOtp] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countryData?.country) {
      const filterData = countryList.find((item) => item?.code === countryData.country);
      formik.setFieldValue("country", filterData ? filterData?.nameInEnglish : "");
    }
  }, [countryData?.country, countryList]);


  const sendVerificationCode = () => {
    setLoading(true)
    axios.post(`/api/getgcode`, {
      email: formik?.values?.email,
      type: "0"
    }).then(res => {
      if (res?.data?.success && res?.data?.message != "Email has been registered") {
        setShowOtp(true)
        toast.success(res?.data?.message)
      }
      else {
        toast.error(res?.data?.message)
        setShowOtp(false)
      }
    }).catch(err => {
      setShowOtp(false)
    }).finally(() => {
      setLoading(false)
    })
  }

  const formik = useFormik({
    initialValues: {
      nickname: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
      country: "",
      platform: "",
      otp: "",
      terms: false,
    },
    validationSchema: Yup.object({
      nickname: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Full name can only contain letters.")
        .required("Full name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm password is required"),
      country: Yup.string().required("Country is required"),
      platform: Yup.string().required("Platform selection is required"),
      otp: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
      // terms: Yup.bool().oneOf([true], "Please accept the terms and conditions"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post("https://hooks.zapier.com/hooks/catch/16420445/3ajp4wk/", JSON.stringify(values));
      } catch (error) {
      } finally {
        axios.post(`/api/reg`, {
          email: formik?.values?.email,
          nickname: formik?.values?.nickname,
          code: formik?.values?.otp,
          country: formik?.values?.country,
          phone: formik?.values?.phone,
          password: formik?.values?.password,
          server_id: formik?.values?.platform,
        }).then(res => {
          if (res?.data?.success) {
            toast.success(res?.data?.message)
            formik.resetForm()
            window.location.href = "/thank-you";
            setShowOtp(false)
          } else {
            toast.error(res?.data?.message)
          }
        }).catch(err => {
          toast.success(err?.data?.message)
        }).finally(() => {
          setLoading(false)
        })
        setLoading(false);
      }
    },
  });

  return (
    <section className="demo-account">
      <div className="max-w-6xl mx-auto p-10 shadow-2xl">
        <div className="relative">
          <form onSubmit={formik.handleSubmit} className="bg-white relative text-gray-700 rounded-3xl p-8 mx-auto">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <RiUserLocationLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.nickname && formik.errors.nickname ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Full Name"
                  {...formik.getFieldProps("nickname")}
                />
                {formik.touched.nickname && formik.errors.nickname && (
                  <p className="text-red-500 text-sm">{formik.errors.nickname}</p>
                )}
              </div>
              <div className="relative">
                <CiMail className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
                <div className="absolute top-2 bg-secondary right-3 rounded-md cursor-pointer text-white  py-1.5 px-2"
                  onClick={() => {
                    sendVerificationCode()
                  }}
                >
                  {loading ? "Sending.." : "Get Code"}
                </div>
              </div>
            </div>
            {showOtp &&
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div />
                <div>
                  <p className="mb-1">OTP has been sent to given Email</p>
                  <OtpInput
                    value={formik.values.otp}
                    onChange={(otp) => formik.setFieldValue("otp", otp)}
                    numInputs={6}
                    containerStyle={{
                      justifyContent: 'space-around',
                      alignItems: "center",
                      gap: "10px",
                      width: "70%",
                    }}
                    renderInput={(props) => <input {...props} />}
                    isInputNum
                    inputStyle={{
                      borderRadius: '5px',
                      paddingBottom: '8px',
                      paddingTop: "8px",
                      width: "20%",
                      backgroundColor: "#f3f4f6",
                      color: "#000",
                      fontWeight: "700",
                      outlineColor: '#f9c617',
                      border: formik.touched.otp && formik.errors.otp ? "1px solid red" : "1px solid gray",
                    }}

                  />
                  {formik.touched.otp && formik.errors.otp && (
                    <p className="text-red-500 text-sm mt-2">{formik.errors.otp}</p>
                  )}
                </div>
              </div>
            }

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="AE"
                  value={formik.values.phone}
                  onChange={(phone) => formik.setFieldValue("phone", phone)}
                  className={`w-full px-4 py-3 border ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>
              <div className="relative">
                <MdManageAccounts className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <select
                  className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.platform && formik.errors.platform ? "border-red-500" : "border-gray-300"} rounded-lg text-gray-700`}
                  {...formik.getFieldProps("platform")}
                >
                  <option value="">Select Platform</option>
                  {platforms.map((item) => (
                    <option key={item.id} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {formik.touched.platform && formik.errors.platform && (
                  <p className="text-red-500 text-sm">{formik.errors.platform}</p>
                )}
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <RiLockPasswordLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
              </div>
              <div className="relative">
                <RiLockPasswordLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.confirm_password && formik.errors.confirm_password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Confirm Password"
                  {...formik.getFieldProps("confirm_password")}
                />
              </div>
            </div>

            <div className="relative mb-6">
              <GiWorld className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
              <select
                className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.country && formik.errors.country ? "border-red-500" : "border-gray-300"} rounded-lg text-gray-700`}
                {...formik.getFieldProps("country")}
              >
                <option value="">Select Country</option>
                {countryList.map((item) => (
                  <option key={item?.code} value={item?.nameInEnglish}>
                    {item?.name}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500 text-sm">{formik.errors.country}</p>
              )}
            </div>



            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="bg-secondary text-white font-semibold py-3 px-8 rounded-full text-lg">
                {loading ? "Submitting.." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainForm;
