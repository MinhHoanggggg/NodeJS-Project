import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import NavbarMenu from '../layout/NavbarMenu'

const PublicRoute = ({ component: Component, ...rest }) => {
	const {
		authState: { authLoading,  }
	} = useContext(AuthContext)

	

	return (
		<Route
			{...rest}
			render={props =>
				 (
					<>
						<NavbarMenu />
						<Component {...rest} {...props} />
					</>
				) 
			}
		/>
	)
}

export default  PublicRoute
    

