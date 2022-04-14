import { createContext, useReducer, useState } from 'react'
import { courseReducer } from '../reducers/courseReducer'
import {apiUrl, COURSE_LOADED_SUCCESS, COURSE_LOADED_FAIL, ADD_COURSE, DELETE_COURSE, UPDATE_COURSE, FIND_COURSE} from './constants'
import axios from 'axios';

export const CourseContext = createContext()

const CourseContextProvider = ({ children }) => {

    // State
	const [courseState, dispatch] = useReducer(courseReducer, {
		course: null,
		courses: [],
		coursesLoading: true
	})

    //Modal
	const [showAddCourseModal, setShowAddCourseModal] = useState(false)
	const [showDetailModal, setShowDetailModal] = useState(false)
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

	// Add course
	const addCourse = async (newCourse) => {
		try {
			const response = await axios.post(`${apiUrl}/course/add`, newCourse)
			if (response.data.success) {
				dispatch({ type: ADD_COURSE, payload: response.data.course })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
	
	// Delete course
	const deleteCourse = async courseId => {
		try {
			const response = await axios.delete(`${apiUrl}/course/delete/${courseId}`)
			if (response.data.success)
				dispatch({ type: DELETE_COURSE, payload: courseId })
		} catch (error) {
			console.log(error)
		}
	}

	// Update course
	const updateCourse = async updatedCourse => {
		try {
			const response = await axios.put(
				`${apiUrl}/course/update/${updatedCourse._id}`,
				updatedCourse
			)
			if (response.data.success) {
				dispatch({ type: UPDATE_COURSE, payload: response.data.course })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Find course when user is updating course
	const findCourse = courseId => {
		const course = courseState.courses.find(course => course._id === courseId)
		dispatch({ type: FIND_COURSE, payload: course })
	}

    // Post context data
	const courseContextData = {
		courseState,
		getCourses,
		findCourse,
        addCourse,
        deleteCourse,
		updateCourse,
		showToast,
		setShowToast,
		showAddCourseModal,
		setShowAddCourseModal,
		showUpdateCourseModal,
		setShowUpdateCourseModal,
		setShowDetailModal,
		showDetailModal
	}

    return (
		<CourseContext.Provider value={courseContextData}>
			{children}
		</CourseContext.Provider>
	)
}

export default CourseContextProvider 