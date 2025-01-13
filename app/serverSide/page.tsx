interface Book {
    id: number;
    name: string;
    type: string;
    available: boolean;
}
export default async function Server() {

    const responce = await fetch("https://simple-books-api.glitch.me/books/");
    const parsedResponse = await responce.json();
    const data : Book[] = await parsedResponse;
  return (
    <div className="bg-slate-800 flex flex-col items-center px-5 gap-4 h-screen w-screen">
        <h1 className="text-6xl font-bold text-white/70 mt-6 mb-12 max-sm:text-3xl max-sm:mt-3 max-sm:mb-6 max-sm:text-center">Server Side Data Fetching</h1>
        <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {data.map((book) =>
                <div key={book.id} className="bg-slate-950 w-[35rem] h-[9rem] max-sm:w-[20rem] max-sm:h-[7rem] border-2 max-sm:border-[1px] border-orange-700 rounded-md text-yellow-500 flex justify-between">
                    <div className="pl-4 pt-6 max-sm:pl-2 max-sm:pt-2">
                        <h1 className="text-3xl font-semibold text-[#26ad5c] max-sm:text-xl">{book.name}</h1>
                        <h2 className="text-2xl font-semibold text-[#c02c2c] max-sm:text-lg">{book.type}</h2>
                    </div>
                    {book.available ? <div className="bg-orange-500 text-white p-2 max-sm:p-1 rounded-r-md self-end text-3xl max-sm:text-xl font-semibold active:opacity-70 h-full flex justify-center items-center w-[200px] max-sm:w-[90px]">Available</div> : <div className="bg-red-500 w-[200px] max-sm:w-[90px] text-white p-2 max-sm:p-1 rounded-r-md self-end text-3xl max-sm:text-xl font-semibold active:opacity-70 h-full flex justify-center items-center max-sm:text-center">Not Available</div> }
                </div>
            )}
        </div>
    </div>
  )
}
