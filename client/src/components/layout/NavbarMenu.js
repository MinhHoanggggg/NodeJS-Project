import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react'
import { BsFillCartFill } from "react-icons/bs";

const NavbarMenu = () => {
	const {
		authState: {
			user: { username }
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser();

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">3H STORE</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll >
						<Nav.Link href="/introduce">Giới thiệu</Nav.Link>
						<Nav.Link href="/lookbook">Tài liệu</Nav.Link>
						<Nav.Link href="/lookbook">Template</Nav.Link>
						<Nav.Link href="/lookbook">Công cụ</Nav.Link>

						<NavDropdown title="Khóa học" id="navbarScrollingDropdown">
						<NavDropdown.Item href="/listproduct">Mobile</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Web</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Java</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Winform C#</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Database</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">DevOps</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Python</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Android</NavDropdown.Item>
						</NavDropdown>
						
						<Form className="d-flex">
						<FormControl
						type="search"
						placeholder="Tìm kiếm"
						className="me-2"
						aria-label="Tìm kiếm"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>	
					</Nav>

					<NavDropdown title={username} id="navbarScrollingDropdown">
						<NavDropdown.Item href="/listproduct">Quản lí tài khoản</NavDropdown.Item>
						<NavDropdown.Item href="#action4">Đổi mật khẩu</NavDropdown.Item>
						<NavDropdown.Item href="#action5">
							Something else
						</NavDropdown.Item>
						<NavDropdown.Item href="#action5">
							Something else
						</NavDropdown.Item>

						<Dropdown.Divider />

						<NavDropdown.Item onClick={logout}>
							Đăng xuất
						</NavDropdown.Item>

					</NavDropdown>	
					
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default NavbarMenu