import { Form } from '../Other/Form'
import { TextInput } from '../Other/TextInput'

export const AddEmployeesVanillaForm = ({
  handleVanillaFormSubmit,
  name,
  title,
  setName,
  setTitle,
}) => (
  <Form onClick={handleVanillaFormSubmit} btnText='Add Employee (Vanilla)'>
    <TextInput
      placeholder='Insert name...'
      value={name}
      type='text'
      onChange={(e) => setName(e.target.value)}
    />
    <TextInput
      placeholder='Insert title...'
      value={title}
      type='text'
      onChange={(e) => setTitle(e.target.value)}
    />
  </Form>
)
