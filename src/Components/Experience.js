import React from 'react'
import TabContent from '../Features/TabContent';
import Tabnav from '../Features/Tabnav';

function Experience() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  return (
    <section id='experience'>
      <div className='inner block lg:flex'>
        <div className='tablist w-full lg:w-max text-white'>
          <Tabnav id="tab1" title="Cybage Software" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tabnav id="tab2" title="Amura" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tabnav id="tab3" title="Syntel" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className='tabpanel lg:ml-20 lg:m-0 mt-4'>
          <TabContent activeTab={activeTab} id="tab1">
            <div className='job-experience'>
              <div className='job-title'><b>Senior Software Engineer @ <a href='https://www.cybage.com/' target='_blank'>Cybage</a></b></div>
              <div className='job-dates'>Oct 2021 - Apr 2022</div>
              <ul>
                <li>Led team of 2 on creating software reviews/feedbacks UI portal functionality</li>
                <li>Improved SEO and accessibility of a site, which drove a 20% increase in users by appearing on the first page of Google search results</li>
                <li>Led weekly client demos to ensure team met all the requirements and project guidelines were followed. Worked with PM to keep on track with the project plan, timeline so that client expectations are met</li>
                <li>Mentored new junior front-end developers on team in expanding JavaScript</li>
                <li>Worked cross team to get new pages/products tested, and addressed any issues within 48 hours</li>
              </ul>
            </div>
            <br/>
            <div className='job-experience'>
              <div className='job-title'><b>Software Engineer</b></div>
              <div className='job-dates'>Sep 2019 - Oct 2021</div>
              <ul>
                <li>Developed front-end application, I was responsible for creating UI components and accessing data using REST API calls</li>
                <li>Developed microsite with customer-facing production features</li>
                <li>Responsive websites developed without using Bootstrap to keep it an overall lightweight application.</li>
                <li>Provided production support and real-time bug fixes</li>
                <li>Created web application front end as per design specifications and architecture. Ensure design consistency with clients development standards and guidelines</li>
              </ul>
            </div>
          </TabContent>
          <TabContent activeTab={activeTab} id="tab2">
          <div className='job-experience'>
            <div className='job-title'><b>Web developer @<a href='https://www.amuratech.com/' target="_blank">Amura</a></b></div>
            <div className='job-dates'>Apr 2018 - Sep 2019</div>
              <ul>
                <li>Utilized HTML, CSS, and JavaScript to create 10+ responsive landing pages for both company and client</li>
                <li>Conducted usability testing and debugging interface problems</li>
              </ul>
            </div>
          </TabContent>
          <TabContent activeTab={activeTab} id="tab3">
            <div className='job-experience'>
              <div className='job-title'><b>Project Intern @ <a href='https://atos.net/en/' target='_blank'>Syntel</a></b></div>
              <div className='job-dates'>Sep 2019 - Oct 2021</div>
              <ul>
                <li>Developed a responsive website and web service using Oracle SOA Suite</li>
                <li>Worked on writing technical documentation for project</li>
              </ul>
            </div>
          </TabContent>
        </div>
      </div>
    </section>
  )
}

export default Experience