// import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./signin.css";

const scheme = yup.object({
  name: yup
    .string()
    .required("Введите имя")
    .min(2, "Мин 2 букв")
    .max(10, "Макс 10 букв")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Только буквы!"),
  email: yup
    .string()
    .required("Введите почту")
    .min(2, "Мин 2 букв")
    .matches(/@/, {
      message: 'Email должен содержать символ "@"',
      excludeEmptyString: false,
    }),
});

const Signinpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(scheme) });
  // const [data, setData] = useState("");

  const submitUser = async (data) => {
    try {
      const api = "https://reqres.in/api/users/";

      const res = await axios.post(api, data);

      console.log("Успешно отправлен!", res.data);
      toast.success("Успешно!");
    } catch (error) {
      console.error("Ошибка запроса:", error);
      toast.error("Error!");
    }
  };

  return (
    <main className="section-user">
      <NavLink to="/userlist">
        <button className="btn-exit">Exit</button>
      </NavLink>
      <div className="container__sign-in">
        <ToastContainer />
        <form
          className="form__sign-in"
          // onSubmit={
          //   (handleSubmit((data) => setData(JSON.stringify(data))),
          //   submitUser())
          // }
          onSubmit={handleSubmit(submitUser)}
        >
          <input
            className="input__sign-in"
            {...register("name")}
            placeholder="your name"
            autoComplete="off"
          />
          <p>{errors.name?.message}</p>
          <input
            className="input__sign-in"
            {...register("email")}
            placeholder="your email"
            autoComplete="off"
          />
          <p>{errors.email?.message}</p>
          <input
            className="input-submit__sign-in"
            type="submit"
            // onClick={submitUser}
          />
        </form>
        {/* <p>{data}</p> */}
      </div>
    </main>
  );
};

export default Signinpage;
