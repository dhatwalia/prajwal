import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ResearchPage from './pages/ResearchPage';
import ResearchListPage from './pages/ResearchListPage';
import ProjectPage from './pages/ProjectPage';
import ProjectListPage from './pages/ProjectListPage';
import VolunteerPage from './pages/VolunteerPage';
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/contact" component={ContactPage} />
                <Route path="/research/:name" component={ResearchPage} />
                <Route path="/research-list" component={ResearchListPage} />
                <Route path="/project/:name" component={ProjectPage} />
                <Route path="/project-list" component={ProjectListPage} />
                <Route path="/volunteer" component={VolunteerPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
