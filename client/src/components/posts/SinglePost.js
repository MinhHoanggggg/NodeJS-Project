import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ActionButtons from './ActionButtons'

const SinglePost = ({ post: { _id, status, title, description, url, img}  }) => (

	<Card
		className='shadow'
	>
		<Card.Body>
			<Card.Title>
				<Row>
					<Col className='sm-6'>
					<img style={{ width: '200px', height: '200px'}} src={img} />
					</Col>
					
					<Col className='text-right sm-6'>
						<Badge bg={status === 'NHẬP MÔN' ? 'success': (status === 'TRUNG BÌNH' ? 'warning': 'danger')}>
							{status}
						</Badge>
						<Card.Text className='post-title mt-3'>{title}</Card.Text>
						<Card.Text className='post-des'>{description}</Card.Text>
					</Col>
				</Row>
				<div className='mt-3 text-center'>
					<ActionButtons url={url} _id={_id} />
				</div>
				
			</Card.Title>
			
		</Card.Body>
	</Card>
)

export default SinglePost