import { useParams } from 'react-router-dom';
import {domain} from '../contexts/constants';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Banner from '../components/layout/Banner'

const DetailCourse = () => {

	let { url } = useParams();

    let Url = `${domain}${url}`

    return (
		<>
            <div className="landing1">
                    <Banner />
                    <div class="blog-single-1x">
                        <div class="container-sm">
                            <div style={{backgroundColor: 'white'}} class="row text-center p-5">
                                <div class="col-md-12">
                                    <div class="blog-single-left-content">
                                        <div class="row">
                                            <div class="col-9">
                                                <p ><b>Thời gian học:</b> 1 giờ | <b>Nguồn:</b> 3H.com | <b>Lượt xem:</b> 243 lượt xem</p>
                                            </div>
                                            <div class="col-3" >
                                                <Button class="btn-small">Báo lỗi bài học</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                <Container className="text-center mt-5">
                <Col className="course-inner">
                    <div className="container-sm" style={{backgroundColor: 'white'}}>
                    <h3 className="mt-3" style={{color: 'blue'}} >Nội dung bài học</h3>
                        <h4>Không hiển thị nội dung bài viết, hãy nhấn ctrl + F5 để load lại trang web.</h4>
                        <Container>
                            <iframe src={Url} width="1010" height="1000" frameborder="10" scrolling="yes"></iframe>
                        </Container>
                    </div>
                </Col>
                </Container>
            </div>
        </>
	)
    
}

export default DetailCourse