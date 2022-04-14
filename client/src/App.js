import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'
import Course from './views/Course'
import ProtectedRoute from './components/routing/ProtectedRoute'
import About from './views/About'
import PostContextProvider from './contexts/PostContext'
import trangchu from './views/trangchu'
import CourseContextProvider from './contexts/CourseContext'
import DetailCourse from './views/DetailCourse'


function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <CourseContextProvider>
				<Router>
					<Switch>
					<Route exact path='/trangchu' component={trangchu} />
					<Route exact path='/' component={trangchu} />
					<Route
						exact
						path='/login'
						render={props => <Auth {...props} authRoute='login' />}
					/>
					
					<Route
						exact
						path='/register'
						render={props => <Auth {...props} authRoute='register' />}
					/>
				
					<Route
						exact
						path='/registerKH'
						render={props => <Auth {...props} authRoute='registerKH' />}
					/>
					
					<ProtectedRoute exact path='/dashboard' component={Dashboard} />
					<ProtectedRoute exact path='/course/:id' component={Course} />
					<ProtectedRoute exact path='/about' component={About} />
					<ProtectedRoute exact path='/detailCourse/:url' component={DetailCourse} />
					</Switch>
				</Router>
		</CourseContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App
