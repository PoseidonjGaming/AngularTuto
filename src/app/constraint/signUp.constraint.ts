export const signUpConstraint={
  mail: {
    required: 'required',
    email: 'Mauvais format'
  },
  pwd: {
    required: 'required'
  },
  cpwd:{
    required: 'required',
    check_password: 'not the same'
  },
  terms:{
    required:'required'
  }
}
