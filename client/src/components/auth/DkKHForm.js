import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, Redirect } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'


// import { Redirect } from 'react-router-dom'
// import trangchu from '../../views/trangchu'
// import NavbarMenu from '../layout/NavbarMenu'
// import { useHistory } from 'react-router-dom'
const DkkHForm = () => {
     //Context
     const { DkkhUser } = useContext(AuthContext)
     // //Router
    //  const history = useHistory()
     //Local state
     const [DkKHForm, setDkKHForm] = useState({
         username: '',
         phonenumber: '',
         email:''
     })
     const [alert, setAlert] = useState(null)
    //  const [isComplete, setIsComplete] = useState(false)
     const { username, phonenumber,email } = DkKHForm
     const onChangeDkKHForm = event => setDkKHForm({ ...DkKHForm, [event.target.name]: event.target.value })
     const registerKh  = async event => {
         event.preventDefault() // tranh submit form theo kieu goc form.HTML
        
         try {
             const registerData = await DkkhUser(DkKHForm)
             console.log(registerData)
            if (registerData.success===true) {
                console.log('condition ok', registerData.success===true)
                setAlert({type:'success',message:'Đăng kí khóa tập thành công, chúng tôi sẽ liên hệ bạn sớm nhất, vui lòng quay lại trang chủ'})
                setTimeout(()=>setAlert(null),5000)
                // setIsComplete(true);
             }
             
            //  if (!registerData.success) 
            //  {
            //      setAlert ({type:'danger', message:registerData.message})
            //      setTimeout(()=> setAlert(null),5000)
 
            //  }
 
 
 
          } catch (error) {
              console.log(error)
 
          }
 
 
     }
    // if(isComplete) {
    //     console.log('haha');
    //     return  <Redirect to='/trangchu' />;
    // }
    console.log('hihi');
    return (
        <> <Form className='my-4' onSubmit={registerKh}>
        <AlertMessage info={alert}/>
            <Form.Group>
                <Form.Control className='mb-3' type='text' placeholder='Username' name='username' required value={username} onChange={onChangeDkKHForm} />
            </Form.Group>
            <Form.Group>
                <Form.Control className='mb-3' type='text' placeholder='phonenumber' name='phonenumber' required value={phonenumber} onChange={onChangeDkKHForm} />
            </Form.Group>
            <Form.Control className='mb-3' type='text' placeholder='email' name='email' required value={email} onChange={onChangeDkKHForm} />
            <Button variant='success' type='submit' >ĐĂNG KÍ KHÓA TẬP MIỄN PHÍ</Button>
            {/* onClick = {() =>{ history.push("/trangchu");}} */}
            
           

            {/* <Redirect to='/trangchu' /> */}
        </Form>
        <p >
                Quay lại trang chủ
                <Link to='/trangchu'>
                    <Button variant='info' size='sm' className='btn-regis ml-5'>Quay lại trang chủ</Button>
                </Link>
            </p>
            <p >
                Đã có tài khoản rồi?
                <Link to='/login'>
                    <Button variant='info' size='sm' className='btn-regis ml-5'>Login</Button>
                </Link>
            </p>
        </>
    )
}
export default DkkHForm