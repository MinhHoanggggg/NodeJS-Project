import {COURSE_LOADED_SUCCESS, COURSE_LOADED_FAIL, ADD_COURSE, DELETE_COURSE, UPDATE_COURSE, FIND_COURSE} from '../contexts/constants'

export const courseReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		
		case COURSE_LOADED_SUCCESS:
			return {
				...state,
				courses: payload,
				coursesLoading: false
			}

		case COURSE_LOADED_FAIL:
			return {
				...state,
				courses: [],
				coursesLoading: false
			}

		case ADD_COURSE:
			return {
				...state,
				courses: [...state.courses, payload]
			}

		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter(course => course._id !== payload)
			}

		case FIND_COURSE:
			return { ...state, 
				course: payload }

		case UPDATE_COURSE:
			const newPosts = state.courses.map(course =>
				course._id === payload._id ? payload : course
			)
			return {
				...state,
				courses: newPosts
			}

		default:
			return state
	}
}