import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ActionButtons from './ActionButtons'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useEffect } from 'react'

const SingleCourse = ({ course: { _id, title, description, status}  }) => (

	<Card
		className='shadow'
		border={
			status ==='NHẬP MÔN' ? 'success' : status === 'TRUNG BÌNH' ? 'warning' : 'danger'
		}
	>
		<Card.Body>
			<Card.Title>
				<Row>
					<Col>
						<p className='post-title'>{title}</p>
						<Badge bg={status === 'NHẬP MÔN' ? 'success': (status === 'TRUNG BÌNH' ? 'warning': 'danger')}
						>
						{status}
						</Badge>
					</Col>
					
					<Col className='text-right'>
						<ActionButtons _id={_id} />
						{/* <p className='text-right'>ID :{user}</p> */}
					</Col>
				</Row>
			</Card.Title>
			<Card.Text>{description}</Card.Text>
		</Card.Body>
	</Card>
)

export default SingleCourse