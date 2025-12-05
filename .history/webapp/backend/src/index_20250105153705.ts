import express from 'express'


  const regForm = {
  title: "Registration Form",
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      placeholder: "Enter your username"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email"
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Enter your password"
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      required: true,
      placeholder: "Re-enter your password"
    },
    {
      name: "submit",
      type: "submit",
      label: "Register"
    }
  ]
};

const expressApp = express()
expressApp.get('/ping', (req, res) => {
    res.send('pong')
})    // endpoints

expressApp.use('/trpc')


expressApp.get('/regForm', (req, res) => {  //endpoint с адресом на форму регистрации
    res.send(regForm)
})
expressApp.listen(3000, () => {
    console.log('Listening at http://localhost:3000')
})

