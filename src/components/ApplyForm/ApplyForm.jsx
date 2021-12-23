import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const validate = values => {
  const errors = {}
  if (!values.full_name) {
    errors.full_name = true
  } else if (values.full_name.length > 30) {
    errors.full_name = true
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
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(values.email)) {
    errors.email = true
  }

  if (values.skype && !/[a-z0-9_\-.,:]$/i.test(values.skype)) {
    errors.skype = true
  }

  if (values.resume_file.length === 0) {
    errors.resume_file = true
  }
  return errors
}

const ApplyFormFormik = ({ data }) => {
  const [validationFlag, setValidationFlag] = useState(false)
  const [resumeName, setResumeName] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)
  const [fileMessage, setFileMessage] = useState(false)

  useEffect(() => {}, [validationFlag, resumeName])

  const formik = useFormik({
    initialValues: {
      'bot-field': '',
      'form-name': 'resume',
      job_position: data.frontmatter.title,
      full_name: '',
      phone: '',
      email: '',
      skype: '',
      resume_file: [],
    },
    validate,
    onSubmit: values => {
      sendForm(values)
    },
  })

  const handleAddingFile = event => {
    const files = event.target.files
    let myFiles = Array.from(files)
    if (myFiles.length && myFiles[0]) {
      const allowedExtensions = ['jpg', 'png', 'jpeg', 'pdf', 'doc', 'docx']
      const size = myFiles[0].size / 1024 / 1024 < 5
      const format = myFiles[0].name.split('.').pop()
      if (size && allowedExtensions.includes(format)) {
        setResumeName(myFiles[0].name)
        formik.setFieldValue('resume_file', myFiles[0])
        setFileMessage(false)
      } else {
        setFileMessage(true)
      }
    }
  }

  const sendForm = data => {
    const formData = new FormData()
    for (let i in data) {
      if (i !== 'bot-field' && i !== 'form-name') {
        formData.append(`job_application[${i}]`, data[i])
      } else {
        formData.append(i, data[i])
      }
    }

    formData.append('token', process.env.GATSBY_FORM_TOKEN)

    axios
      .post(`${process.env.GATSBY_API}/jobs`, formData)
      .then(res => {
        if (res && res.status === 200) {
          formik.resetForm()
          setResumeName('')
          setSuccessMessage(true)
          setTimeout(() => {
            setSuccessMessage(false)
          }, 3000)
        }
      })
      .catch(err => {
        console.log('error', err)
      })
  }

  return (
    <div className="FormBlock">
      <div
        className={`formInvalid ${
          Object.values(formik.errors).find(key => key === true)
            ? 'formInvalid--show'
            : ''
        }`}
      >
        <img
          className="formInvalid-picture"
          src="../../images/icons/validator.png"
        />
      </div>
      <div className="FormBlue u-bg-cerise-red">
        <div className="FormBlue-title">
          <p className="Typography Typography--white u-bold formBlue-title">
            Apply now
          </p>
          <form
            name="resume"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            onSubmit={formik.handleSubmit}
          >
            <p className="d-none">
              <label>
                Don’t fill this out if you’re human:{' '}
                <input
                  name="bot-field"
                  onChange={formik.handleChange}
                  value={formik.values['bot-field']}
                />
              </label>
            </p>
            <div className="InputGroup">
              <div className="InputGroup-input">
                <input
                  className="Input Input--large Input--autofillDark Typography Typography--white"
                  id="full_name"
                  type="text"
                  name="full_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.full_name}
                />
              </div>
              <div className="InputGroup-label">
                <label
                  className="Label Typography Typography--white d-flex align-items-center"
                  htmlFor="name"
                >
                  Name:
                </label>
                <img
                  className={`inputInvalid ${
                    validationFlag && formik.errors.full_name
                      ? 'inputInvalid--show'
                      : ''
                  }`}
                  src="../../images/icons/exclamationpoint.svg"
                />
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
                <img
                  className={`inputInvalid ${
                    validationFlag && formik.errors.phone
                      ? 'inputInvalid--show'
                      : ''
                  }`}
                  src="../../images/icons/exclamationpoint.svg"
                />
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
                <img
                  className={`inputInvalid ${
                    validationFlag && formik.errors.email
                      ? 'inputInvalid--show'
                      : ''
                  }`}
                  src="../../images/icons/exclamationpoint.svg"
                />
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
                <img
                  className={`inputInvalid ${
                    validationFlag && formik.errors.skype
                      ? 'inputInvalid--show'
                      : ''
                  }`}
                  src="../../images/icons/exclamationpoint.svg"
                />
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
                <img
                  className={`inputInvalid ${
                    validationFlag && formik.errors.resume_file
                      ? 'inputInvalid--show'
                      : ''
                  }`}
                  src="../../images/icons/exclamationpoint.svg"
                />
              </label>
              <div className="d-none">
                <input
                  data-size="5000"
                  accept=".png, .jpg, .jpeg, .pdf, .doc, .docx"
                  className="jsFileInput"
                  type="file"
                  name="resumeField"
                  id="resumeField"
                  onChange={e => handleAddingFile(e)}
                />
              </div>
            </div>

            <div
              className={`Typography Typography--white fileMessage ${
                fileMessage ? 'fileMessage--show' : ''
              }`}
            >
              <p>
                Please upload files having extensions: .jpg, .png, .pdf, .doc
              </p>
              <p>File size must under 5mb.</p>
            </div>
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="Button Button--white-red Typography Typography--cerise-red u-w-100"
              onClick={() =>
                setValidationFlag(
                  Object.values(formik.errors).find(key => key === true),
                )
              }
            >
              Submit
            </button>

            <div
              className={`FormBlue-successMessage Typography--body2 Typography--white ${
                successMessage ? 'FormBlue-successMessage--show' : ''
              }`}
            >
              Request has been sent
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplyFormFormik
