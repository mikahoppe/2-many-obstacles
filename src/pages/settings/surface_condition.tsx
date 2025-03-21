
export default function SurfaceCondition(props : {onSubmit : (next: boolean) => void}) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Welcome to the app!</h2>
        <div className="mt-4 flex justify-between">
            <button className="p-2 bg-red-500 text-white rounded" onClick={() => props.onSubmit(false)}>
            Back
            </button>
            <button className="p-2 bg-blue-500 text-white rounded" onClick={() => props.onSubmit(true)}>
            Next
            </button>
        </div>
    </div>
  );
}