import { Key } from "react";

export default function Roles({jobRoles} : {jobRoles: any}) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {jobRoles.map((jobRole: {title:string, company:string, duration:number, responsibilities:string[]}, index: Key | null | undefined ) => (
          <div key={index} className="card bg-base-300 mb-4">
            <div className="card-body">
              <h3 className="text-lg font-medium mb-2">{jobRole.title}</h3>
              <p className="mb-2">{jobRole.company}</p>
              <p className="mb-4">{jobRole.duration}</p>
              <ul className="list-disc list-inside pl-6">
                {jobRole.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
