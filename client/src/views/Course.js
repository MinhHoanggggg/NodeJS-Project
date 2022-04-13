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

    useEffect(() => getCourses(), []);

    let body = null

    if (coursesLoading) {
		body = (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)
	} 

//     else if ( roleid == 1) {
// 		body = (
// 			<>
// 				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
// 					{courses.map(course => (
// 						<Col key={course._id} className='my-2'>
// 							<SingleCourse course={course} />
// 						</Col>
// 					))}
// 				</Row>

// 				<OverlayTrigger placement='left' overlay={<Tooltip>Thêm bài học</Tooltip>}>
					
// 				<Button className='btn-floating' onClick={setShowAddCourseModal.bind(this,true)}>
// 					<img src={addIcon} alt="add-course" width='60'height='60'/>
// 				</Button>

// 				</OverlayTrigger>    
// 			</>
// 		)	
// 	} 

    else

//     {
		
// 		body = (
// 			<>
// 				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
// 					{courses.map(course => (
// 						<Col key={course._id} className='my-2'>
// 							<SingleCourse course={course} />
// 						</Col>
// 					))}
// 				</Row>
// 			</>	)
//     }

body = (
	<>
		<h1>hehehehehe</h1>
	</>
)
return <div className='landing1'><h1> {body} </h1> </div>

// return <div className='landing1'>
//             <h1> {body} </h1> 
//             <AddCourseModal />
//             {course !== null && <UpdateCourseModal /> }

// 	<Toast show={show} style={{position: 'fixed', top:'20%', right:'10px'}} className={`bg-${type} text-white`}
// 		onClose={setShowToast.bind(this,{
// 			show: false, 
// 			message: '', 
// 			type: null
// 			})}
// 			delay={3000}
// 			autohide
// 			>
            	
// 		<Toast.Body>
// 			<strong>{message}</strong>
// 		</Toast.Body>

// 	</Toast>
// </div>

}

export default Course
