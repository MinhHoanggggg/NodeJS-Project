import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'

const AddPostModal = () => {

    //Contexts
    const {showAddPostModal, setShowAddPostModal, addPost, setShowToast} = useContext(PostContext)

    //State
    const [newPost, setNewPost] = useState({
      title: '',
      description: '',
      img: ''
    })

    const {title, description, img} = newPost
    const onChangeNamePostForm = event => setNewPost({...newPost,[event.target.name]: event.target.value})
    const closeDialog = () => {
        resetAddPostData()
    }

    const onSubmit = async event => {
        event.preventDefault()

        const{success, message} = await addPost(newPost)
       resetAddPostData()
       setShowToast({show: true, message, type: success ? 'success': 'danger'})
    }

    const resetAddPostData = () => {
        setNewPost({ title:'', description: '', status:'', img:''})
        setShowAddPostModal(false)
    }

    return (

        <Modal show ={showAddPostModal} animation ={true} onHide = {closeDialog}> 
            <Modal.Header closeButton>
                <Modal.Title>Thêm khóa học mới</Modal.Title>
            </Modal.Header>

            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control type ='text' placeholder='Tiêu Đề' name ='title' required aria-describedby='title-help'
                        value={title}
                        onChange={onChangeNamePostForm}
                         />
                    </Form.Group>

                    <Form.Group className='mt-2'>
                        <Form.Control as ='textarea' rows={3} placeholder='Thêm Chú Thích'
                        name='description'
                        value={description}
                        onChange={onChangeNamePostForm} />
                     </Form.Group>

                     
                    <Form.Group className='mt-2'>
                        <Form.Control as ='textarea' rows={3} placeholder='Link hình ảnh'
                        name='img'
                        value={img}
                        onChange={onChangeNamePostForm} />
                     </Form.Group>

                     <Form.Group className='mt-2'>
						<Form.Control
							as='select'
							name='status'
							onChange={onChangeNamePostForm}
						>
							<option value='NHẬP MÔN'>NHẬP MÔN</option>
							<option value='TRUNG BÌNH'>TRUNG BÌNH</option>
							<option value='NÂNG CAO'>NÂNG CAO</option>
						</Form.Control>
					</Form.Group>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}> Hủy </Button>
                    <Button variant ='primary' type='submit'>Thêm khóa học</Button>
                </Modal.Footer>

            </Form>
        </Modal>
    )
}

export default AddPostModal