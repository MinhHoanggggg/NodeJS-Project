import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'
const LoginForm = () => {
    //Context
    const { loginUser } = useContext(AuthContext)
    // //Router
    // const history = useHistory()
    //Local state
    const [LoginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const [alert, setAlert] = useState(null)
    const { username, password } = LoginForm
    const onChangeLoginForm = event => setLoginForm({ ...LoginForm, [event.target.name]: event.target.value })
    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(LoginForm)
            if (!loginData.success) {
                // history.push('/dashboard')
                setAlert ({type:'danger', message:loginData.message})
                setTimeout(()=> setAlert(null),5000)

            }
            
            



        } catch (error) {
            console.log(error)

        }


    }
    return (
        <> <Form className='my-4' onSubmit={login}>
        <AlertMessage info={alert}/>
            <Form.Group>
                <Form.Control className='mb-3' type='text' placeholder='Tài khoản' name='username' required
                    value={username}
                    onChange={onChangeLoginForm}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control className='mb-3' type='password' placeholder='Mật khẩu' name='password' required
                    value={password}
                    onChange={onChangeLoginForm}
                />
            </Form.Group>
            <Button variant='success' type='submit'>Đăng nhập</Button>
        </Form>
            <p >
                Bạn chưa có tài khoản?
                <Link to='/register'>
                    <Button variant='info' size='sm' className='btn-regis ml-5'>Đăng ký</Button>
                </Link>
            </p>
           
            <p >
                Quay lại trang chủ
                <Link to='/trangchu'>
                    <Button variant='info' size='sm' className='btn-regis ml-5'>Quay lại trang chủ</Button>
                </Link>
            </p>
        </>
    )
}
export default LoginForm  