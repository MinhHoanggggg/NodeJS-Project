import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Banner from '../components/layout/Banner'
import NavbarHome from '../components/layout/NavbarHome'
import JavaScript from '../assets/JavaScript.png'
import Csharp from '../assets/Csharp.png'
import java from '../assets/java.png'
import Ccong from '../assets/Ccong.png'
import Footer from '../components/layout/Footer'

const trangchu = () => {
    return (
                <>  
                    <NavbarHome/>
                    <Banner />
                    <Row>
                        
                        <Col className='landing1 text-center '>

                        <h2 className='mt-5'>Khóa Học Nổi Bật</h2>

                        <div className='container-sm'>
                            <Row className='row-cols-1 row-cols-md-4 mx-auto mt-3'>

                               <Col className='my-2'>
                                    <div class="card">
                                        <a href='/login'><img class="card-img-top" style={{ width: '250px', height: '250px'}} src={Ccong} alt="Card image cap" /></a>
                                        <div class="card-body">
                                            <p class="card-text post-title">Khóa học C++</p>
                                        </div>
                                    </div>
                               </Col>

                               <Col className='my-2'>
                                    <div class="card">
                                        <a href='/login'>
                                            <img class="card-img-top" style={{ width: '250px', height: '250px'}} src={Csharp} alt="Card image cap" />
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text post-title">Khóa học C#</p>
                                        </div>
                                    </div>
                               </Col>

                               <Col className='my-2'>
                                    <div class="card">
                                        <a href='/login'>
                                            <img class="card-img-top" style={{ width: '250px', height: '250px'}} src={JavaScript} alt="Card image cap" />
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text post-title">Khóa học JavaScript</p>
                                        </div>
                                    </div>
                               </Col>

                               <Col className='my-2'>
                                    <div class="card">
                                        <a href='/login'>
                                            <img class="card-img-top" style={{ width: '250px', height: '250px'}} src={java} alt="Card image cap" />
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text post-title">Khóa học Java</p>
                                        </div>
                                        
                                    </div>
                               </Col>

                            </Row>
				        </div>

                        <h2 className='mt-5'>Kho template miễn phí</h2>

                        <div className='container-sm'>
                            <Row className='row-cols-1 row-cols-md-4 mx-auto mt-3'>

                               <Col className='my-2'>
                                    <div class="card">
                                        <a  
                                            href='/login'>
                                                <img class="card-img-top" 
                                                style={{ width: '250px', height: '250px'}} 
                                            src='https://themehunt.com/media/com_product/products/thumb/1526856/thumbnail.png' 
                                            alt="Card image cap" />
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text post-title">Khóa học C++</p>
                                        </div>
                                    </div>
                               </Col>

                               <Col className='my-2'>
                                    <div class="card">
                                        <a  
                                            href='/login'>
                                                <img class="card-img-top" 
                                                style={{ width: '250px', height: '250px'}} 
                                            src='https://themehunt.com/media/com_product/products/thumb/1526528/thumbnail.png' 
                                            alt="Card image cap" />
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text post-title">Khóa học C#</p>
                                        </div>
                                    </div>
                               </Col>

                               <Col className='my-2'>
                                    <div class="card">
                                        <a  
                                            href='/login'>
                                                <img class="card-img-top" 
                                                style={{ width: '250px', height: '250px'}} 
                                            src='https://themehunt.com/media/com_product/products/thumb/1527109/thumbnail.png' 
                                            alt="Card image cap" />
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text post-title">Khóa học JavaScript</p>
                                        </div>
                                    </div>
                               </Col>

                               <Col className='my-2'>
                                    <div class="card">
                                        <a  
                                            href='/login'>
                                                <img class="card-img-top" 
                                                style={{ width: '250px', height: '250px'}} 
                                            src='https://themehunt.com/media/com_product/products/thumb/1525606/thumbnail.png' 
                                            alt="Card image cap" />
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text post-title">Khóa học Java</p>
                                        </div>
                                        
                                    </div>
                               </Col>

                            </Row>
				        </div>

                        </Col>
                    </Row> 

                    <Footer />
                
                </>
            )      
}

export default trangchu



