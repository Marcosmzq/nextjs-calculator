import Head from "next/head";
import Calculator from "components/Calculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculator</title>
      </Head>
      <div
        className="min-h-screen w-screen flex justify-center items-center 
        bg-gray-100"
      >
        <Calculator />
      </div>
    </>
  );
}
