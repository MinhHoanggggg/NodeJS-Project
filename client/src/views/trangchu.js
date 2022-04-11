// import LoginForm from '../components/auth/LoginForm'
// import RegisterForm from '../components/auth/RegisterForm'
// import DkkHForm from '../components/auth/DkKHForm'
// import { AuthContext } from '../contexts/AuthContext'
// import { useContext } from 'react'
// import {Redirect} from 'react-router-dom'
// import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Alert} from 'reactstrap'
// import { useHistory } from 'react-router-dom'

// import { AuthContext } from '../../contexts/AuthContext'
// import AlertMessage from '../layout/AlertMessage'
// import DKKHForm from '../components/auth/DkKHForm'
const trangchu = () => {
    // let history = useHistory()
    
    //     const { username, phonenumber,email } = registerKH
    //  const registerKH = async event => {
    //         event.preventDefault()
    //         if(phonenumber){
    //         //    setAlert({type:'danger',message:'Password khong khop'})
    //         //    setTimeout(()=>setAlert(null),5000)
    //         console.log("Sai roi")
    //            return
    //         }
    
    //         try {
    //             const registerData = await registerKH()
    //             if (!registerData.success) 
    //             {
    //                 console.log("HIHI")
    //                 // setAlert ({type:'danger', message:registerData.message})
    //                 // setTimeout(()=> setAlert(null),5000)
    
    //             }
    
    
    
        //     } catch (error) {
        //         console.log(error)
    
        //     }
    
    
        // }
        return (
       <>
            
            <Row className='landing2' style={{ marginRight: 0 }}>
           
                <Col className='landing2 text-center '>
                <h1>KHÁM PHÁ TRUNG TÂM THỂ HÌNH GATEWAY GYM </h1>
                <h3>Với những dịch vụ cao cấp, đáp ứng mọi nhu cầu luyện tập và chăm sóc sức khỏe theo tiêu chuẩn 5 sao của giới thượng lưu, tham gia Hội Viên California Centuryon để tận hưởng những đặc quyền không giới hạn dành cho bạn ngay hôm nay!</h3>
    
                    <Button

                        variant='primary bg-dat btn-danger'
                        href='https://www.facebook.com/ha.dat.921/'
                        size='lg'
                    >
                        TÌM HIỂU THÊM
                    </Button>
                    <div className='nam an' >
                    <p >
                   Don't have an account?
                    <Link to='/login'>
                        <Button variant='info' size='sm' className='btn-regis ml-5'>DangNhap</Button>
                    </Link>
                    
                </p>
                </div>
                <p >
                    Don't have an account?
                    <Link to='/register'>
                        <Button variant='info' size='sm' className='btn-regis ml-5'>Register</Button>
                    </Link>
                </p>
                <p >
                Đăng Kí Khóa Tập Miễn Phí?
                <Link to='/registerKH'>
                    <Button variant='info' size='sm' Redirect ='/login'  className='btn-regis ml-5'>Đăng Kí Khóa Tập Miễn Phí</Button>

                </Link>
                
            </p>
            <p >
                    Xem các khóa tập
                    <Link to='/dashboard'>
                        <Button variant='info' size='sm' className='btn-regis ml-5'>Xem ngay</Button>
                    </Link>
                </p>
                    
                </Col>
            </Row> 
            
                
                </>
            )
            
    
           
            
        
        
        
        
     }
export default trangchu



