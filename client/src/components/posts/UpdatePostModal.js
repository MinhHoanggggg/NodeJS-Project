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

	const { title, description, url, status } = updatedPost

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

	// const resetAddPostData = () => {
	// 	setNewPost({ title: '', description: '', url: '', status: 'TO LEARN' })
	// 	setShowAddPostModal(false)
	// }

	return (
		<Modal show={showUpdatePostModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Thông Tin Khóa Tập</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Tên Khóa Tập'
							name='title'
							required
							aria-describedby='title-help'
							value={title}
							onChange={onChangeUpdatedPostForm}
						/>
						<Form.Text id='title-help' muted>
							Ghi Chú
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Ghi Chú'
							name='description'
							value={description}
							onChange={onChangeUpdatedPostForm}
						/>
					</Form.Group>
					<Form.Group>
                    <Form.Text id='title-help' muted>
							Xem thêm video về khóa tập
						</Form.Text>
						<Form.Control
							type='text'
                            aria-describedby='title-help'
							placeholder='Link Video Khóa Tập'
							name='url'
							value={url}
							onChange={onChangeUpdatedPostForm}
						/>
                       
					</Form.Group>
					<Form.Group>
						<Form.Control
							as='select'
							value={status}
							name='status'
							onChange={onChangeUpdatedPostForm}
						>
							<option value='GYM KÈM PT'>GYM KÈM PT</option>
							<option value='YOGA KÈM PT'>YOGA KÈM PT</option>
							<option value='TỰ TẬP'>TỰ TẬP </option>
						</Form.Control>
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

export default UpdatePostModal