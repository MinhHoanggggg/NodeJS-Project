import Button from 'react-bootstrap/Button'
import playIcon from '../../assets/play-btn.svg'
import editIcon from '../../assets/pencil.svg'
import deleteIcon from '../../assets/trash.svg'
import { CourseContext } from '../../contexts/CourseContext'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useState } from 'react'

const ActionButtons = ({ _id }) => {
	
	const { deleteCourse, findCourse, setShowUpdateCourseModal } = useContext(CourseContext)
	
	const {authState: {user: { roleid }}} = useContext(AuthContext)

	const {courseState: { course }} = useContext(CourseContext)

	const chooseCourse = courseId => {
		findCourse(courseId)
		setShowUpdateCourseModal(true)
	}

	const detailCourse = courseId => {
		findCourse(courseId)
		window.location.assign('/detailCourse/' + course.url);
	}
	 
	if(roleid == 1)
	return (
		<>	
			<Button className="btn btn-info m-1" onClick={detailCourse.bind(this, _id)}>
				Xem bài học
			</Button>
			<Button className="btn m-1" onClick={chooseCourse.bind(this, _id)}>
				Chỉnh sửa
			</Button>
			<Button className="btn btn-danger m-1" onClick={deleteCourse.bind(this, _id)}>
				Xóa	
			</Button>
		</>
	)
	
	else
	
	{
		return(<>      
					<Button className="btn btn-info m-1" onClick={detailCourse.bind(this, _id)}>
						Xem bài học
					</Button>
				</>
			)
	};	
};	

export default ActionButtons