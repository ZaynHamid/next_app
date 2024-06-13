import connectDB from "@/lib/connectDB"
import User from "@/models/users"

const create = async (formData) => {
    'use server'
    await connectDB()
    const data = await User.create({
        name: formData.get("name"),
        age: formData.get("age"),
    })
    console.log('data submited', data)
}

const Register = () => {
    return (<>
        <form action={create}>
            <p>Name:</p>
            <input type="text" name="name" className="text-black"/>
            <p>Age:</p>
            <input type="number" name="age" className="text-black"/><br/><br/>
            <input type="submit" value='Submit'/>
        </form>
    </>)
}

export default Register