import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'
const RegisterForm = () => {
     //Context
     const { registerUser } = useContext(AuthContext)
     // //Router
     // const history = useHistory()
     //Local state
     const [RegisterForm, setRegisterForm] = useState({
         username: '',
         password: '',
         confirmPassword:''
     })
     const [alert, setAlert] = useState(null)
     const { username, password,confirmPassword } = RegisterForm
     const onChangeRegisterForm = event => setRegisterForm({ ...RegisterForm, [event.target.name]: event.target.value })
     const register  = async event => {
         event.preventDefault()
         if(password!==confirmPassword){
            setAlert({ type:'danger' ,message: 'Password khong khop' })
            setTimeout(()=> setAlert(null), 5000)
            return
         }
 
         try {
             const registerData = await registerUser(RegisterForm)
             if (!registerData.success) 
             {
                 setAlert ({ type:'danger', message: registerData.message })
                 setTimeout(()=> setAlert(null), 5000)
 
             }
 
 
 
         } catch (error) {
             console.log(error)
 
         }
 
 
     }
    return (
        <> <Form className='my-4' onSubmit={register}>
        <AlertMessage info={alert}/>
            <Form.Group>
                <Form.Control className='mb-3' type='text' placeholder='Tài khoản' name='username' required value={username} onChange={onChangeRegisterForm}/>
            </Form.Group>
            <Form.Group>
                <Form.Control className='mb-3' type='password' placeholder='Mật khẩu' name='password' required value={password} onChange={onChangeRegisterForm}/>
            </Form.Group>
            <Form.Control className='mb-3' type='password' placeholder='Xác nhận khẩu' name='confirmPassword' required value={confirmPassword} onChange={onChangeRegisterForm}/>
            <Button variant='success' type='submit'>Đăng ký</Button>
        </Form>
            <p >
                Đã có tài khoản rồi?
                <Link to='/login'>
                    <Button variant='info' size='sm' className='btn-regis ml-5'>Đăng Nhập</Button>
                </Link>
            </p>
        </>
    )
}
export default RegisterForm