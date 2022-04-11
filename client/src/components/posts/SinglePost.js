import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ActionButtons from './ActionButtons'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useEffect } from 'react'



const SinglePost = ({ post: { _id, status, title, description, url,user}  }) => (
	
	
	
	<Card
		className='shadow'
		border={
			status ==='GYM KÈM PT' ?'success' : status === 'YOGA KÈM PT' ? 'warning' : 'danger'
		}
	>
		<Card.Body>
			<Card.Title>
				<Row>
					<Col>
						<p className='post-title'>{title}</p>
						<Badge bg={status === 'GYM KÈM PT' ? 'success': (status === 'YOGA KÈM PT' ? 'warning': 'danger')}
						>
							{status}
						</Badge>
					</Col>
					<Col className='text-right'>
						<ActionButtons url={url} _id={_id} />
						<p className='text-right'>ID :{user}</p>
					</Col>
				</Row>
			</Card.Title>
			<Card.Text>{description}</Card.Text>
		</Card.Body>
	</Card>
)

export default SinglePost