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
      <Route path="/" page={HomePage} name="home" />
      <Route path="/admin/projects/new" page={NewProjectPage} name="newProject" />
      <Route path="/admin/projects/{id:Int}/edit" page={EditProjectPage} name="editProject" />
      <Route path="/admin/projects/{id:Int}" page={ProjectPage} name="project" />
      <Route path="/admin/projects" page={ProjectsPage} name="projects" />
      <Route path="/admin/priorities/new" page={NewPriorityPage} name="newPriority" />
      <Route path="/admin/priorities/{id:Int}/edit" page={EditPriorityPage} name="editPriority" />
      <Route path="/admin/priorities/{id:Int}" page={PriorityPage} name="priority" />
      <Route path="/admin/priorities" page={PrioritiesPage} name="priorities" />
      <Route path="/admin/works/new" page={NewWorkPage} name="newWork" />
      <Route path="/admin/works/{id:Int}/edit" page={EditWorkPage} name="editWork" />
      <Route path="/admin/works/{id:Int}" page={WorkPage} name="work" />
      <Route path="/admin/works" page={WorksPage} name="works" />
      <Route path="/admin/clients/new" page={NewClientPage} name="newClient" />
      <Route path="/admin/clients/{id:Int}/edit" page={EditClientPage} name="editClient" />
      <Route path="/admin/clients/{id:Int}" page={ClientPage} name="client" />
      <Route path="/admin/clients" page={ClientsPage} name="clients" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
