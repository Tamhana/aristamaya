import Expcard from "./expcard";

export default function Exp() {
  return (
    <div className="relative flex flex-col h-full w-full pb-10 overflow-hidden">
      <h1 className="tracking-[10px] text-center text-lg mb-10">Experiences</h1>
      <div className="flex h-full w-full flex-col snap-y snap-mandatory overflow-y-scroll gap-14 hidesb">
        <Expcard
          pt="PT. Andalas Mitra Global"
          period="November 2021 - Sekarang"
          job="Finance Accounting"
          jobdesc="Entry mutasi rekening cek mutasi rekening dengan buku besar disistem Accurate. Cek buku besar semua transaksi disistem. Entry transaksi ke system. Entry jurnal adjustmen. Entry petty cash. Payment Invoice. Membuat laporan PPN."
          desc=""
        />
        <Expcard
          pt="PT. Indah Prakasa Sentosa"
          period="November 2014 - Agustus 2020"
          job="Finance Accounting"
          jobdesc=""
          desc=""
        />
        <Expcard pt="PT. Bima Multi Finance" period="Mei 2013 - November 2014" job="Staff Accounting" jobdesc="" desc="" />
      </div>
    </div>
  );
}
