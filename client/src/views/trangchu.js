import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Alert} from 'reactstrap'

const trangchu = () => {
    return (
                <>  
                    <Row className='landing2' style={{ marginRight: 0 }}>
                        <Col className='landing2 text-center '>
                        <h1>The Future Begins Here</h1>
                        <h3>Đã có hơn 136,554++ lượt học và tìm kiếm thông tin tại 3H.com!</h3>
                            <Button
                                variant='primary bg-dat btn-danger'
                                href='/'
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



