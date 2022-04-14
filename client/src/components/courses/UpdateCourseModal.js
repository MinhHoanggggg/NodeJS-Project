import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState, useEffect } from 'react'
import { CourseContext } from '../../contexts/CourseContext'

const UpdateCourseModal = () => {

	// Contexts
	const {
		courseState: { course },
		showUpdateCourseModal,
		setShowUpdateCourseModal,
		updateCourse,
		setShowToast
	} = useContext(CourseContext)

	// State
	const [updatedCourse, setUpdatedCourse] = useState(course)

	useEffect(() => setUpdatedCourse(course), [course])

	const { title, url } = updatedCourse

	const onChangeUpdatedCourseForm = event =>
		setUpdatedCourse({ ...updatedCourse, [event.target.name]: event.target.value })

	const closeDialog = () => {
		setUpdatedCourse(course)
		setShowUpdateCourseModal(false)
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await updateCourse(updatedCourse)
		setShowUpdateCourseModal(false)
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	return (
		<Modal show={showUpdateCourseModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Thông tin khóa học</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
					
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Tên Khóa học'
							name='title'
							required
							aria-describedby='title-help'
							value={title}
							onChange={onChangeUpdatedCourseForm}
						/>
					</Form.Group>

					<Form.Group className='mt-2'>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Link'
							name='url'
							value={url}
							onChange={onChangeUpdatedCourseForm}
						/>
					</Form.Group>
				</Modal.Body>
				
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog}>
						Hủy
					</Button>
					<Button variant='primary' type='submit'>
						Thêm
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default UpdateCourseModal