import { CourseContext } from '../contexts/CourseContext'
import { AuthContext } from '../contexts/AuthContext'
import { useContext, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'
import SingleCourse from '../components/courses/SingleCourse'
import UpdateCourseModal from '../components/courses/UpdateCourseModal'
import addIcon from '../assets/plus-circle-fill.svg'
import AddCourseModal from '../components/courses/AddCourseModal'
import { useParams } from 'react-router-dom';
import Banner from '../components/layout/Banner'

const Course = () => {

	// Contexts
	const {authState: {user: { roleid }}} = useContext(AuthContext)

    const {
		courseState: { course, courses, coursesLoading },
		getCourses,
		setShowAddCourseModal,
		showToast: { show, message, type },
		setShowToast
	} = useContext(CourseContext)

	let body = null;
	let { id } = useParams();

    useEffect(() => getCourses(id), [id]);

    if (coursesLoading) {
		body = (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)
	} 

    else if ( roleid == 1) {
		body = (
			<>
                <Banner />
				<h2 className='text-center mt-4'>Danh sách bài học</h2>
				<div className='container-sm'>
					<Row className='row-cols-1 row-cols-md-1 mx-auto mt-3'>
						{courses.map(course => (
							<Col key={course._id} className='my-2'>
								<SingleCourse course={course} />
							</Col>
						))}
					</Row>
				</div>
				
				<OverlayTrigger placement='left' overlay={<Tooltip>Thêm bài học</Tooltip>}>
					
				<Button className='btn-floating' onClick={setShowAddCourseModal.bind(this, true)}>
					<img src={addIcon} alt="add-course" width='60'height='60'/>
				</Button>

				</OverlayTrigger>    
			</>
		)	
	} 

    else

    {
		
		body = (
			<>
				<Banner />
				<h2 className='text-center mt-4'>Danh sách bài học</h2>
				<div className='container-sm'>
					<Row className='row-cols-1 row-cols-md-1 mx-auto mt-3'>
						{courses.map(course => (
							<Col key={course._id} className='my-2'>
								<SingleCourse course={course} />
							</Col>
						))}
					</Row>
				</div>
			</>	)
    }

return <div className='landing1'>
            <h1> {body} </h1> 
			
			<AddCourseModal postId={id} />
            {course !== null && <UpdateCourseModal /> }

	<Toast show={show} style={{position: 'fixed', top:'20%', right:'10px'}} className={`bg-${type} text-white`}
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

export default Course
