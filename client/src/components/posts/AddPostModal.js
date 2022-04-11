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
      url: '',
      status: 'TỰ TẬP'  
    })

    const {title, description, url} = newPost
    const onChangeNamePostForm = event => setNewPost({...newPost,[event.target.name]: event.target.value})
    const closeDialog = () => {
        resetAddPostData()
    }
// xu li nut Learnit
    const onSubmit = async event => {
        event.preventDefault()
        const{success, message} = await addPost(newPost)
       resetAddPostData()
       setShowToast({show: true, message, type: success ? 'success': 'danger'})
    }
    const resetAddPostData = () => {
        setNewPost({ title:'', description: '', url: '', status:'GYM KÈM PT'})
        setShowAddPostModal(false)
    }



    return (
        <Modal show ={showAddPostModal} animation ={true} onHide = {closeDialog}> 
            <Modal.Header closeButton>
                <Modal.Title>Thêm khóa tập</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control type ='text' placeholder='Tiêu Đề' name ='title' required aria-describedby='title-help'
                        value={title}
                        onChange={onChangeNamePostForm}
                         />
                        <Form.Text id='title-help' muted> Ghi chú</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as ='textarea' rows={3} placeholder='Thêm Chú Thích'
                        name='description'
                        value={description}
                        onChange={onChangeNamePostForm} />
                     </Form.Group>
                     <Form.Group>
                         <Form.Control type = 'text' placeholder='Link video khóa tập' 
                             name = 'url'
                             value={url}
                        onChange={onChangeNamePostForm}
                         />
                     </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}> Cancel </Button>
                    <Button variant ='primary' type='submit'>Thêm khóa tập
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}


export default AddPostModal