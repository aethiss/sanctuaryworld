import * as Yup from 'Yup'

let proposalSchema = Yup.object().shape({
  creator: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  type: Yup.string().required(),
  user: Yup.string().required(),
  // creationDate: Yup.date().default(() => Date.now()),
})

export const checkProposalSchema = (params) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    proposalSchema
      .validate(params)
      .catch(err => {
        // eslint-disable-next-line no-undef
        console.warn(err)
      })
    proposalSchema
      .isValid(params)
      .then(function (valid) {
        resolve(valid)
      })
  })
}
