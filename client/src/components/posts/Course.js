import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ActionButtons from './ActionButtons'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useEffect } from 'react'

const Course = ({ post: { _id}  }) => (

	<Card
	>
		<Card.Body>
			<Card.Title>
				<Row>
					<Col>
						<p className='post-title'>{title}</p>
						<Badge
						>
							Xem danh sách bài học
						</Badge>
					</Col>
					<Col className='text-right'>
						<ActionButtons url={url} _id={_id} />
						{/* <p className='text-right'>ID :{user}</p> */}
					</Col>
				</Row>
			</Card.Title>
			<Card.Text>{description}</Card.Text>
		</Card.Body>
	</Card>
)

export default Course