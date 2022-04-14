import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ActionButtons from './ActionButtons'

const SingleCourse = ({ course: { _id, title, description }  }) => (

	<Card>
		<Card.Body>
			<Card.Title>
				<Row>
				
					<Col>
						<p className='post-title'>{title}</p>
					</Col>
					
					<Col className='text-center'>
						<ActionButtons _id={_id} />
					</Col>

				</Row>
			</Card.Title>
			<Card.Text>{description}</Card.Text>
		</Card.Body>
	</Card>
)

export default SingleCourse