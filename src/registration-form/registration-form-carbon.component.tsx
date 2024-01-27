import {
  Form,
  RadioButton,
  RadioButtonGroup,
  DatePicker,
  DatePickerInput,
  FormGroup,
  Checkbox,
  Button,
  TextInput,
  ComboBox,
  Dropdown,
  Layer,
  InlineLoading,
  Search,
  Tile,
  FormLabel,
} from "@carbon/react";
import { Add, Label, TrashCan } from "@carbon/react/icons";

import React, { useCallback, useState } from "react";
import dayjs from "dayjs";
import "dayjs/plugin/utc";
import "./registration-form.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string().email(),
  dob: z.string(),
  gender: z.string(),
  dynamicFields: z.array(
    z.object({
      fullName: z.string(),
      relationshipType: z.string(),
    })
  ),
});

type FormFields = z.infer<typeof formSchema>;

const CarbonRegistrationForm: React.FC = () => {
  const [formPayload, setFormPaylod] = useState<any>({});
  const { control, handleSubmit, register } = useForm<FormFields>({
    mode: "all",
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  const { fields, remove, append } = useFieldArray({
    name: "dynamicFields",
    control,
  });
  const handleAppendRelation = useCallback(
    () => append({ fullName: "", relationshipType: "" }),
    [append]
  );
  const handleRemoveRelation = useCallback(
    (index: any) => remove(index),
    [remove]
  );

  const submitForm: SubmitHandler<FormFields> = (data: any) => {
    console.log("at btn");
    console.log("submit", data);
  };

  return (
    <Form>
      <h4>Carbon registration form</h4>
      <TextInput
        {...register("firstName")}
        id="firstName"
        type="text"
        labelText="First name"
        onChange={(e) =>
          setFormPaylod({ ...formPayload, firstName: e.target.value })
        }
      />
      <TextInput
        {...register("lastName")}
        id="lastName"
        type="text"
        labelText="Last name"
        onChange={(e) =>
          setFormPaylod({ ...formPayload, lastName: e.target.value })
        }
      />
      <TextInput
        {...register("username")}
        id="username"
        type="text"
        labelText="Username"
        onChange={(e) =>
          setFormPaylod({ ...formPayload, username: e.target.value })
        }
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, ref } }) => (
          <TextInput
            id="email"
            type="text"
            labelText="Email"
            onBlur={onBlur}
            onChange={(e) =>
              setFormPaylod({ ...formPayload, email: e.target.value })
            }
          />
        )}
      />

      <DatePicker
        {...register("dob")}
        id="dob"
        datePickerType="single"
        dateFormat="d/m/Y"
        maxDate={new Date().setDate(new Date().getDate())}
        onChange={(selected) => {
          // console.log("quesdh 1", selected);
          // setFormPaylod({ ...formPayload, dob: date });
        }}
        // value={formPayload?.dob ?? ''}
      >
        <DatePickerInput
          id="dobInput"
          labelText="Date of birth"
          placeholder="dd/mm/yyyy"
        />
      </DatePicker>
      <RadioButtonGroup
        {...register("gender")}
        name="gender"
        legendText="Select Gender"
        orientation="horizontal"
        onChange={(selected) => {
          setFormPaylod({ ...formPayload, gender: selected });
          console.log(formPayload);
        }}
      >
        <RadioButton id="radio-1" value="female" labelText="Female" />
        <RadioButton id="radio-2" value="male" labelText="Male" />
      </RadioButtonGroup>
      <section>
        <div>
          <FormLabel>Add Relationships</FormLabel>
        </div>
        {fields.map((field, index) => (
          <div key={index}>
            <Controller
              control={control}
              name={`dynamicFields.${index}.fullName`}
              render={({ field }) => (
                <TextInput
                  {...field}
                  id="fullName"
                  type="text"
                  labelText="Full Name"
                />
              )}
            />
            <Controller
              control={control}
              name={`dynamicFields.${index}.relationshipType`}
              render={({ field }) => (
                <TextInput
                  {...field}
                  id="relationshipType"
                  type="text"
                  labelText="Relationship Type"
                />
              )}
            />
            <div>
              <TrashCan onClick={handleRemoveRelation} size={20} />
            </div>
          </div>
        ))}
        <Button
          style={{ marginBottom: "20px", marginTop: "15px" }}
          onClick={handleAppendRelation}
          renderIcon={(props) => <Add size={24} {...props} />}
          iconDescription="Add"
        >
          Add Relationship
        </Button>
        <br></br>
      </section>
      <section>
        <Button onClick={handleSubmit(submitForm)}>
          Submit
        </Button>
        <Button kind="danger--tertiary" onClick={(data) => console.log(data)}>
          Cancel
        </Button>
      </section>
    </Form>
  );
};

export default CarbonRegistrationForm;
