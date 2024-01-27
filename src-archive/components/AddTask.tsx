import { useTodosContext } from "../context/TodosContext"
import { useFormik } from "formik"
import * as Yup from 'yup'
import React from "react";


const AddTask = () => {
    const { addTask } = useTodosContext()

    const formik = useFormik({
        initialValues: {
            text: "",
            day: "",
            reminder: false
        },
        validationSchema: Yup.object({
            text: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
            day: Yup.string().required("Required"),
            reminder: Yup.boolean().required("Required")
        }),
        onSubmit: (values) => {
            addTask(values);
        }
    })

    return (
        <form className="add-form" onSubmit={formik.handleSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    id="text"
                    type='text'
                    placeholder='Add task'
                    value={formik.values.text}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.text && formik.errors.text && <p style={{ color: 'red' }}>{formik.errors.text}</p>}
            </div>
            <div className="form-control">
                <label>Day & time</label>
                <input
                    id="day"
                    type='text'
                    placeholder='Add day & time'
                    value={formik.values.day}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.day && formik.errors.day && <p style={{ color: 'red' }}>{formik.errors.day}</p>}
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input
                    id="reminder"
                    type='checkbox'
                    // value={formik.values.reminder}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
            </div>
            <input type='submit' value='Save task' className="btn btn-block" />
        </form>
    )
}

export default AddTask
