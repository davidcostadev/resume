import { ResumeTable } from '../components/resume-table';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center font-avenir">
      <div className="max-w-[20.3cm] mx-auto">
        <ResumeTable />
      </div>
    </div>
  );
}
