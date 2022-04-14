import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState, useEffect } from 'react'
import { PostContext } from '../../contexts/PostContext'

const UpdatePostModal = () => {
	// Contexts
	const {
		postState: { post },
		showUpdatePostModal,
		setShowUpdatePostModal,
		updatePost,
		setShowToast
	} = useContext(PostContext)

	// State
	const [updatedPost, setUpdatedPost] = useState(post)

	useEffect(() => setUpdatedPost(post), [post])

	const { title, description, status, img } = updatedPost

	const onChangeUpdatedPostForm = event =>
		setUpdatedPost({ ...updatedPost, [event.target.name]: event.target.value })

	const closeDialog = () => {
		setUpdatedPost(post)
		setShowUpdatePostModal(false)
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await updatePost(updatedPost)
		setShowUpdatePostModal(false)
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	return (
		<Modal show={showUpdatePostModal} onHide={closeDialog}>
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
							onChange={onChangeUpdatedPostForm}
						/>
					</Form.Group>

					<Form.Group className='mt-2'>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Mô tả'
							name='description'
							value={description}
							onChange={onChangeUpdatedPostForm}
						/>
					</Form.Group>

					<Form.Group className='mt-2'>
						<Form.Control
							as='textarea'
							rows={7}
							placeholder='Mô tả'
							name='img'
							value={img}
							onChange={onChangeUpdatedPostForm}
						/>
					</Form.Group>

					<Form.Group className='mt-2'>
						<Form.Control
							as='select'
							value={status}
							name='status'
							onChange={onChangeUpdatedPostForm}
						>
							<option value='NHẬP MÔN'>NHẬP MÔN</option>
							<option value='TRUNG BÌNH'>TRUNG BÌNH</option>
							<option value='NÂNG CAO'>NÂNG CAO</option>
						</Form.Control>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog}>
						Hủy
					</Button>
					<Button variant='primary' type='submit'>
						Quất
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default UpdatePostModal