import { Fragment } from 'react';
import { resume } from '../data/resume';

export function ResumeTable() {
  return (
    <div className="p-6 print:p-0 max-w-5xl mx-auto text-xs leading-normal text-gray-900">
      <h1 className="text-4xl font-normal text-indigo-800 mb-2">{resume.name}</h1>
      <p className="text-lg font-normal text-indigo-800">{resume.title}</p>
      <p className="mb-4 text-indigo-800 text-xxs font-normal">
        {resume.contact.email} | {resume.contact.phone} | {resume.contact.location}
      </p>
      <h2 className="text-base font-normal uppercase border-b pb-0.5 mb-1">Professional Summary</h2>
      <p className="mb-4 ">{resume.summary}</p>

      <h2 className="text-base font-normal uppercase mb-1">Tech Stack</h2>
      <table className="w-full border border-gray-300 mb-6">
        <tbody>
          {Object.entries(resume.techStack).map(([key, values]) => (
            <tr key={key}>
              <td className="font-semibold p-2 border capitalize bg-gray-200">{key}</td>
              <td className="p-2 border">{values.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-base font-normal uppercase border-b pb-0.5  mb-1">Experience</h2>
      <table className="w-full mb-6 text-left border-none border-collapse">
        <tbody>
          {resume.experience.map((job, i) => (
            <Fragment key={String(i)}>
              <tr>
                <td className="pt-2 font-light underline">
                  {job.role} | {job.company} | {job.location}
                </td>
                <td className="pt-2 text-right">{job.period}</td>
              </tr>
              {!!job.shortDescription && (
                <tr>
                  <td className="py-2 italic" colSpan={2}>
                    {job.shortDescription}
                  </td>
                </tr>
              )}
              {!!job.highlights.length && (
                <tr>
                  <td className="py-2" colSpan={2}>
                    <ul className="list-disc list-inside ml-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={String(i)}>{highlight}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
              {!!job.technologies.length && (
                <tr>
                  <td className="pb-2" colSpan={2}>
                    Technologies: <span className="italic">{job.technologies.join(', ')}</span>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <h2 className="text-base font-normal uppercase border-b pb-0.5 mb-1">Education</h2>
      <table className="w-full mb-6 text-left border-none border-collapse">
        <tbody>
          <tr>
            <td className="py-2">
              {resume.education.degree}, {resume.education.institution}
            </td>
            <td className="py-2 text-right">{resume.education.period}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-base font-normal uppercase border-b pb-0.5 mb-1">Activities</h2>
      <table className="w-full mb-6 text-left border-none border-collapse">
        <tbody>
          {resume.activities.map((activity, i) => (
            <Fragment key={String(i)}>
              <tr>
                <td className="pt-2 font-light underline">{activity.title}</td>
                <td className="pt-2 text-right">{activity.period}</td>
              </tr>
              <tr>
                <td className="pb-2">{activity.description}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>

      <h2 className="text-base font-normal uppercase border-b pb-0.5 mb-1">Profiles</h2>
      <table className="w-full mb-6 text-left border-none border-collapse">
        <tbody>
          {resume.profiles.map((profile, i) => (
            <tr key={String(i)}>
              <td className="">{profile.title}</td>
              <td className="text-left">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-indigo-500"
                >
                  {profile.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
