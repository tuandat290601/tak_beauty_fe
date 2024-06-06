import React from "react";
import { BasicTextBox } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../helpers/form-schema";
import { LOGIN_OBJ } from "../../helpers/schema-obj";
import BasicButton from "../../components/Button/BasicButton";
import { usersApi } from "../../api";
import { RESP_CODE } from "../../configuration/respCode";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../configuration/routeConfig";
import Config from "../../configuration";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      [LOGIN_OBJ.EMAIL]: "",
      [LOGIN_OBJ.PASSWORD]: "",
    },
    mode: "onSubmit",
  });

  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      const resp = await usersApi.login(data);

      if (resp?.status === "success") {
        sessionStorage.setItem(
          Config.storageKey.auth,
          JSON.stringify({
            token: resp?.responseData?.accessToken,
          })
        );
        navigate(`${PAGE_PATH.PRODUCT_MANAGEMENT}`);
      }
    } catch (error) {
      switch (error.response?.status) {
        case RESP_CODE.INVALID_PASSWORD:
          console.error(error.response?.data?.message);
          break;

        default:
          console.error(error.response?.data?.message);
          break;
      }
    }
  }

  return (
    <div className="page-body flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-md p-4 w-[400px]"
      >
        <BasicTextBox
          control={control}
          name={LOGIN_OBJ.EMAIL}
          errMsg={
            errors[LOGIN_OBJ.EMAIL] ? errors[LOGIN_OBJ.EMAIL]?.message : null
          }
          label={"Email"}
          wrapperClass="mb-3"
        />
        <BasicTextBox
          type="password"
          control={control}
          name={LOGIN_OBJ.PASSWORD}
          errMsg={
            errors[LOGIN_OBJ.PASSWORD]
              ? errors[LOGIN_OBJ.PASSWORD]?.message
              : null
          }
          label={"Mật khẩu"}
          wrapperClass="mb-3"
        />
        <BasicButton
          title="Đăng nhập"
          className="blue-btn m-auto"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Login;
