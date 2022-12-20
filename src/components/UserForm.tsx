import { useState } from "react"

interface IUserFormValue{
    name: string;
    age: number;
}
const FormValueSet = {
   name: '',
   age: 0
}
export function UserForm () {
    const [form, setForm] = useState<IUserFormValue>(FormValueSet);
    const onChangeName = (event: any) => {
        setForm({
            ...form,
            name: event.target.value,
        })
    };
    const onSubmitForm = (event: any) => {
console.log(form)    }
return(
    <div>
        
        userName
<input
type='text'
name='username'
value={form.name}
onChange={onChangeName} />
<button  onClick={onSubmitForm}>Submit Button</button>
       
    </div>
)
}