import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/logo.jpg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'


const NavbarMenu = () => {
    //lay username từ authSate trả về từ backend
	const {
		authState: {
			user: { username }
			
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser()

	return (
		<Navbar expand='lg' bg='dat' variant='dark' className='shadow'>
			<Navbar.Brand className='font-weight-bolder text-white'>
				<img
					src={Logo}
					alt='Logo'
					width='30'
					height='30'
					className='mr-2'
				/>
				LEST GO!
			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link
						className='font-weight-bolder text-white '
						to='/dashboard'
						as={Link}
					>
						LịchTập/Schedule
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/about'
						as={Link}
					>
						XemThêm
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/trangchu'
						as={Link}
					>
						TrangChủ
					</Nav.Link>
					
				</Nav>

				<Nav>
					<Nav.Link className='font-weight-bolder text-black'
                    style={{ marginLeft: 1120 }}  disabled>
                        
						Xin Chào {username}!
					</Nav.Link>
					<Button
                        
						variant='secondary'
						className='font-weight-bolder text-white'
						onClick={logout}
                        
					>
						<img
							src={logoutIcon}
							alt='logoutIcon'
							width='32'
							height='32'
							className='mr-2'
						/>
						Logout
					</Button>
                   
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}


export default NavbarMenu