import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const About = () => {
	return (
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
			</Col>
		</Row>
		
	
	)
	
	
}

export default About