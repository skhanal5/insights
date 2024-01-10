
export default function PageContainer({child}) {
  return (
    <div className="md:bg-blue-600 md:flex-row flex flex-col min-h-screen max-h-screen h-screen justify-center items-center">
      <div className="md:grow"></div>
      {child}
    </div>
  );
}
