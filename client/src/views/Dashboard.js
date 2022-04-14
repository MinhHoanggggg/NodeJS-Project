import { PostContext } from '../contexts/PostContext'
import { AuthContext } from '../contexts/AuthContext'
import { useContext, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'
import SinglePost from '../components/posts/SinglePost'
import UpdatePostModal from '../components/posts/UpdatePostModal'
import addIcon from '../assets/plus-circle-fill.svg'
import AddPostModal from '../components/posts/AddPostModal'
import videobg from '../assets/videobg.png'

const Dashboard = () => {

	// Contexts
	const {authState: {user: { roleid }}} = useContext(AuthContext)
	
	const {
		postState: { post, posts, postsLoading },
		getPosts,
		setShowAddPostModal,
		showToast: { show, message, type },
		setShowToast
	} = useContext(PostContext)

	useEffect(() => getPosts(), [])

	let body = null

	if (postsLoading) {
		body = (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)
	} 
	
	else if (roleid == 1) {
		body = (
			<>	

					<div className="page-banner">
                        <div className='hvrbox'>
                            <img src={videobg} alt="Mountains" class="hvrbox-layer_bottom" />
                            <div class="hvrbox-layer_top">
                                <div class="container">
                                    <div class="overlay-text text-center">
                                        <h2 style={{color: 'white'}}>The Future Begins Here</h2>
                                        <h5 style={{color: 'white'}}>Đã có hơn 136,554++ lượt học và tìm kiếm thông tin tại 3H.com!</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				<h2 className="text-center mt-3">Danh sách khóa học</h2>
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{posts.map(post => (
						<Col key={post._id} className='my-2'>
							<SinglePost post={post} />
						</Col>
					))}
				</Row>

				<OverlayTrigger placement='left' overlay={<Tooltip>THÊM KHÓA HỌC</Tooltip>}>
					
				<Button className='btn-floating' onClick={setShowAddPostModal.bind(this,true)}>
					<img src={addIcon} alt="add-post" width='60'height='60'/>
				</Button>

				</OverlayTrigger>    
			</>
		)
		
	} else {
		
		body = (
			<>	
					<div className="page-banner">
                        <div className='hvrbox'>
                            <img src={videobg} alt="Mountains" class="hvrbox-layer_bottom" />
                            <div class="hvrbox-layer_top">
                                <div class="container">
                                    <div class="overlay-text text-center">
                                        <h2 style={{color: 'white'}}>The Future Begins Here</h2>
                                        <h5 style={{color: 'white'}}>Đã có hơn 136,554++ lượt học và tìm kiếm thông tin tại 3H.com!</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				<h2 className="text-center mt-3">Danh sách khóa học</h2>
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{posts.map(post => (
						<Col key={post._id} className='my-2'>
							<SinglePost post={post} />
						</Col>
					))}
				</Row>

			</>	)
}

return <div className='landing1'><h1>{body} </h1> 

	<AddPostModal /> 
	
	{post !== null && <UpdatePostModal /> }

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