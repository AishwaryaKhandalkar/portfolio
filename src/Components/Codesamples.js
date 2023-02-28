import React from 'react'
import Project1 from '../cocktaildb.png'
import Project2 from '../teambuilder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { openInNewTab } from './Header'

function Codesamples() {
  return (
    <section id='work'>
      <div className='lg:grid project block'>
        <div className='project-image'>
          <a href="#" onClick = {() => openInNewTab("https://github.com/AishwaryaKhandalkar/reactproject_cocktaildb")} className='project-screenshot'>
            <img src={Project1} alt="cocktails database project screenshot"/>
          </a>
        </div>
        <div className='project-name text-left'>
          <div>
            <p className="project-overline">Project</p>
            <h3 className="project-title text-teal-300">
              <a>Cocktail Database</a>
            </h3>
            <div className="project-description">
              <p>A multiple page project to fetch variety of cocktails with REST API and display details about it. This project also features a search option to search specific cockatils
              </p>
            </div>
            <ul className="project-tech-list">
              <li className='mr-2'>Concepts used:</li>
              <li className='mr-2'>React</li>
              <li className='mr-2'>React Router 6</li>
              <li className='mr-2'>REST API</li>
            </ul>
            <div className="project-links">
              <a className='mr-4' aria-label="GitHub Link" href="#" onClick = {() => openInNewTab("https://github.com/AishwaryaKhandalkar/reactproject_cocktaildb")}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a aria-label="External Link" href="#" onClick = {() => openInNewTab("#")}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:grid project block'>
        <div className='project-name text-right'>
          <div>
            <p className="project-overline lg:text-right text-left">Project</p>
            <h3 className="project-title text-teal-300 lg:text-right text-left">
              <a>Team Member Allocation</a>
            </h3>
            <div className="project-description">
              <p></p>
            </div>
            <ul className="project-tech-list lg:text-right text-left">
              <li className='mr-2'>Concepts used:</li>
              <li className='mr-2'>React</li>
              <li className='mr-2'>local Storage</li>
            </ul>
            <div className="project-links lg:text-right text-left">
              <a className='mr-4' aria-label="GitHub Link" href="#" onClick = {() => openInNewTab("https://github.com/AishwaryaKhandalkar/reactproject_cocktaildb")}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a aria-label="external link" href="#" onClick = {() => openInNewTab("#")}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
        <div className='project-image'>
          <a aria-label="Team builder project" href="#" onClick = {() => openInNewTab("#")} className='project-screenshot'>
            <img src={Project2} alt="team builder project screenshot"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Codesamples