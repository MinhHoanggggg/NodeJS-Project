import Button from 'react-bootstrap/Button'
import playIcon from '../../assets/play-btn.svg'
import editIcon from '../../assets/pencil.svg'
import deleteIcon from '../../assets/trash.svg'
import { CourseContext } from '../../contexts/CourseContext'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useState } from 'react'

const ActionButtons = ({ url, _id }) => {
	
	const { deleteCourse, findCourse, setShowUpdateCourseModal } = useContext(
		CourseContext
	)
	
	const {authState: {user: { username, roleid }}} = useContext(AuthContext)

	const chooseCourse = courseId => {
		findCourse(courseId)
		setShowUpdateCourseModal(true)
	}
	 
	if(roleid == 1)
	return (
		<>	
			<Button className='post-button' href={url} target='_blank'>
				<img src={playIcon} alt='play' width='32' height='32' />
			</Button>
			
			<Button className='post-button' onClick={chooseCourse.bind(this, _id)}>
				<img src={editIcon} alt='edit' width='24' height='24' />
			</Button>
			<Button className='post-button' onClick={deleteCourse.bind(this, _id)}>
				<img src={deleteIcon} alt='delete' width='24' height='24' />
			</Button>
		</>
	)
	
	else
	
	{
		return(<>      
				<div id ="demo">Đăng kí khóa học ngay!</div>
				<Button type="button" >
					Đăng Kí Khóa Học
				</Button>		
				</>
			)
		};	
}

export default ActionButtons