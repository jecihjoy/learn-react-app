import { useForm, SubmitHandler } from "react-hook-form";
import {z} from 'zod';

type FormProps = {
  firstName: String;
  lastName: String;
  email: String;
  gender: String;
  dob: String;
  password: string;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    mode: "all",
    defaultValues: {email: 'test@gmail.com', password: 'test123'},
  });
  // handleSubmit --> prevents default form behaviour and validates the values

  const submitForm: SubmitHandler<FormProps> = async (data) => {
    try {
      console.log("the data ", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (err) {
      setError("email", { message: "This email is already taken" });
    }
  };

  return (
    <>
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* register form fields to react form state management */}
        <input
          {...register("firstName")}
          type="text"
          placeholder="First Name"
        />
        <input {...register("lastName")} type="text" placeholder="Last Name" />
        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              return true;
            },
          })}
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input {...register("gender")} type="text" placeholder="Gender" />
        <input {...register("dob")} type="text" placeholder="Dob" />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password must be more than 3 characters",
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <br></br>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
