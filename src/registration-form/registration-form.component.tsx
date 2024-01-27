import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  gender: z.string(),
  dob: z.string(),
  password: z.string().min(3),
  valdatePassword: z.string().min(3),
});

type FormProps = z.infer<typeof schema>;

const RegistrationForm = () => {
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    mode: "all",
    defaultValues: { email: "test@gmail.com", password: ""},
    resolver: zodResolver(schema),
  });
  // handleSubmit --> prevents default form behaviour and validates the values

  const submitForm: SubmitHandler<FormProps> = async (data) => {
    try {
      console.log("the data ", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (err) {
      setError("root", { message: "This email is already taken" });
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
        <input {...register("email")} type="text" placeholder="Email" />
        <input {...register("gender")} type="text" placeholder="Gender" />
        <input {...register("dob")} type="text" placeholder="Dob" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <Controller
          control={control}
          rules={{
            minLength: 3,
          }}
          
          render={({ field: { onChange, onBlur, value } }) => (
            <input
            //  {...register("valdatePassword")}
              placeholder="Validate Password"
              onBlur={onBlur}
              // onChangeText={onChange}
              value={value}
            />
          )}
          name="valdatePassword"
        />
        <br></br>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading" : "Submit"}
        </button>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </form>
    </>
  );
};

export default RegistrationForm;
