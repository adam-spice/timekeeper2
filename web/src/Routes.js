// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/projects/new" page={NewProjectPage} name="newProject" />
      <Route path="/projects/{id:Int}/edit" page={EditProjectPage} name="editProject" />
      <Route path="/projects/{id:Int}" page={ProjectPage} name="project" />
      <Route path="/projects" page={ProjectsPage} name="projects" />
      <Route path="/priorities/new" page={NewPriorityPage} name="newPriority" />
      <Route path="/priorities/{id:Int}/edit" page={EditPriorityPage} name="editPriority" />
      <Route path="/priorities/{id:Int}" page={PriorityPage} name="priority" />
      <Route path="/priorities" page={PrioritiesPage} name="priorities" />
      <Route path="/works/new" page={NewWorkPage} name="newWork" />
      <Route path="/works/{id:Int}/edit" page={EditWorkPage} name="editWork" />
      <Route path="/works/{id:Int}" page={WorkPage} name="work" />
      <Route path="/works" page={WorksPage} name="works" />
      <Route path="/clients/new" page={NewClientPage} name="newClient" />
      <Route path="/clients/{id:Int}/edit" page={EditClientPage} name="editClient" />
      <Route path="/clients/{id:Int}" page={ClientPage} name="client" />
      <Route path="/clients" page={ClientsPage} name="clients" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
