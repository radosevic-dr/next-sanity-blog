"use client";
import axios from "axios";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/libs/validationSchema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "@/styles/components/contact/Contact.module.scss";

export const Contact = () => {
    // reference for form reset
    const formRef = useRef(null);
    const [submitting, setSubmitting] = useState(false);
    // form handling
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const onSubmit = async (contact) => {
        setSubmitting(true);
        try {
            await axios({
                method: "POST",
                url: "/messages",
                data: contact,
            });
            toast.success("Thank you for contacting me!", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
                draggable: false,
            });
            formRef.current.reset();
        } catch (error) {
            if (error.response.status === 500) {
                toast.success("Thank you for contacting me!", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 3000,
                    draggable: false,
                });
                formRef.current.reset();
            } else
                toast.error("Something went wrong, I will redirect you to Home page", {
                    position: toast.POSITION.TOP_LEFT,
                    draggable: false,
                });
        }

        setSubmitting(false);
    };
    return (
        <div className={style.contactContainer}>
            <h1 className={style.contactTitle}>Contact</h1>
            <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)} ref={formRef} noValidate>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    {...register("fullName")}
                    className={style.inputGroup}
                />
                <span
                    className={`${errors["fullName"] ? style.errorShow : style.errorHide
                        }`}
                >
                    {errors["fullName"]?.message}
                </span>

                <input type="email" name="email" id="email" placeholder="your_email@example.com"
                    {...register("email")}
                    className={style.inputGroup} />
                <span
                    className={`${errors["email"] ? style.errorShow : style.errorHide
                        }`}
                >
                    {errors["email"]?.message}
                </span>

                <div className={style.textareaGroup}>
                    <textarea name="message" id="message" rows={20} {...register("message")}></textarea>
                </div>
                <span
                    className={`${errors["message"] ? style.errorShow : style.errorHide
                        }`}
                >
                    {errors["message"]?.message}
                </span>
                <input name="_formsubmit_id" type="text" style={{ visibility: "hidden", height: 0, padding: 0 }} />
                <button type="submit" className={style.contactBtn} disabled={submitting}>Send</button>
            </form>
            <ToastContainer />
        </div>
    );
};
