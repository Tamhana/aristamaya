interface IProps {
  pt: string;
  period: string;
  job: String;
  jobdesc: string;
  desc: string;
}

export default function Expcard({ pt, period, job, jobdesc, desc }: IProps) {
  return (
    <div className="snap-center flex flex-col flex-shrink-0 border border-sky-500 rounded-md p-3 h-full w-64 md:w-full">
      <h1 className="px-1 text-2xl font-semibold">{pt}</h1>
      <h1 className="px-1">{period}</h1>
      <h1 className="px-1">{job}</h1>
      <h1 className="px-1">{jobdesc}</h1>
      <h1 className="px-1">{desc}</h1>
    </div>
  );
}
