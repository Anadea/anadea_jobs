import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const validate = values => {
  console.log('values', values)
  const errors = {}
  if (!values.first_name) {
    errors.first_name = true
  } else if (values.first_name.length > 30) {
    errors.first_name = true
  }

  if (!values.phone) {
    errors.phone = true
  } else if (
    !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{9,12}$/i.test(values.phone)
  ) {
    errors.phone = true
  }

  if (!values.email) {
    errors.email = true
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = true
  }

  if (values.skype && !/^[a-z][a-z0-9_\-.,]{5,31}$/i.test(values.skype)) {
    errors.skype = true
  }

  console.log('errors', errors)
  return errors
}

const ApplyFormFormik = ({ data }) => {
  const [validationFlag, setValidationFlag] = useState(false)
  const [resumeName, setResumeName] = useState('')

  useEffect(() => {}, [validationFlag, resumeName])

  const formik = useFormik({
    initialValues: {
      job_position: data.frontmatter.title,
      // first_name: 'qwe',
      // phone: '11111111111',
      // email: 'qwe@we.we',
      first_name: '',
      phone: '',
      email: '',
      skype: '',
      resume_file: [],
    },
    validate,
    onSubmit: values => {
      
      console.log('on submit', values)

      const formData = new FormData();

      formData.append('job_application', values)
      formData.append('token', process.env.FORM_TOKEN)
      console.log('formData', formData)
      axios({
        method: 'POST',
        url: `${process.env.API}/jobs`,
        // headers: {
        //   auth: {
        //     username: "anahoret",
        //     password: "epyfnm"
        //   },
        //   "Content-Type": "multipart/form-data"
        // },
        headers: {
          Authorization: `Basic ${process.env.HEADER_TOKEN}`,
          "Content-Type": "multipart/form-data"
        },
        formData,
      }).then(res => {
        console.log(values)
        console.log(res.values)
      })
      // formik.resetForm()
      // setResumeName('')
    },
  })

  const handleAddingFile = event => {
    const files = event.target.files
    let myFiles = Array.from(files)
    if (myFiles.length && myFiles[0]) {
      setResumeName(myFiles[0].name)
      formik.setFieldValue('resume_file', myFiles)
    }
  }

  return (
    <div className="FormBlock">
      {validationFlag &&
      Object.values(formik.errors).find(key => key === true) ? (
        <div className="formInvalid">
          <img
            className="formInvalid-picture"
            src="../../images/icons/validator.png"
          />
        </div>
      ) : null}

      <div className="FormBlue u-bg-royal-blue">
        <div className="FormBlue-title">
          <p className="Typography Typography--white u-bold formBlue-title">
            Apply now
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="InputGroup">
              <div className="InputGroup-input">
                <input
                  className="Input Input--large Input--autofillDark Typography Typography--white"
                  id="first_name"
                  type="text"
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                />
              </div>
              <div className="InputGroup-label">
                <label
                  className="Label Typography Typography--white d-flex align-items-center"
                  htmlFor="name"
                >
                  Name:
                </label>
                {validationFlag && formik.errors.first_name ? (
                  <img
                    className="inputInvalid"
                    src="../../images/icons/exclamationpoint.svg"
                  />
                ) : null}
              </div>
            </div>

            <div className="InputGroup">
              <div className="InputGroup-input">
                <input
                  className="Input Input--large Input--autofillDark Typography Typography--white"
                  id="phone"
                  type="text"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </div>
              <div className="InputGroup-label">
                <label
                  className="Label Typography Typography--white d-flex align-items-center"
                  htmlFor="phone"
                >
                  Phone:
                </label>
                {validationFlag && formik.errors.phone ? (
                  <img
                    className="inputInvalid"
                    src="../../images/icons/exclamationpoint.svg"
                  />
                ) : null}
              </div>
            </div>

            <div className="InputGroup">
              <div className="InputGroup-input">
                <input
                  className="Input Input--large Input--autofillDark Typography Typography--white"
                  id="emeil"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="InputGroup-label">
                <label
                  className="Label Typography Typography--white d-flex align-items-center"
                  htmlFor="email"
                >
                  Email:
                </label>
                {validationFlag && formik.errors.email ? (
                  <img
                    className="inputInvalid"
                    src="../../images/icons/exclamationpoint.svg"
                  />
                ) : null}
              </div>
            </div>

            <div className="InputGroup">
              <div className="InputGroup-input">
                <input
                  className="Input Input--large Input--autofillDark Typography Typography--white"
                  id="skype"
                  type="text"
                  name="skype"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.skype}
                />
              </div>
              <div className="InputGroup-label">
                <label
                  className="Label Typography Typography--white d-flex align-items-center"
                  htmlFor="skype"
                >
                  Skype:
                </label>
              </div>
            </div>

            <div className="InputGroup InputGroup--noBordered">
              <label
                className="d-flex u-w-100 align-items-center justify-content-center"
                htmlFor="resumeField"
              >
                <span className="FormBlue-attachmentIcon u-opacity-6">
                  <img src="../../images/icons/clip.png" />
                </span>
                <span className="FormBlue-attachmentLabel jsFileInputLabel Typography Typography--white Typography--body2 d-flex align-items-center">
                  {resumeName ? resumeName : 'Attach a resume'}
                </span>
              </label>
              <div className="d-none">
                <input
                  data-size="5000"
                  accept=".png, .jpg, .jpeg, .pdf, .doc"
                  className="jsFileInput"
                  type="file"
                  name="resumeField"
                  id="resumeField"
                  onChange={e => handleAddingFile(e)}
                />
              </div>
            </div>

            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="Button Button--white Typography Typography---royal-blue u-w-100"
              onClick={() =>
                setValidationFlag(
                  Object.values(formik.errors).find(key => key === true),
                )
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {data.frontmatter.linkedIn && (
        <a href={data.frontmatter.linkedIn} target="_blank">
          <button
            name="button"
            className="Button Button--white Typography Typography---royal-blue u-w-100 button-applyLinkedin"
          >
            <span>Apply with LinkedIn</span>
          </button>
        </a>
      )}
    </div>
  )
}

export default ApplyFormFormik
