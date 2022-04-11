import { PostContext } from '../contexts/PostContext'
import { AuthContext } from '../contexts/AuthContext'
import { useContext, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'
import SinglePost from '../components/posts/SinglePost'
// import AddPostModal from '../components/posts/AddPostModal'
import UpdatePostModal from '../components/posts/UpdatePostModal'
import addIcon from '../assets/plus-circle-fill.svg'
import AddPostModal from '../components/posts/AddPostModal'
//import { UPDATE_POST } from '../contexts/constants'
//import UpdatePostModal from '../components/posts/UpdatePostModal'

const Dashboard = () => {
	// Contexts
	const {authState: {user: { username, roleid }}} = useContext(AuthContext)
	

	const {
		postState: { post, posts, postsLoading },
		getPosts,
		setShowAddPostModal,
		showToast: { show, message, type },
		setShowToast
	} = useContext(PostContext)

	// Start: Get all posts
	useEffect(() => getPosts(), [])

	let body = null

	if (postsLoading) {
		body = (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)
	} else if ( roleid==1) {
		body = (
			<>
			
                   {/* <Card className='text-center mx-5 my-5'>
					<Card.Header as='h1'>Xin Chào {username},{roleid}!</Card.Header>
					<Card.Body>
						<Card.Title>Chào mừng bạn đến với GateWay Gym</Card.Title>
						<Card.Text>
							Click the button below to track your first skill to learn
						</Card.Text>
						<Button
							variant='primary'
							onClick={setShowAddPostModal.bind(this, true)}
						>
							LestGo!
						</Button>
					</Card.Body>
				</Card> */}
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{posts.map(post => (
						<Col key={post._id} className='my-2'>
							<SinglePost post={post} />
						</Col>
					))}
				</Row>
				<OverlayTrigger placement='left' overlay={<Tooltip>THÊM KHÓA TẬP THỂ DỤC  </Tooltip>}>
				<Button className='btn-floating' onClick={setShowAddPostModal.bind(this,true)}>
					<img src={addIcon} alt="add-post" width='60'height='60'/>
				</Button>
				</OverlayTrigger>
                
			</>
		)
		

	} else {
		body = (
			<>
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{posts.map(post => (
						<Col key={post._id} className='my-2'>
							<SinglePost post={post} />
						</Col>
					))}
				</Row>


				{/* Open Add Post Moodal */}
				
				
			</>	)

	
}
return <div className='landing1'> <h1>{body} </h1> 

<AddPostModal />
{post !== null && <UpdatePostModal /> }
{/* After post is added, show toast */}
<Toast show={show} style={{position: 'fixed',top:'20%', right: '10px' }} className={`bg-${type} text-white`}
	onClose={setShowToast.bind(this,{
		show: false, 
		message: '', 
		type: null
		})}
		delay={3000}
		autohide
		>
	<Toast.Body>
		<strong>{message}</strong>
	</Toast.Body>
</Toast>
</div>

}

export default Dashboard