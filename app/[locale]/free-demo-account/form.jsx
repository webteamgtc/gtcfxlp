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
import { usePathname, useRouter } from "next/navigation";

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
    const router = useRouter()
    const path = usePathname();

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

    const generatePassword = (length = 12) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    };



    const sendDataToDb = async (data) => {
        const date = new Date()
        let payload = {
            fbclid: data?.fbclid,
            utm_campain: data?.utm_campain,
            utm_source: data?.utm_source,
            Full_name: data?.nickname || data?.last_name,
            Email_address: data?.email,
            Account_number: data?.account_no,
            Country: data?.country,
            terms: data?.terms,
            Campaign_code: new Date(),
            Campaign_name: path?.slice(1),
            qr_code_id: data?.qr_code_id,
            Phone_number: data?.phone,
            create_time: new Date()
        }
        const res = await fetch('/api/insetData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const result = await res.json();
        if (result.success) {
            toast.success('Data inserted successfully');
            formik.resetForm();
            setLoading(false)
        } else {
            toast.error('Error inserting data: ' + result.error);
            setLoading(false)
        }
        axios.post(`/api/reg`, {
            email: formik?.values?.email,
            nickname: formik?.values?.nickname,
            code: formik?.values?.otp,
            country: formik?.values?.country,
            phone: formik?.values?.phone,
            password: formik?.values?.password,
            last_name: formik?.values?.last_name,
        }).then(res => {
            if (res?.data?.success) {
                toast.success(res?.data?.message)
                localStorage.setItem('user', JSON.stringify(data));
                router.push("/thank-you",);
                formik.resetForm()
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

    const formik = useFormik({
        initialValues: {
            nickname: "",
            email: "",
            last_name: "",
            phone: "",
            password: generatePassword(),
            country: "",
            otp: "",
            terms: false,
        },
        validationSchema: Yup.object({
            nickname: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Full name can only contain letters.")
                .required("Full name is required"),
            last_name: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Last name can only contain letters.")
                .required("Last name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            phone: Yup.string().required("Phone number is required"),
            country: Yup.string().required("Country is required"),
            otp: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
            // terms: Yup.bool().oneOf([true], "Please accept the terms and conditions"),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post("https://hooks.zapier.com/hooks/catch/16420445/3ajp4wk/", JSON.stringify(values));
            } catch (error) {
            } finally {
                axios.get(`/api/get-bounce-data?Email_address=${values?.email}`).then(res => {
                    if (res?.data?.exists) {
                        toast.error("You have already applied with this Email!")
                    }
                    else {
                        sendDataToDb(values, formik, setLoading)
                    }
                })
                    .catch(err => {
                        toast.error(err?.message)
                        setLoading(false)
                    })
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
                                <RiUserLocationLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.last_name && formik.errors.last_name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                                    placeholder="Last Name"
                                    {...formik.getFieldProps("last_name")}
                                />
                                {formik.touched.last_name && formik.errors.last_name && (
                                    <p className="text-red-500 text-sm">{formik.errors.last_name}</p>
                                )}
                            </div>

                        </div>


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
                                {showOtp &&
                                    <div className="grid grid-cols-1 gap-6">
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
