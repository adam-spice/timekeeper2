import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const WorksLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.works()} className="rw-link">
            Works
          </Link>
        </h1>
        <Link to={routes.newWork()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Work
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default WorksLayout
