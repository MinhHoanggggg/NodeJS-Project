import Button from 'react-bootstrap/Button'
import { PostContext } from '../../contexts/PostContext'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

const ActionButtons = ({ _id }) => {
	
	const { deletePost, findPost, setShowUpdatePostModal } = useContext(PostContext)
	
	const {authState: {user: { roleid }}} = useContext(AuthContext)

	const choosePost = postId => {
		findPost(postId)
		setShowUpdatePostModal(true)
	}

	const openCourse = postId => {
		window.location.assign('/course/' + postId);
	}
	 
	if(roleid == 1)
	return (
		<>	
			<Button className="btn btn-info m-1" onClick={openCourse.bind(this, _id)}>
				Xem khóa học
			</Button>

			<Button className="btn m-1" onClick={choosePost.bind(this, _id)}>
				Chỉnh sửa
			</Button>

			<Button className="btn btn-danger m-1" onClick={deletePost.bind(this, _id)}>
				Xóa
			</Button>
		</>
	)
	
	else
	
	{
		return(
				<>      
					<Button className="btn btn-info m-1" onClick={openCourse.bind(this, _id)}>
						Xem khóa học
					</Button>	
				</>
			)
		};	
}

export default ActionButtons