import { createContext, useReducer, useState } from 'react'
import { courseReducer } from '../reducers/courseReducer'
import {apiUrl, COURSE_LOADED_SUCCESS, COURSE_LOADED_FAIL, ADD_COURSE, DELETE_COURSE, UPDATE_COURSE, FIND_COURSE} from './constants'
import axios from 'axios'

export const CourseContext = createContext()

const CourseContextProvider = ({ children }) => {

    // State
	const [courseState, dispatch] = useReducer(courseReducer, {
		course: null,
		courses: [],
		courseLoading: true
	})

    //Modal
	const [showAddCourseModal, setShowAddCourseModal] = useState(false)
	const [showUpdateCourseModal, setShowUpdateCourseModal] = useState(false)
	const [showToast, setShowToast] = useState({
		show: false,
		message: '',
		type: null
	})

    // Get all courses
	const getCourses = async (postId) => {
		try {
			const response = await axios.get(`${apiUrl}/course/${postId}`)
			if (response.data.success) {
				dispatch({ type: COURSE_LOADED_SUCCESS, payload: response.data.courses })
			}
		} catch (error) {
			dispatch({ type: COURSE_LOADED_FAIL })
		}
	}

	// Find post when user is updating course
	const findCourse = courseId => {
		const course = courseState.courses.find(course => course._id === courseId)
		dispatch({ type: FIND_COURSE, payload: course })
	}

    // Post context data
	const courseContextData = {
		courseState,
		getCourses,
		findCourse,
        // addCourse,
        // deleteCourse,
		// updateCourse,
		showToast,
		setShowToast,
		showAddCourseModal,
		setShowAddCourseModal,
		showUpdateCourseModal,
		setShowUpdateCourseModal,
	}

    return (
		<CourseContext.Provider value={courseContextData}>
			{children}
		</CourseContext.Provider>
	)
}

export default CourseContextProvider 