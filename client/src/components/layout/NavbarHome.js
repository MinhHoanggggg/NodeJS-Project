import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom'

const NavbarHome = () => {

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">3H.COM</Navbar.Brand>
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

					<Link to='/login'>
                       	<Button variant='info' size='sm' className='btn-regis ml-5 m-3'>Đăng nhập</Button>
                   	</Link>	

					<Link to='/register'>
                       	<Button variant='info' size='sm' className='btn-regis ml-5'>Đăng kí</Button>
                   	</Link>	
					
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default NavbarHome