export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className='spinner mb-4'></div>
        <p className='text-lg text-gray-600'>Loading Editor...</p>
      </div>
    </div>
  );
}
