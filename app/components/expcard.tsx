interface IProps {
  pt: string;
  period: string;
  job: String;
  jobdesc: string;
  desc: string;
}

export default function Expcard({ pt, period, job, jobdesc, desc }: IProps) {
  return (
    <div className="snap-center flex flex-col flex-shrink-0 border w-64 h-96 md:w-96 ">
      <h1 className="px-1 text-2xl font-semibold">{pt}</h1>
      <h1 className="px-1">{period}</h1>
      <h1 className="px-1">{job}</h1>
      <h1 className="px-1">{jobdesc}</h1>
      <h1 className="px-1">{desc}</h1>
    </div>
  );
}
