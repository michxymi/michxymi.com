import { Key } from "react";
import Link from "next/link"

export default function Roles({jobRoles} : {jobRoles: any}) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
        {jobRoles.map((jobRole: {title:string, company:string, duration:number, url:string}, index: Key | null | undefined ) => (
          <div key={index} className="card bg-base-300 mb-4">
            <div className="card-body">
              <h3 className="text-lg font-medium mb-2">{jobRole.title}</h3>
              <Link href={jobRole.url} className="mb-2 underline underline-offset-4 hover:no-underline">{jobRole.company}</Link>
              <p className="mb-4">{jobRole.duration}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
