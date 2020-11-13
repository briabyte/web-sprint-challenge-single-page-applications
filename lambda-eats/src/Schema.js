import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be 2 chars long"),
  
  phone: yup
    .string()
    .required("Must be valid phone number")
    .min(9, "Must include area code"),
 
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "xl"], "size is required"),
 
  pepperoni: yup.boolean(),
  greenpepper: yup.boolean(),
  pineapple: yup.boolean(),
  mushroom: yup.boolean(),
});