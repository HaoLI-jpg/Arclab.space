import React from 'react'

export const PageInfo = () => {

    const info = {
        project: "Naumi Hotel, Wellington MC",
        client: "Jamie & David Herald",
        status: "In Progress",
        survey_date: "06.08.2021",
        issue_date: "21.08.2021"
    }

  return (
    <div>
        <div>
            <span>PROJECTS: </span>
            <span>{info.project}</span>
            <br />
        </div>
        <div>
            <span>CLIENT: </span>
            <span>{info.client}</span>
            <br />
        </div>
        <div>
            <span>STATUS: </span>
            <span>{info.status}</span>
            <br />
        </div>
        <div>
            <span>SURVEY DATE: </span>
            <span>{info.survey_date}</span>
            <br />
        </div>
        <div>
            <span>ISSUE DATE: </span>
            <span>{info.issue_date}</span>
            <br />
        </div>
        
    </div>
  )
}
