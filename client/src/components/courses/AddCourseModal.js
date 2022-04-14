import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { CourseContext } from '../../contexts/CourseContext'
// import { useParams } from 'react-router-dom';

const AddCourseModal = ({ postId }) => {
    
    //Contexts
    const {showAddCourseModal, setShowAddCourseModal, addCourse, setShowToast} = useContext(CourseContext)

    //State
    const [newCourse, setNewCourse] = useState({
        post: postId,
        title: '',
        url: ''
    })

    const {title, description, url} = newCourse
    const onChangeNameCourseForm = event => setNewCourse({...newCourse, [event.target.name]: event.target.value})
    const closeDialog = () => {
        resetAddCourseData()
    }

    const onSubmit = async event => {
        event.preventDefault()

        const{success, message} = await addCourse(newCourse)
        resetAddCourseData()
       setShowToast({show: true, message, type: success ? 'success': 'danger'})
    }

    const resetAddCourseData = () => {
        setNewCourse({ post: postId, title: '', description: '', url: ''})
        setShowAddCourseModal(false)
    }

    return (

        <Modal show={showAddCourseModal} animation={true} onHide={closeDialog}> 
            <Modal.Header closeButton>
                <Modal.Title>Thêm khóa học mới</Modal.Title>
            </Modal.Header>

            <Form onSubmit={onSubmit}>
                <Modal.Body>
                                   
                    <Form.Group>
                        <Form.Control type ='text' placeholder='Tiêu Đề' name ='title' required aria-describedby='title-help'
                        value={title}
                        onChange={onChangeNameCourseForm}
                         />
                    </Form.Group>

                     <Form.Group className='mt-2'>
                        <Form.Control as='textarea' rows={3} placeholder='Link'
                        name='url'
                        value={url}
                        onChange={onChangeNameCourseForm} />
                     </Form.Group>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}>Hủy</Button>
                    <Button variant ='primary' type='submit'>Thêm khóa học</Button>
                </Modal.Footer>

            </Form>
        </Modal>
    )

}

export default AddCourseModal