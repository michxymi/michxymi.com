import { Key } from "react";

export default function Roles({jobRoles} : {jobRoles: any}) {
    return (
        <div className="shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          <ul className="divide-y divide-primary-focus">
            {jobRoles.map((jobRole: {title:string, company:string, duration:number, responsibilities:string[]}, index: Key | null | undefined ) => (
              <li key={index} className="py-4">
                <h3 className="text-lg font-medium">{jobRole.title}</h3>
                <p className="">{jobRole.company}</p>
                <p className="">{jobRole.duration}</p>
                <ul className="list-disc list-inside pl-6">
                  {jobRole.responsibilities.map((responsibility, index) => (
                    <li key={index} className="">{responsibility}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    };
